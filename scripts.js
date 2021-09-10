let base_URL = "https://aqueous-brushlands-65716.herokuapp.com/show-products/";
let cartProduct = [];
let cart = [];
let products;

// view product function
function getProducts(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      cartProduct = data;

      // console.log(cartProduct);

      products = data.data;

      renderProducts(products);
    });
}

getProducts(base_URL);

function renderProducts(products) {
  let container = document.querySelector("#project-container");

  container.innerHTML = "";

  products.forEach((product) => {
    container.innerHTML += `<div class='product'>
      <div class='prod_name'>Product: ${product[1]}</div>
      <div class='prod_price'>Price: ${product[2]}</div>
      <div class='prod_descrip'>${product[3]}</div>
      <div class="prod_type">Type: ${product[4]}</div>
      <div class="button"><button onclick="addToCart(${product[0]})">Add To Cart</button></div>`;
  });
}

function showCart(productItems) {
  let cartContainer = document.querySelector("#cart");
  cartContainer.innerHTML = "";
  if (productItems.length > 0) {
    productItems.map((productItem) => {
      cartContainer.innerHTML += `
        <div class="product">
        <div class="prod_name">Name: ${productItem[1]}</div>
        <div class="prod_price">Price: ${productItem[2]}</div>
        <div class="prod_descrip">Description: ${productItem[3]}</div>
        <div class="prod_type">Type: ${productItem[4]}</div>
        </div>    
    `;
    });
    let sumPrice = productItems.reduce((total, item) => total + item.price, 0);
    console.log(sumPrice);
    cartContainer.innerHTML += `<h3>The Price will be: ${sumPrice}</h3>`;
  } else {
    cartContainer.innerHTML = "<h3>Cart is empty</h3>";
  }
}


function searchProducts() {
  let searchTerm = document.querySelector("#searchItem").value;

  // console.log(cartProduct)

  console.log(searchTerm);

  let searchedItems = cartProduct.data.filter((item) => {
    return item[1].toLowerCase().includes(searchTerm.toLowerCase());
  });

  console.log(searchedItems);
  // console.log(cartProduct)

  if (searchedItems.length == 0) {
    document.querySelector("#project-container").innerHTML =
      "<h2>There Are No Products of that Description</h2>";
  } else {
    renderProducts(searchedItems);
  }
}

function openCart() {
  document.querySelector("#cart").classList.toggle("active");
}

function addToCart(id) {
  let product = products.find((item) => {
    return item.id == id;
  });
  console.log(product);
  cart.push(product);

  console.log("These items are in your Cart: ", cart);
  showCart(cart);
}
