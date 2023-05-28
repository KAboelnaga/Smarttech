var cartItems = JSON.parse(localStorage.getItem('cart'));
var table = document.getElementById("cartTable");
var emptyText = document.getElementById("empty");
var product = document.getElementById("product");
var quantity = document.getElementById("quantity");
var price = document.getElementById("price");
var imageContainer = document.getElementById("imageContainer");
var checkoutButton = document.getElementById("checkoutButton");
var totalPrice = 0;
  
  if (cartItems.length === 0) {
    table.classList.add("hidden");
    emptyText.textContent = "Your cart is empty";
    checkoutButton.classList.add("hidden");
  }
   else {
    for (var i = 0; i < cartItems.length; i++) {
      product.textContent = "Product";
      quantity.textContent = "Quantity";
      price.textContent = "Price";
      imageContainer.textContent = "";
  
      var image = document.createElement('img');
      image.style.maxWidth = "200px";
      image.src = cartItems[i].image;
  
      var name = cartItems[i].name;
      var priceValue = cartItems[i].price;
      var inCart = cartItems[i].inCart;
      totalPrice += priceValue * inCart;
  
      var row = document.createElement("tr");
  
      var imageCell = document.createElement("td");
      imageCell.appendChild(image);
      row.appendChild(imageCell);
  
      var productCell = document.createElement("td");
      productCell.textContent = name;
      row.appendChild(productCell);
  
      var quantityCell = document.createElement("td");
  
      var decreaseBtn = document.createElement("button");
      decreaseBtn.textContent = " - ";
      decreaseBtn.style.backgroundColor = 'transparent';
      decreaseBtn.style.border = '1px solid #ccc';
      decreaseBtn.addEventListener("click", decreaseQuantity);
      quantityCell.appendChild(decreaseBtn);
  
      var quantityElement = document.createElement("span");
      quantityElement.className = "quantity";
      quantityElement.textContent = inCart;
      quantityCell.appendChild(quantityElement);
  
      var increaseBtn = document.createElement("button");
      increaseBtn.textContent = " + ";
      increaseBtn.style.backgroundColor = 'transparent';
      increaseBtn.style.border = '1px solid #ccc';
      increaseBtn.addEventListener("click", increaseQuantity);
      quantityCell.appendChild(increaseBtn);
  
      row.appendChild(quantityCell);
  
      var priceCell = document.createElement("td");
      priceCell.textContent = priceValue.toFixed(2);
      row.appendChild(priceCell);
  
      table.appendChild(row);
    }
  
    var totalPriceRow = document.createElement("tr");
  
    var totalPriceLabelCell = document.createElement("td");
    totalPriceLabelCell.textContent = "Total Price:";
    totalPriceLabelCell.colSpan = 3;
    totalPriceRow.appendChild(totalPriceLabelCell);
  
    var totalPriceValueCell = document.createElement("td");
    totalPriceValueCell.textContent = totalPrice.toFixed(2);
    totalPriceRow.appendChild(totalPriceValueCell);
  
    table.appendChild(totalPriceRow);
  
    checkoutButton.classList.remove("hidden");
  }
  
  function decreaseQuantity() {
    var row = this.parentNode.parentNode;
    var quantityElement = row.querySelector(".quantity");
    var currentQuantity = parseInt(quantityElement.textContent);
  
    if (currentQuantity > 1) {
      currentQuantity -= 1;
      quantityElement.textContent = currentQuantity;
      updateTotalPrice(-parseFloat(row.querySelector("td:last-child").textContent));
      updateCartItemQuantity(row.rowIndex - 1, currentQuantity);
    } 
    else {
      table.deleteRow(row.rowIndex);
      updateTotalPrice(-parseFloat(row.querySelector("td:last-child").textContent));
      removeCartItem(row.rowIndex - 1);
      if (cartItems.length === 0) {
        table.classList.add("hidden");
        emptyText.textContent = "Your cart is empty";
        checkoutButton.classList.add("hidden");
      }
    }
  }
  
  function removeCartItem(index) {
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }
  
  function increaseQuantity() {
    var row = this.parentNode.parentNode;
    var quantityElement = row.querySelector(".quantity");
    var currentQuantity = parseInt(quantityElement.textContent);
  
    currentQuantity += 1;
    quantityElement.textContent = currentQuantity;
    updateTotalPrice(parseFloat(row.querySelector("td:last-child").textContent));
    updateCartItemQuantity(row.rowIndex - 1, currentQuantity);
  }
  
  function updateTotalPrice(change) {
    totalPrice += change;
    totalPriceValueCell.textContent = totalPrice.toFixed(2);
  }
  
  function updateCartItemQuantity(index, quantity) {
    cartItems[index].inCart = quantity;
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }