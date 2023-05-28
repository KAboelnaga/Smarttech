function openLightbox(inp) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImage = document.getElementById("lightbox-image");

    lightboxImage.src = inp;
    lightbox.style.display = "flex";
    }
    
    function closeLightbox() {
      document.getElementById("lightbox").style.display = "none";
    }
    document.addEventListener("DOMContentLoaded", function() {
      document.getElementById("lightbox").style.display = "none";
    });

    let item = [ {
        name: "Apple Watch Series 8",
        tag: 'watches',
        price: 399.99,
        image: 'images/im1.png',
        inCart: 0
    },

    {
        name: "Lenovo IdeaPad",
        tag: 'Laptops',
        price: 699.99,
        image: 'images/im2.png',
        inCart: 0
    },

    {
        name: "Iphone 14",
        tag: 'mobiles',
        price: 699.99,
        image: 'images/im3.png',
        inCart: 0
    },

    {
        name: "ASUS ROG Strix G",
        tag: 'Laptops',
        price: 1699.99,
        image: 'images/im4.png',
        inCart: 0
    },

    {
        name: "Echo Dot",
        tag: 'speakers',
        price: 59.99,
        image: 'images/im5.png',
        inCart: 0
    },

    {
        name: "JBL Quantom 800",
        tag: 'speakers',
        price: 99.99,
        image: 'images/im6.png',
        inCart: 0
    },

    {
        name: "RTX 3070 TI",
        tag: 'graphicscard',
        price: 569.99,
        image: 'images/im7.png',
        inCart: 0
    },

    {
        name: "HAVIT KB393L",
        tag: 'keyboard',
        price: 499.99,
        image: 'images/im8.png',
        inCart: 0
    },

    {
        name: "Intel Core I9",
        tag: 'processor',
        price: 569.99,
        image: 'images/im9.png',
        inCart: 0
    }
  ]

  function addToCart(i) {
  var selectedProduct = item[i];
  var existingCartItems = getCartItems();

  var found = false;
  for (var j = 0; j < existingCartItems.length; j++) {
    if (existingCartItems[j].name === selectedProduct.name) {
      existingCartItems[j].inCart++;
      found = true;
      break;
    }
  }

  if (!found) {
    item[i].inCart++;
    var newCartItem = item[i];
    existingCartItems.push(newCartItem);
  }

  saveCartItems(existingCartItems);
}

function getCartItems() {
  var cartData = localStorage.getItem('cart');
  return cartData ? JSON.parse(cartData) : [];
}

function saveCartItems(cartItems) {
  localStorage.setItem('cart', JSON.stringify(cartItems));
}