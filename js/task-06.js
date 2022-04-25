const textInput = document.querySelector('#validation-input');

textInput.addEventListener("input", () => {
    if (textInput.getAttribute('data-length') > textInput.value.length) {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');
    } else {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    }
});





