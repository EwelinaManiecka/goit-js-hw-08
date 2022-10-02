import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector(".feedback-form input");
const textareaInput = document.querySelector(".feedback-form textarea");
const LOCALSTORAGE_KEY = "feedback-form-state";
const objKeyField = {};

updateInput();

form.addEventListener("input", throttle(saveLocalValue, 500));
form.addEventListener("submit", onSubmit);

function saveLocalValue(event) {
    event.preventDefault();
    objKeyField.email = emailInput.value;
    objKeyField.message = textareaInput.value;

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objKeyField));
};

function onSubmit(event) {
    event.preventDefault();

    const input = getLocalStorageItem(LOCALSTORAGE_KEY);

    console.log(input);
    updateInput();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    form.reset();
};

function updateInput() {
    const input = getLocalStorageItem(LOCALSTORAGE_KEY);
    const {
        email = "",
        message = ""
    } = input || {};
    emailInput.value = email;
    textareaInput.value = message;
};

function getLocalStorageItem(key) {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error("Get state error: ", error.message);
    }
};



