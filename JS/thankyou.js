var cartItems = JSON.parse(localStorage.getItem('cart'));

cartItems = [];

localStorage.setItem('cart', JSON.stringify(cartItems));