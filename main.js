const amount = document.getElementById("amount");
const price = document.getElementById("price");
const result = document.getElementById("result");
const list = document.getElementById("list");
const axios = require("axios");

const coffeeList = [
  {
    id: 1,
    name: "Americono",
    price: 1500,
  },
  {
    id: 2,
    name: "Americono2",
    price: 1600,
  },
  {
    id: 3,
    name: "Americono3",
    price: 1700,
  },
  {
    id: 4,
    name: "Americono4",
    price: 1800,
  },
];

coffeeList.forEach((coffee) => {
  list.insertAdjacentHTML(
    "beforeend",
    Render(coffee.name, coffee.price, coffee.id)
  );
});

list.addEventListener("click", function (event) {
  const isPlusOrMinusButton =
    event.target.dataset.type === "plus" ||
    event.target.dataset.type === "minus";
  if (isPlusOrMinusButton) {
    const button = event.target;
    const index = coffeeList.findIndex(
      (coffee) => coffee.id.toString() === button.dataset.index
    );
    const input = button.parentElement.querySelector("input");
    const amount = parseInt(input.value, 10);

    if (button.dataset.type === "plus") {
      input.value = amount + 1;
    } else if (button.dataset.type === "minus") {
      input.value = Math.max(amount - 1, 0);
    }

    calculateResult();
  }
});

function calculateResult() {
  let total = 0;
  coffeeList.forEach((coffee, index) => {
    const input = document.querySelector(
      `[data-index="${coffee.id}"][data-type="amount"]`
    );
    const amount = parseInt(input.value, 10);
    total += amount * coffee.price;
  });
  result.value = total;
}

// Modified Render function
function Render(name, price, id) {
  return `<label class="list-group-item d-flex gap-2 align-items-center">
             <span>${name}</span>
             <span>Price : ${price}</span>
             <button
               class="btn btn-primary rounded-pill px-3"
               type="button"
               data-type="plus"
               data-index="${id}"
             >
               +
             </button>
             <input class="form-control" data-type="amount" data-index="${id}" value="0" />
             <button
               class="btn btn-danger rounded-pill px-3"
               type="button"
               data-type="minus"
               data-index="${id}"
             >
               -
             </button>
           </label>`;
}

async function getUser() {
  try {
    const response = await axios.get("http://localhost:8000/tovar");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

console.log(getUser());
