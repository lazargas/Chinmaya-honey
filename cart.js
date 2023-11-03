function toggleCart() {
  var cartItems = document.getElementById("cart-items");
  cartItems.classList.toggle("show");
}


 // Function to add the cart item HTML to the cart
function addToCart() {
  var cartItems = document.getElementById("cart-items");
  cartItems.classList.toggle("show");
  const cartItemsContainer = document.querySelector(".cart-items-1");
  
  


  // Create a new cart item div
  const cartItemDiv = document.createElement("div");
  cartItemDiv.classList.add("cart-item");

  // Add the HTML content to the cart item div
  cartItemDiv.innerHTML = `
    <div><img class="cart-image" src="/assets/BeesWax.svg" alt=""></div>
    <div class="cart-item-details">
        <div class="cart-item-text">
            <p>Quantity</p>
            <p>:</p><input type="number" style="width: 25%; margin-right: 2px; margin-left: 2px; padding: 4px; border: solid 1px grey; border-radius: 5px;"></input>
        </div>
        <div class="cart-item-text">
            <p>Total Price</p>
            <p>:</p>
            <p></p>
        </div>
    </div>
  `;

  // Append the cart item to the cart container
  cartItemsContainer.appendChild(cartItemDiv);
}

// Get the button element and add a click event listener
const addToCartButton = document.getElementById("div-block-10");
addToCartButton.addEventListener("click", addToCart);



