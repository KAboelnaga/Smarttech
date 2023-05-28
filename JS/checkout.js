var cartItems = JSON.parse(localStorage.getItem('cart'));
var quantity = document.getElementById("quantity");
var product = document.getElementById("product");
var price = document.getElementById("price");
var totalPrice = 0;

for (var i = 0; i < cartItems.length; i++) {
    product.innerHTML += cartItems[i].name;
    product.innerHTML += "<br>";
    quantity.innerHTML += cartItems[i].inCart;
    quantity.innerHTML += "<br>";
    price.innerHTML += "$";
    price.innerHTML += cartItems[i].price;
    price.innerHTML += "<br>";
    totalPrice += cartItems[i].inCart * cartItems[i].price;
}

var price = document.getElementById("totalCost");
price.innerHTML += "$";
price.innerHTML += totalPrice.toFixed(2);
const form = document.querySelector('.needs-validation');
form.addEventListener('submit', function(event) {
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }
    form.classList.add('was-validated');
});

function validateForm(event) {
    event.preventDefault();
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const addressInput = document.getElementById('address');
    const cityInput = document.getElementById('city');
    const creditCardInput = document.getElementById('cc-name');
    const cardNumberInput = document.getElementById('cc-number');
    const expirationInput = document.getElementById('cc-expiration');
    const cvvInput = document.getElementById('cc-cvv');
    let isValid = true;

    if (!firstNameInput.value.trim()|| !isValidName(firstNameInput.value.trim())) {
    firstNameInput.classList.remove('is-valid');
    firstNameInput.classList.add('is-invalid');
    document.getElementById('firstNameError').style.display = 'block';
    isValid = false;
    } 
    else {
    firstNameInput.classList.remove('is-invalid');
    document.getElementById('firstNameError').style.display = 'none';
    firstNameInput.classList.add('is-valid');
    isValid = true;
    }
    if (!lastNameInput.value.trim()|| !isValidName(lastNameInput.value.trim())) {
    lastNameInput.classList.add('is-invalid');
    document.getElementById('lastNameError').style.display = 'block';
    isValid = false;
    } 
    else {
    lastNameInput.classList.remove('is-invalid');
    document.getElementById('lastNameError').style.display = 'none';
    lastNameInput.classList.add('is-valid');
    }
    if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
    emailInput.classList.add('is-invalid');
    document.getElementById('emailError').style.display = 'block';
    isValid = false;
    }
     else {
    emailInput.classList.add('is-valid');
    emailInput.classList.remove('is-invalid');
    document.getElementById('emailError').style.display = 'none';
    }
    if (!addressInput.value.trim()) {
    addressInput.classList.add('is-invalid');
    document.getElementById('addressError').style.display = 'block';
    isValid = false;
    } 
    else {
    addressInput.classList.add('is-valid');
    addressInput.classList.remove('is-invalid');
    document.getElementById('addressError').style.display = 'none';
    }
    if (cityInput.value === '') {
    cityInput.classList.add('is-invalid');
    isValid = false;
    } 
    else {
    cityInput.classList.add('is-valid');
    cityInput.classList.remove('is-invalid');
    }
    if (document.getElementById('credit').checked) {
        if (!creditCardInput.value.trim()|| !isValidName(creditCardInput.value.trim())) {
            creditCardInput.classList.add('is-invalid');
            document.getElementById('nameOnCardError').style.display = 'block';
            isValid = false;
        } 
        else {
            creditCardInput.classList.add('is-valid');
            creditCardInput.classList.remove('is-invalid');
            document.getElementById('nameOnCardError').style.display = 'none';
        }
        if (!cardNumberInput.value.trim() || !isValidCardNumber(cardNumberInput.value.trim())) {
            cardNumberInput.classList.add('is-invalid');
            document.getElementById('creditCardNumberError').style.display = 'block';
            isValid = false;
        }
         else {
            cardNumberInput.classList.add('is-valid');
            cardNumberInput.classList.remove('is-invalid');
            document.getElementById('creditCardNumberError').style.display = 'none';
        }
        if (!expirationInput.value.trim() || !isValidExp(expirationInput.value.trim())) {
            expirationInput.classList.add('is-invalid');
            document.getElementById('expirationDateError').style.display = 'block';
            isValid = false;
        } 
        else {
            expirationInput.classList.add('is-valid');
            expirationInput.classList.remove('is-invalid'); 
            document.getElementById('expirationDateError').style.display = 'none';   
        }
        if (!cvvInput.value.trim()|| !isValidCVV(cvvInput.value.trim())) {
            cvvInput.classList.add('is-invalid');
            document.getElementById('cvvError').style.display = 'block';
            isValid = false;
        }
        else {
            cvvInput.classList.add('is-valid');
            cvvInput.classList.remove('is-invalid');
            document.getElementById('cvvError').style.display = 'none';
        }
    }
    if (!isValid) {
    return;
    }
    window.location.href = "thankyou.html";
}

function isValidName(name) {
    const nameRegex = /^[a-zA-Z ]+$/;
    return nameRegex.test(name);
}

function isValidEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
}

function isValidCardNumber(cardNumber) {
    const cardNumberRegex = /^\d{16}$/;
    return cardNumberRegex.test(cardNumber);
}

function isValidExp(expirationInput){
    const expRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    return expRegex.test(expirationInput);
}

function isValidCVV(cvvInput){
    const expRegex = /^[1-9][0-9]{2}$/;
    return expRegex.test(cvvInput);
}

function handleCheckboxChange() {
    const addressInput = document.getElementById('address');
    const address2Input = document.getElementById('address2');
    const countryInput = document.getElementById('country');
    const cityInput = document.getElementById('city');

    if (document.getElementById('same-address').checked) {
    address2Input.value = '';
    countryInput.value = 'Egypt';
    cityInput.value = '';
    addressInput.setAttribute('readonly', '');
    address2Input.setAttribute('readonly', '');
    countryInput.setAttribute('readonly', '');
    cityInput.setAttribute('readonly', '');
    }
     else {
    addressInput.removeAttribute('readonly');
    address2Input.removeAttribute('readonly');
    countryInput.removeAttribute('readonly');
    cityInput.removeAttribute('readonly');
    }
}

function checkPressed() {
    const creditCardLabel = document.getElementById('creditCardLabel');
    const cardNumberLabel = document.getElementById('cardNumberLabel');
    const cardExpLabel = document.getElementById('cardExpLabel');
    const cvvLabel = document.getElementById('cvvLabel');
    const ccNameInput = document.getElementById('cc-name');
    const ccNamedetInput = document.getElementById('cc-muted');
    const ccNumberInput = document.getElementById('cc-number');
    const ccExpirationInput = document.getElementById('cc-expiration');
    const ccCvvInput = document.getElementById('cc-cvv');
    ccNameInput.style.display = "none";
    ccNumberInput.style.display = "none";
    ccExpirationInput.style.display = "none";
    ccCvvInput.style.display = "none";
    ccNamedetInput.style.display = "none";
    
    if (document.getElementById('credit').checked) {
    creditCardLabel.style.display = 'block';
    cardNumberLabel.style.display = 'block';
    cardExpLabel.style.display = 'block';
    cvvLabel.style.display = 'block';
    ccNameInput.style.display = "block";
    ccNumberInput.style.display = "block";
    ccExpirationInput.style.display = "block";
    ccCvvInput.style.display = "block";
    ccNamedetInput.style.display = "block";
    ccNameInput.setAttribute('required', '');
    ccNumberInput.setAttribute('required');
    ccExpirationInput.setAttribute('required', '');
    ccCvvInput.setAttribute('required', '');
    } 
    else {
    creditCardLabel.style.display = 'none';
    cardNumberLabel.style.display = 'none';
    cardExpLabel.style.display = 'none';
    cvvLabel.style.display = 'none';
    ccNameInput.removeAttribute('required');
    ccNameInput.style.display = "none";
    ccNumberInput.removeAttribute('required');
    ccNumberInput.style.display = "none";
    ccExpirationInput.removeAttribute('required');
    ccExpirationInput.style.display = "none";
    ccCvvInput.removeAttribute('required');
    ccCvvInput.style.display = "none";
    ccNamedetInput.style.display = "none";
    }
}

document.getElementById('same-address').addEventListener('change', handleCheckboxChange);
document.getElementById('credit').addEventListener('change', checkPressed);
document.getElementById('cash').addEventListener('change', checkPressed);