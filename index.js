var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var pair = {}
 pair.itemName = item
 pair.itemPrice = parseInt(Math.random() * 100)
 cart.push(pair)
 return item + ` has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0){
    return ("Your shopping cart is empty.")
  }
  else var message = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  return
  for (let i = 0; i < cart.length; i){
    
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
