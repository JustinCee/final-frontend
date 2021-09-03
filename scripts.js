let products = [];
let cart = [];
console.log(cart);

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    products = data;
    showProducts(data);
  });

