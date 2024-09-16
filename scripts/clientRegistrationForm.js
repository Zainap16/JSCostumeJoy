// submiy buttons

// clientRegistrationForm.js
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('client-info-form');
  
  form.addEventListener('submit', function(event) {
      event.preventDefault();

      const formData = new FormData(form);
      const data = {};

      formData.forEach((value, key) => {
          data[key] = value;
      });

      localStorage.setItem('clientData', JSON.stringify(data));

      // let queryString = "?";
      // for (const [key, value] of Object.entries(data)) {
      //     queryString += ${key}=${encodeURIComponent(value)}&;
      // }

      window.location.href = '../html/orderSubmit.html'; // Change this to the correct path to your second HTML file
  });
});

// //
// document.addEventListener('DOMContentLoaded', function() {
//   const form = document.getElementById('client-info-form');

//   form.addEventListener('submit', function(event) {
//       event.preventDefault();

//       const formData = new FormData(form);
//       const data = {};

//       formData.forEach((value, key) => {
//           data[key] = value;
//       });

//       localStorage.setItem('clientData', JSON.stringify(data));

//       // Change this to the correct path to your client payment form HTML file
//       window.location.href = '../html/clientPaymentForm.html';
//   });
// });


//
let subButton = document.getElementById("subButton");
subButton.addEventListener("click", validatePrefferedName);



subButton.addEventListener("click", validateFullName);

subButton.addEventListener("click", validateSurname);

subButton.addEventListener("click", validateID);

subButton.addEventListener("click", validateTelephone);

subButton.addEventListener("click", validatePhone);

subButton.addEventListener("click", validateNumber);

subButton.addEventListener("click", validateMonth);

subButton.addEventListener("click", validateYear);

subButton.addEventListener("click", Referral);

subButton.addEventListener("click", validateCVC);


let preferredName = document.getElementById("preferred-name").value;
// Check if the owner's name is entered on the cardfunction
function validatePrefferedName() {


if (preferredName.validity.valueMissing) {
  preferredName.setCustomValidity("Enter your preffered name");
} else{
  preferredName,setCustomValidity("");

}

}

// Check if the full-name is entered on the cardfunction
function validateFullName() {
let fullName = document.getElementById("full-name");
if (fullName.validity.valueMissing) {
  fullName.setCustomValidity("Enter your full name as on ID");
} else {
  fullName.setCustomValidity("");
}
}

// Check if the owner surname is entered on the cardfunction
function validateSurname() {
let surname = document.getElementById("surname");
if (surname.validity.valueMissing) {
  surname.setCustomValidity("Enter your surname");
} else {
  surname.setCustomValidity("");
}
}

// Validate ID number (must be 13 digits)
function validateID() {
let idNumber = document.getElementById("id-number");
if (idNumber.validity.valueMissing) {
  idNumber.setCustomValidity("Enter your ID number");
} else if (idNumber.validity.patternMismatch) {
  idNumber.setCustomValidity("ID number must be 13 digits");
} else {
  idNumber.setCustomValidity("");
}
}

// Validate phone number (must be 10 digits)
function validateTelephone() {
let telephone = document.getElementById("telephone-work");
if (telephone.validity.valueMissing) {
  telephone.setCustomValidity("Enter your telephone number");
} else if (telephone.validity.patternMismatch) {
  telephone.setCustomValidity("Telephone number must be 10 digits");
} else {
  telephone.setCustomValidity("");
}
}
// home-address
// Validate phone number (must be 10 digits)
function validatePhone() {
let phone = document.getElementById("cellphone-numrber");
if (phone.validity.valueMissing) {
  phone.setCustomValidity("Enter your phone number");
} else if (phone.validity.patternMismatch) {
  phone.setCustomValidity("Phone number must be 10 digits");
} else {
  phone.setCustomValidity("");
}
}

//copy home address to postal address
function copyAddress() {
// Get the checkbox
const checkBox = document.getElementById("copy-address");
// Get the home address and postal address textareas
const homeAddress = document.getElementById("home-address").value;
const postalAddress = document.getElementById("postal-address");

// If the checkbox is checked, copy the home address to the postal address
if (checkBox.checked) {
  postalAddress.value = homeAddress;
} else {
  // If the checkbox is unchecked, clear the postal address
  postalAddress.value = "";
}
}

// referral
function Referral() {
let referral = document.getElementById("referral").value;

if (referral.selectedIndex === 0) {
    referral.setCustomValidity("Select where you hear about us");
} else {
  month.setCustomValidity("");
}
}

// Check if the card number is valid
function validateNumber() {
let cNum = document.getElementById("cardNumber");
if (cNum.validity.valueMissing) {
  cNum.setCustomValidity("Enter your card number");
} else if (cNum.validity.patternMismatch) {
  cNum.setCustomValidity("Enter a valid card number");
} else {
  cNum.setCustomValidity("");
}
}

// Check that a month is selected for the expiration date
function validateMonth() {
let month = document.getElementById("expMonth");
if (month.selectedIndex === 0) {
  month.setCustomValidity("Select the expiration month");
} else {
  month.setCustomValidity("");
}
}

// Check that a year is selected for the expiration date
function validateYear() {
let year = document.getElementById("expYear");
if (year.selectedIndex === 0) {
  year.setCustomValidity("Select the expiration year");
} else {
  year.setCustomValidity("");
}
}
//6011485077126974
function validateCVC() {
// Determine which card was selected
let card = document.querySelector('input[name="credit"]:checked').value;
let cvc = document.getElementById("cvc");
// Validate the CVC value
if (cvc.validity.valueMissing) {
  cvc.setCustomValidity("Enter your CVC number");
} else if (card === "amex" && !/^\d{4}$/.test(cvc.value)) {
  cvc.setCustomValidity("Enter a 4-digit number");
} else if (card !== "amex" && !/^\d{3}$/.test(cvc.value)) {
  cvc.setCustomValidity("Enter a 3-digit number");
} else {
  cvc.setCustomValidity("");
}
}

subButton.addEventListener('click', function() {
localStorage.setItem('preferredName', preferredName);
window.open("../html/orderSubmit.html"); // Replace with the URL of the web document you want to open

});



//validate password

document.getElementById('password').addEventListener('input', function() {
let password = this.value;
let messageElement = document.getElementById('passwordMessage');
let message = '';

if (password.length < 8) {
    message = 'Password must be at least 8 characters long.';
} else if (!/[A-Z]/.test(password)) {
    message = 'Password must have at least one uppercase letter.';
} else if (!/\d/.test(password)) {
    message = 'Password must have at least one digit.';
} else if (!/[!@#$]/.test(password)) {
    message = 'Password must have at least one of the following symbols: !, @, #, $.';
}

this.setCustomValidity(message);
messageElement.textContent = message;
});

document.getElementById('client-info-form').addEventListener('submit', function(e) {
let passwordInput = document.getElementById('password');
if (!passwordInput.checkValidity()) {
    e.preventDefault(); // Prevent form submission
}
});








/* ------- Luhn Algorithm used for Validating Credit Card Numbers   ----- */

function luhn(idNum) {
let string1 = "";
let string2 = "";

// Retrieve the odd-numbered digits starting from the back
for (let i = idNum.length - 1; i >= 0; i -= 2) {
  string1 += idNum.charAt(i);
}
// Retrieve the even-numbered digits starting from the back and double them
for (let i = idNum.length - 2; i >= 0; i -= 2) {
  string2 += 2 * idNum.charAt(i);
}

// Return whether the sum of the digits is divisible by 10
return sumDigits(string1 + string2) % 10 === 0;

function sumDigits(numStr) {
  let digitTotal = 0;
  for (let i = 0; i < numStr.length; i++) {
    digitTotal += parseInt(numStr.charAt(i));
  }
  return digitTotal;
}
}