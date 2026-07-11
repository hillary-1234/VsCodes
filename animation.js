const menu = [
    { name: "Margarita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
];

let cashInRegister = 100;
const orderQueue = [];

function addNewPizza(pizza) {
    menu.push(pizza);
}

addNewPizza({ name: "Pineapple", price: 40 });

// console.log(menu)

let nextOrderId = 1;

function placeOrder(name) {
    const order = menu.find((item) => item.name === name);

let newOrder = orderQueue.push({
    id: nextOrderId++,
    name: order.name,
    status: "ordered",
});
let fileOrder = { pizza: order, status: "Ordered" };

if (order) {
    cashInRegister += order.price;
} else {
    console.log("Not Available");
}

  // console.log(order)
  // console.log(newOrder)
return fileOrder;
}

placeOrder("Pineapple");
placeOrder("Pepperoni");
placeOrder("Pepperoni");
placeOrder("Pepperoni");
placeOrder("Pepperoni");

console.log(orderQueue);

console.log(cashInRegister);

function completeOrder(id) {
    const trackid = orderQueue.find((ids) => ids.id === id);

if (trackid) {
    trackid.status = "completed";
}
    return trackid;
}

completeOrder(3);
completeOrder(1);
