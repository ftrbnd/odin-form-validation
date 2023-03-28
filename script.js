const form = document.querySelector('form');

const emailInput = document.querySelector('#email');
const emailError = document.querySelector("#email + span.error");

const countryInput = document.querySelector('#country');
const countryError = document.querySelector('#country + span.error')

const zipInput = document.querySelector('#zip');
const zipError = document.querySelector('#zip + span.error')

const passwordInput = document.querySelector('#password');
const passwordError = document.querySelector('#password + span.error');

const confirmPasswordInput = document.querySelector('#confirm');
const confirmError = document.querySelector('#confirm + span.error');

emailInput.addEventListener("input", () => {
  if (emailInput.validity.valid) {
    emailError.textContent = ""; // Reset the content of the message
    emailError.className = "error"; // Reset the visual state of the message
  } else {
    showEmailError();
  }
});

function showEmailError() {
  if (emailInput.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address.";
  } else if (emailInput.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (emailInput.validity.tooShort) {
    emailError.textContent = `Email should be at least ${emailInput.minLength} characters; you entered ${emailInput.value.length}.`;
  }

  emailError.className = "error active";
}

countryInput.addEventListener('input', () => {
    if (countryInput.validity.valid) {
        countryError.textContent = ""; // Reset the content of the message
        countryError.className = "error"; // Reset the visual state of the message
    } else {
        showCountryError();
    }
});

function showCountryError() {
    if (countryInput.validity.valueMissing) {
        countryError.textContent = "You need to enter a country.";
    }

    countryError.className = "error active";
}

zipInput.addEventListener('input', () => {
    if (zipInput.validity.valid) {
        zipError.textContent = ""; // Reset the content of the message
        zipError.className = "error"; // Reset the visual state of the message
    } else {
        showZipError();
    }
});

function showZipError() {
    if (zipInput.validity.valueMissing) {
        zipError.textContent = "You need to enter a zip code.";
    } else if (zipInput.validity.patternMismatch) {
        zipError.textContent = "You need a valid 5-digit zip code."
    }

    zipError.className = "error active";
}

passwordInput.addEventListener('input', () => {
    if (passwordInput.validity.valid) {
        passwordError.textContent = ""; // Reset the content of the message
        passwordError.className = "error"; // Reset the visual state of the message
    } else {
        showPasswordError();
    }
});

function showPasswordError() {
    if (passwordInput.validity.valueMissing) {
        passwordError.textContent = "Password is required.";
    } else if (passwordInput.validity.tooShort) {
        passwordError.textContent = `Please enter at least ${passwordInput.minLength} characters; you entered ${passwordInput.value.length}.`;
    } else if (passwordInput.validity.tooLong) {
        passwordError.textContent = `No more than ${passwordInput.minLength} characters; you entered ${passwordInput.value.length}.`;    
    }

    passwordError.className = "error active";
}

confirmPasswordInput.addEventListener('input', () => {
    if (confirmPasswordInput.value != passwordInput.value) {
        confirmError.textContent = 'Passwords do not match.';
        return confirmError.className = "error active";
    } 

    if (confirmPasswordInput.validity.valid) {
        confirmError.textContent = ""; // Reset the content of the message
        confirmError.className = "error"; // Reset the visual state of the message
    } else {
        showConfirmError();
    }
});

function showConfirmError() {
    if (confirmPasswordInput.validity.valueMissing) {
        confirmError.textContent = "Please confirm your password.";
    } else if (confirmPasswordInput.validity.tooShort) {
        confirmError.textContent = `Please enter at least ${confirmPasswordInput.minLength} characters; you entered ${confirmPasswordInput.value.length}.`;
    } else if (confirmPasswordInput.validity.tooLong) {
        confirmError.textContent = `No more than ${confirmPasswordInput.minLength} characters; you entered ${confirmPasswordInput.value.length}.`;    
    }

    confirmError.className = "error active";
}

form.addEventListener("submit", e => {
    if (!emailInput.validity.valid) {
        showEmailError();
        e.preventDefault();
    } else if (!countryInput.validity.valid) {
        showCountryError();
        e.preventDefault();
    }  else if (!zipInput.validity.valid) {
        showZipError();
        e.preventDefault();
    }  else if (!passwordInput.validity.valid) {
        showPasswordError();
        e.preventDefault();
    }  else if (!confirmPasswordInput.validity.valid) {
        showConfirmError();
        e.preventDefault();
    } else {
        console.log('Valid submission!');
        e.preventDefault();
    }
});