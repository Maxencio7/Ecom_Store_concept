const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatLogs = document.querySelector(".chat-logs");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const popupFormContainer = document.getElementById(".popupFormContainer");
const popupCloseBtn = document.querySelector(".close-popup");
const popupSubmitBtn = document.querySelector(".submit-popup");

chatbotToggler.addEventListener("click", () => {
  chatbox.classList.toggle("show");
});

closeBtn.addEventListener("click", () => {
  chatbox.classList.remove("show");
});

sendChatBtn.addEventListener("click", () => {
  const userMessage = chatInput.value.trim();

  if (userMessage.length > 0) {
    const chatLog = document.createElement("div");
    chatLog.classList.add("chat-log");
    chatLog.innerHTML = `<span class="user-message">${userMessage}</span>`;
    chatLogs.appendChild(chatLog);
    chatInput.value = "";

    // Add your code here to send the user's message to the server and display the AI's response(Must create)
  }
});

chatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    sendChatBtn.click();
  }
});
document.addEventListener("contact", function () {
  const showPopupButton = document.getElementById("show-popup");
  const popupFormContainer = document.getElementById("popup-form-container");
  const closePopupButton = document.querySelector(".close-pop");
});

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
  if (sessionStorage.getItem("shopping-cart")) {
    cartArray = JSON.parse(sessionStorage.getItem("shopping-cart"));
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
