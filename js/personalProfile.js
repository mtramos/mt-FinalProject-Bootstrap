// Name Field
let nameField = document.getElementById("name-field")
let contactName = document.getElementById("contact-name")
let errorMessageName = document.getElementById("error-name")

nameField.addEventListener('keyup', function(event){
  event.preventDefault()
  if (contactName.value.length >= 10) {
      contactName.classList.add('field-error')
      errorMessageName.textContent = "Name must be less than 12 characters";
      }  else{
    errorMessageName.textContent = "";
    contactName.classList.remove('field-error');
    }
  })


// Lastname field
let lastnameField = document.getElementById("lastname-field")
let lastName = document.getElementById("lastname")
let errorMessageLast = document.getElementById("error-lastname")

lastnameField.addEventListener('keyup', function(event){
event.preventDefault()
if (lastName.value.length >= 10){
  lastName.classList.add('field-error')
  errorMessageLast.textContent = "Lastname should be more than 3 characters";
  } else{
  errorMessageLast.textContent = "";
  lastName.classList.remove('field-error');
  }
})

// email Field

let emailField = document.getElementById("email-field");
let emailInput = document.getElementById("email");
let emailError = document.getElementById("error-email");
let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

emailField.addEventListener('keyup', function(event){
  event.preventDefault()
 if (emailInput.value.match(emailFormat)){
  emailError.textContent = "";
  emailInput.classList.remove('field-error');
 } else{
  emailError.textContent = "Please enter a valid email address.";
  emailInput.classList.add('field-error');
 }
});

// Contact Field

let phoneField = document.getElementById("phone-field");
let phoneInput = document.getElementById("contactnumber");
let phoneError = document.getElementById("error-phone");
let phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

phoneField.addEventListener('keyup', function(event){
  event.preventDefault()
 if (phoneInput.value.match(phoneFormat)){
  phoneError.textContent = "";
  phoneInput.classList.remove('field-error');
 } else{
  phoneError.textContent = "Please enter a valid phone number.";
  phoneInput.classList.add('field-error');
 }
});