const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');
const charsRemaining = document.getElementById('charsRemaining');


const maxLength = 50;

textInput.addEventListener('input', function() {
    const currentLength = textInput.value.length;

    if (currentLength > maxLength) {
        textInput.value = textInput.value.substring(0, maxLength);
        charCount.textContent = maxLength;
        charsRemaining.textContent = 0;
    } else {

        charCount.textContent = currentLength;
        charsRemaining.textContent = maxLength - currentLength;
    }
});
