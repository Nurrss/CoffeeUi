const amount = document.getElementById("amount");
const price = document.getElementById("price");
const result = document.getElementById("result");
const addOrder = document.getElementById("addOrder");
const list = document.getElementById("list");
// const axios = require("axios");

let coffeeList = [];

list.addEventListener("click", function (event) {
  const isPlusOrMinusButton =
    event.target.dataset.type === "plus" ||
    event.target.dataset.type === "minus";
  if (isPlusOrMinusButton) {
    const button = event.target;
    const index = coffeeList.findIndex(
      (coffee) => coffee._id === button.dataset.index
    );
    const input = button.parentElement.querySelector("input");
    const amount = parseInt(input.value, 10);

    if (button.dataset.type === "plus") {
      input.value = amount + 1;
    } else if (button.dataset.type === "minus") {
      input.value = Math.max(amount - 1, 0);
    }

    calculateResult();
    console.log(input);
  }
});

function calculateResult() {
  let total = 0;
  coffeeList.forEach((coffee, index) => {
    const input = document.querySelector(
      `[data-index="${coffee._id}"][data-type="amount"]`
    );
    const amount = parseInt(input.value, 10);
    total += amount * coffee.price;
  });
  result.value = total;
}

// Modified Render function
function Render(name, price, _id) {
  return `<label class="list-group-item d-flex gap-2 align-items-center">
             <span>${name}</span>
             <span>Price : ${price}</span>
             <button
               class="btn btn-primary rounded-pill px-3"
               type="button"
               data-type="plus"
               data-index="${_id}"
             >
               +
             </button>
             <input class="form-control" data-type="amount" data-index="${_id}" value="0" />
             <button
               class="btn btn-danger rounded-pill px-3"
               type="button"
               data-type="minus"
               data-index="${_id}"
             >
               -
             </button>
           </label>`;
}

async function getTovar() {
  try {
    const response = await fetch("http://localhost:8000/tovar");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    coffeeList = data; // Replace coffeeList with the data fetched from backend
    coffeeList.forEach((coffee) => {
      list.insertAdjacentHTML(
        "beforeend",
        Render(coffee.name, coffee.price, coffee._id)
      );
      console.log(coffee._id);
    });
  } catch (error) {
    console.error(error);
  }
}
getTovar();

console.log("finished");

// Example POST method implementation:
async function postData(url = "", data = {}) {
  console.log(data);
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

addOrder.onclick = () => {
  console.log(addOrder);
  postData("http://localhost:8000/order/add", {
    summa: result.value,
  }).then((data) => {
    console.log(data);
  });
};
