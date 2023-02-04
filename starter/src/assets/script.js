/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/
const products = [
  {
    name: "Cherry",
    price: 5,
    quantity: 0,
    productId: 1,
    image: "images/cherry.jpg",
  },
  {
    name: "Orange",
    price: 2.5,
    quantity: 0,
    productId: 2,
    image: "images/orange.jpg",
  },
  {
    name: "Strawberry",
    price: 4,
    quantity: 0,
    productId: 3,
    image: "images/strawberry.jpg",
  },
];

// Declare an empty array named cart to hold the items in the cart
const cart = [];


/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
const addProductToCart = (productId) => {
  // Get the correct product based on the productId
  const product = products.find((product) => product.productId === productId);
  // Increase the product's quantity
  product.quantity++;
  // Check if the product is already in the cart
  const existingProduct = cart.find((item) => item.productId === productId);
  if (!existingProduct) {
    // Add the product to the cart if it is not already in the cart
    cart.push(product);
  }
};

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
const increaseQuantity = (productId) => {
  // Get the correct product based on the productId
  const product = products.find((product) => product.productId === productId);
  // Increase the product's quantity
  product.quantity++;
};

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
const decreaseQuantity = (productId) => {
  // Get the correct product based on the productId
  const product = products.find((product) => product.productId === productId);
  // Decrease the product's quantity
  product.quantity--;
  // Check if the product's quantity is now 0
  if (product.quantity === 0) {
    // Remove the product from the cart
    removeProductFromCart(productId);
  }
};

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
const removeProductFromCart = (productId) => {
  // Get the correct product based on the productId
  const product = products.find((product) => product.productId === productId);
  // Update the product's quantity to 0
  product.quantity = 0;
  // Find the index of the product in the cart
  const productIndex = cart.findIndex((item) => item.productId === productId);
  // Remove the product from the cart
  cart.splice(productIndex, 1);
};

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
const cartTotal = () => {
  let total = 0;
  // Iterate through the cart to get the total of all products
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
};

/* Create a function called emptyCart that empties the products from the cart */
const emptyCart = () => {
  // Iterate through the cart and update all product quantities to 0
  cart.forEach((item) => {
    item.quantity = 0;
  });
  // Clear the cart array
  cart.length = 0;
};

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
const pay = (amount) => {
  const total = cartTotal();
  if (amount < total) {
    return -(total - amount);
  } else {
    return amount - total;
  }
};

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
};
