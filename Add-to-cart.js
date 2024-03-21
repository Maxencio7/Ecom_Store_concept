const addToCartBtn = document.getElementById("Cart.html");

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
