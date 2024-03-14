const amount = document.getElementById("amount");
const price = document.getElementById("price");
const result = document.getElementById("result");
const list = document.getElementById("list");

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

function plus() {
  amount.value++;
  calcResult();
}
function minus() {
  if (amount.value > 0) {
    amount.value--;
  }
  calcResult();
}

list.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index);
    const type = event.target.dataset.type;
    const amount = event.target.dataset.parent;
    console.log(coffeeList[index]);

    render();
  }
};

function calcResult() {
  result.value = amount.value * price.textContent;
}

function Render(name, price, id) {
  return `<label class="list-group-item d-flex gap-2 align-items-center" data-index=${id}>
             <span> ${name} </span>
            <span > ${price} </span>
            <button
              class="btn btn-primary rounded-pill px-3"
              type="button"
              data-type="plus"
            >
              +
            </button>
            <input class="form-control" data-parent="amount" value="0" />
            <button
              class="btn btn-danger rounded-pill px-3"
              type="button"
               data-type="minus"
            >
              -
            </button>
          </label>`;
}
