const form = document.getElementById("registration-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

const successMessage = document.getElementById("success-message");


// ================================
// Validation Functions
// ================================

function validateName() {
    const name = nameInput.value.trim();

    if (name === "") {
        showError(nameInput, "name-error", "Name is required.");
        return false;
    }

    if (name.length < 3) {
        showError(
            nameInput,
            "name-error",
            "Name must be at least 3 characters."
        );
        return false;
    }

    showSuccess(nameInput, "name-error");
    return true;
}


function validateEmail() {
    const email = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        showError(
            emailInput,
            "email-error",
            "Email is required."
        );
        return false;
    }

    if (!emailPattern.test(email)) {
        showError(
            emailInput,
            "email-error",
            "Please enter a valid email address."
        );
        return false;
    }

    showSuccess(emailInput, "email-error");
    return true;
}


function validatePhone() {
    const phone = phoneInput.value.trim();

    const phonePattern =
        /^[0-9+\-\s]{10,15}$/;

    if (phone === "") {
        showError(
            phoneInput,
            "phone-error",
            "Phone number is required."
        );
        return false;
    }

    if (!phonePattern.test(phone)) {
        showError(
            phoneInput,
            "phone-error",
            "Please enter a valid phone number."
        );
        return false;
    }

    showSuccess(phoneInput, "phone-error");
    return true;
}


function validatePassword() {
    const password = passwordInput.value;

    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (password === "") {
        showError(
            passwordInput,
            "password-error",
            "Password is required."
        );
        return false;
    }

    if (!passwordPattern.test(password)) {
        showError(
            passwordInput,
            "password-error",
            "Password must contain 8+ characters, uppercase, lowercase and a number."
        );
        return false;
    }

    showSuccess(passwordInput, "password-error");
    return true;
}


function validateConfirmPassword() {
    const confirmPassword =
        confirmPasswordInput.value;

    if (confirmPassword === "") {
        showError(
            confirmPasswordInput,
            "confirm-password-error",
            "Please confirm your password."
        );
        return false;
    }

    if (confirmPassword !== passwordInput.value) {
        showError(
            confirmPasswordInput,
            "confirm-password-error",
            "Passwords do not match."
        );
        return false;
    }

    showSuccess(
        confirmPasswordInput,
        "confirm-password-error"
    );

    return true;
}


// ================================
// Show Error
// ================================

function showError(input, errorId, message) {

    const errorElement =
        document.getElementById(errorId);

    input.classList.remove("valid");
    input.classList.add("invalid");

    errorElement.textContent = message;
}


// ================================
// Show Success
// ================================

function showSuccess(input, errorId) {

    const errorElement =
        document.getElementById(errorId);

    input.classList.remove("invalid");
    input.classList.add("valid");

    errorElement.textContent = "";
}


// ================================
// Real-Time Validation
// ================================

nameInput.addEventListener("input", validateName);

emailInput.addEventListener("input", validateEmail);

phoneInput.addEventListener("input", validatePhone);

passwordInput.addEventListener("input", () => {
    validatePassword();

    if (confirmPasswordInput.value !== "") {
        validateConfirmPassword();
    }
});

confirmPasswordInput.addEventListener(
    "input",
    validateConfirmPassword
);


// ================================
// Focus Events
// ================================

const inputs = [
    nameInput,
    emailInput,
    phoneInput,
    passwordInput,
    confirmPasswordInput
];

inputs.forEach((input) => {

    input.addEventListener("focus", () => {
        input.style.backgroundColor = "#f8fafc";
    });

});


// ================================
// Blur Events
// ================================

nameInput.addEventListener("blur", validateName);

emailInput.addEventListener("blur", validateEmail);

phoneInput.addEventListener("blur", validatePhone);

passwordInput.addEventListener(
    "blur",
    validatePassword
);

confirmPasswordInput.addEventListener(
    "blur",
    validateConfirmPassword
);

inputs.forEach((input) => {

    input.addEventListener("blur", () => {
        input.style.backgroundColor = "#ffffff";
    });

});


// ================================
// Form Submission
// ================================

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid =
        validateConfirmPassword();

    const isFormValid =
        isNameValid &&
        isEmailValid &&
        isPhoneValid &&
        isPasswordValid &&
        isConfirmPasswordValid;


    if (isFormValid) {

        successMessage.classList.add("show");

        successMessage.textContent =
            "Form submitted successfully! Your account has been created.";

        form.reset();

        inputs.forEach((input) => {
            input.classList.remove("valid");
            input.classList.remove("invalid");
        });

        setTimeout(() => {
            successMessage.classList.remove("show");
        }, 5000);

    } else {

        successMessage.classList.remove("show");

    }

});