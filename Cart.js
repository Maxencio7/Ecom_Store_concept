// Add to Cart function
function addToCart(element) {
  // Get the product name and price
  var productParent = $(element).closest("div.product-item");
  var price = $(productParent).find(".price").text();
  var productName = $(productParent).find(".productname").text();
  var quantity = $(productParent).find(".product-quantity").val();

  // Create a new cart item object
  var cartItem = {
    productName: productName,
    price: price,
    quantity: quantity,
  };

  // Convert the cart item object to a JSON string
  var cartItemJSON = JSON.stringify(cartItem);

  // Get the existing cart array from session storage
  var cartArray = new Array();
  if (sessionStorage.getItem("Cart")) {
    cartArray = JSON.parse(sessionStorage.getItem("Cart"));
  }

  // Add the new cart item to the array
  cartArray.push(cartItemJSON);

  // Convert the cart array back to a JSON string
  var cartJSON = JSON.stringify(cartArray);

  // Save the updated cart array to session storage
  sessionStorage.setItem("shopping-cart", cartJSON);

  // Show the cart table
  showCartTable();
}

// Add a click event listener to each "Add to Cart" button
const addToCartBtn = document.getElementById("Cart");

addToCartBtn.addEventListener("click", function(){
  addToCartBtn =""
})
// Handler for add to cart button
$(".add-to-cart-button").on("click", function () {
  // Get the product ID and quantity
  var productId = $(this).data("product-id");
  var quantity = $(this).data("quantity");

  // AJAX call to add the product to the cart
  $.ajax({
    type: "POST",
    url: "/Cart/add.js",
    data: {
      id: productId,
      quantity: quantity,
    },
    success: function (data) {
      // Update the cart quantity
      $("#Cart-quantity").text(data.total_quantity);

      // Show the cart
      $("#Cart-drawer").addClass("show");
    },
  });
});

// Handle the checkout form
$("#checkout-form").on("submit", function (e) {
  // Prevent the default form submission
  e.preventDefault();

  // Get the form data
  var formData = $(this).serialize();

  // AJAX call to submit the checkout form
  $.ajax({
    type: "POST",
    url: "/Checkout",
    data: formData,
    success: function (data) {
      // Redirect to the checkout page
      window.location.href = "/Checkout";
    },
  });
});
