// const amount = document.getElementById("amount");
// const price = document.getElementById("price");
// const result = document.getElementById("result");
// const list = document.getElementById("list");

// const coffeeList = [
//   {
//     id: 1,
//     name: "Americono",
//     price: 1500,
//   },
//   {
//     id: 2,
//     name: "Americono2",
//     price: 1600,
//   },
//   {
//     id: 3,
//     name: "Americono3",
//     price: 1700,
//   },
//   {
//     id: 4,
//     name: "Americono4",
//     price: 1800,
//   },
// ];

// coffeeList.forEach((coffee) => {
//   list.insertAdjacentHTML(
//     "beforeend",
//     Render(coffee.name, coffee.price, coffee.id)
//   );
// });

// list.onclick = function (event) {
//   if (event.target.dataset.index) {
//     const index = parseInt(event.target.dataset.index);
//     const type = event.target.dataset.type;
//     const amount = event.target.dataset.type;
//     if (amount === "amount") {
//       console.log(amount);
//       //   let coffee = coffeeList[index];
//       //   if (type === "plus") {
//       //     console.log(coffee.price);
//       //   }
//     }
//     console.log(type);
//     // } else if (type === "minus") {
//     //   const input = event.target.previousSibling;
//     //   if (parseInt(input.value) > 0) {
//     //     input.value = parseInt(input.value) - 1;
//     //   }
//     // }

//     // Calculate the result
//     calculateResult();
//   }
// };

// function calculateResult() {
//   let total = 0;
//   const inputs = document.querySelectorAll('[data-parent="amount"]');
//   inputs.forEach((input, index) => {
//     const amount = parseInt(input.value);
//     const coffeePrice = coffeeList[index].price;
//     total += amount * coffeePrice;
//   });
//   result.value = total;
// }

// function Render(name, price, id) {
//   return `<label class="list-group-item d-flex gap-2 align-items-center">
//              <span> ${name} </span>
//             <span > ${price} </span>
//             <button
//               class="btn btn-primary rounded-pill px-3"
//               type="button"
//               data-type="plus"
//               data-index=${id}
//             >
//               +
//             </button>
//             <input class="form-control" data-type="amount" value="0"  />
//             <button
//               class="btn btn-danger rounded-pill px-3"
//               type="button"
//                data-type="minus"
//                data-index=${id}
//             >
//               -
//             </button>
//           </label>`;
// }
