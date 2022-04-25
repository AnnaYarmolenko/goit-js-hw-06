const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
      if (inputEl.value === '') {
       outputEl.innerHTML = 'Anonymous';
    } else{
    outputEl.innerHTML = inputEl.value;
    }
});

