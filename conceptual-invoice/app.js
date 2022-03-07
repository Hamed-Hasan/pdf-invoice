
document.getElementById('detail-submit-btn').addEventListener('click', function(){
  let buyerDetails = document.getElementById('buyer-details-input');
  document.getElementById('buyer-info').innerText = buyerDetails.value;
  buyerDetails.value = '';
})

document.getElementById('add-details-btn').addEventListener('click', function(){
  const infoTable = document.getElementById('info-table');
  const itemName = document.getElementById('item-name-input')
  const itemPrice = document.getElementById('item-price-input');
  const itemQuantity = document.getElementById('item-quantity-input');

  const tr = document.createElement('tr');
  const th = document.createElement('th');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');
  const totalPrice = parseInt(itemPrice.value) * parseInt(itemQuantity.value);

  th.innerText = itemName.value;
  td1.innerText = itemPrice.value;
  td2.innerText = itemQuantity.value;
  td3.innerText = totalPrice;
  td3.classList.add('item-total');
if(itemName.value == '' || itemPrice.value == '' || itemQuantity.value == ''){
  return 
}
tr.appendChild(th);
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);

infoTable.appendChild(tr)
totalCalculation()

})

function totalCalculation() {
  const subTotal = calculateSubTotal();

  const subTotalToDisplay = document.getElementById("sub-total");
  subTotalToDisplay.innerText = subTotal;

  const tax = subTotal * .2;
  document.getElementById('tax').innerText = tax.toFixed();
  document.getElementById('grand-total').innerText = subTotal + tax;
 document.getElementById('grand-total-2').innerText = subTotal + tax; 
}


function calculateSubTotal() {
  let subTotal = 0;

  const cost = document.getElementsByClassName("item-total");

  for (let i = 0; i < cost.length; i++) {
    const element = cost[i]; //<td class="item-total">35</td>
    const price = parseInt(element.innerText);

    subTotal = subTotal + price;
  }

  return subTotal;
}

const code = 'coupon';
document.getElementById('coupon').addEventListener('click', function(){
  const couponInput = document.getElementById('coupon-input').value;
if(couponInput === code){
  const total = document.getElementById('grand-total-2');
  let totalConvert = parseFloat(total.innerText);
  const discount = (totalConvert * 65) / 100;
  totalConvert = totalConvert - discount;
  total.innerText = discount;
}else{
  alert('ops!')
}
})
// const detailsButton = document.getElementById("detail-submit-btn");

// detailsButton.addEventListener("click", function () {
//   const buyerDetails = document.getElementById("buyer-details-input");
//   document.getElementById("buyer-info").innerText = buyerDetails.value;
//   buyerDetails.value = "";
// });

// document.getElementById('add-details-btn').addEventListener('click', function(){
//   const infoTable = document.getElementById('info-table');
//   const itemName = document.getElementById('item-name-input');
//   const itemPrice = document.getElementById('item-price-input');
//   const itemQuantity = document.getElementById('item-quantity-input');

// const tr = element('tr');
// const th = element('th');
// const td1 = document.createElement('td');
// const td2 = document.createElement('td');
// const td3 = document.createElement('td');

// function element(params) {
//   return document.createElement(params)
// }

// const totalPrice = parseInt(itemPrice.value) * parseInt(itemQuantity.value);
// td3.classList.add('item-total')
// th.innerText = itemName.value;
// td1.innerText = itemPrice.value;
// td2.innerText = itemQuantity.value;
// td3.innerText = totalPrice;
// if (
//       itemName.value == "" ||
//       itemPrice.value < 0 ||
//       itemQuantity.value < 0 ||
//       itemPrice.value == "" ||
//       itemQuantity.value == ""
//     ) {
//       console.log("sorry");
//       return;
//     }

// tr.appendChild(th);
// tr.appendChild(td1);
// tr.appendChild(td2);
// tr.appendChild(td3);

// infoTable.appendChild(tr)
// totalCalculation();
// })

// function totalCalculation() {
//   const subTotal = calculateSubTotal();

//   const subTotalToDisplay = document.getElementById("sub-total");
//   subTotalToDisplay.innerText = subTotal;

//   const tax = subTotal * 0.2;

//   document.getElementById("tax").innerText = tax.toFixed(2);
//   document.getElementById("grand-total").innerText = subTotal + tax;
//   document.getElementById("grand-total-2").innerText = subTotal + tax;
// }



// function calculateSubTotal() {
//   let subTotal = 0;

//   const cost = document.getElementsByClassName("item-total");

//   for (let i = 0; i < cost.length; i++) {
//     const element = cost[i]; //<td class="item-total">35</td>
//     const price = parseInt(element.innerText);

//     subTotal = subTotal + price;
//   }

//   return subTotal;
// }
// // ---------------------------------------------

// // const detailsButton = document.getElementById("detail-submit-btn");

// // detailsButton.addEventListener("click", function () {
// //   const buyerDetails = document.getElementById("buyer-details-input");
// //   document.getElementById("buyer-info").innerText = buyerDetails.value;
// //   buyerDetails.value = "";
// // });

// // const addProductBtn = document.getElementById("add-details-btn");

// // addProductBtn.addEventListener("click", function () {
// //   const infoTable = document.getElementById("info-table");
// //   const itemName = document.getElementById("item-name-input");
// //   const itemPrice = document.getElementById("item-price-input");
// //   const itemQuantity = document.getElementById("item-quantity-input");

// //   if (
// //     itemName.value == "" ||
// //     itemPrice.value < 0 ||
// //     itemQuantity.value < 0 ||
// //     itemPrice.value == "" ||
// //     itemQuantity.value == ""
// //   ) {
// //     console.log("sorry");
// //     return;
// //   }

// //   {
// //     /* <tr>
// //  <th >1</th>
// //  <td>Mark</td>
// // <td>Otto</td>
// // <td class='item-total'>@mdo</td>
// // </tr> */
// //   }

// //   const totalPrice = parseInt(itemPrice.value) * parseInt(itemQuantity.value);

// //   //   const tr = document.createElement("tr"); //<tr></tr>
// //   const tr = element("tr");
// //   const th = element("th");

// //   const td1 = document.createElement("td");
// //   const td2 = document.createElement("td");
// //   const td3 = document.createElement("td");

// //   td3.classList.add("item-total");
// //   th.innerText = itemName.value; //<th >onion</th>
// //   td1.innerText = itemPrice.value; //<th >1</th>
// //   td2.innerText = itemQuantity.value;
// //   td3.innerText = totalPrice;

// //   tr.appendChild(th);
// //   tr.appendChild(td1);
// //   tr.appendChild(td2);
// //   tr.appendChild(td3); //<td class="item-total">35</td>
// //   infoTable.appendChild(tr);
// //   totalCalculation();
// // });

// // function element(param) {
// //   return document.createElement(param);
// // }

// // function totalCalculation() {
// //   const subTotal = calculateSubTotal();

// //   const subTotalToDisplay = document.getElementById("sub-total");
// //   subTotalToDisplay.innerText = subTotal;

// //   const tax = subTotal * 0.2;

// //   document.getElementById("tax").innerText = tax.toFixed(2);
// //   document.getElementById("grand-total").innerText = subTotal + tax;
// //   document.getElementById("grand-total-2").innerText = subTotal + tax;
// // }

// // function calculateSubTotal() {
// //   let subTotal = 0;

// //   const cost = document.getElementsByClassName("item-total");

// //   for (let i = 0; i < cost.length; i++) {
// //     const element = cost[i]; //<td class="item-total">35</td>
// //     const price = parseInt(element.innerText);

// //     subTotal = subTotal + price;
// //   }

// //   return subTotal;
// // }