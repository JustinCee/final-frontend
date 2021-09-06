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

  function showProducts(products) {
    let productContainer = document.querySelector("#project-container");
    productContainer.innerHTML = "";
    products.forEach((product) => {
      productContainer.innerHTML += `
          <div class="product">
              <img src="${product.image}" class="product-image">
              <h4 class="product-title">${product.title}</h4>
              <p class="product-cat">${product.category}</p>
              <p class="product-quan">${product.description}</p>
              <p class="product-cost">${product.price}</p>
              <button onclick="addToCart(${product.id})">Add to Cart</button>
          </div>    
      `;
    });
  }


  function showCart(productItems) {
    let cartContainer = document.querySelector("#cart");
    cartContainer.innerHTML = "";
    if (productItems.length > 0) {
      productItems.map((productItem) => {
        cartContainer.innerHTML += `
          <div class="product">
              <img src="${productItem.image}" class="product-image">
              <h4 class="product-title">${productItem.title}</h4>
              <p class="product-cat">${productItem.category}</p>
              <p class="product-quan">${productItem.description}</p>
              <p class="product-cost">${productItem.price}</p>
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