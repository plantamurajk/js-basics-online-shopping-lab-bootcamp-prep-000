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
 pair.itemPrice = Math.random() * 100
 cart.push(pair)
 return item + ` has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0){
    return ("Your shopping cart is empty.")
  }
  else  message = "In your cart, you have"
  for (let i = 0; i < cart.length; i++){
    message = "In your cart, you have"
    
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
