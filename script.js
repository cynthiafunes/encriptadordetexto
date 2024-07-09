function encrypt() {
    const inputText = document.getElementById('inputText').value;
    const message = document.getElementById('message');

    if (!isValidInput(inputText)) {
        message.textContent = 'El texto contiene caracteres no permitidos. Use solo letras minúsculas sin acentos ni caracteres especiales.';
        return;
    }

    message.textContent = '';
    let encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = encryptedText;
}

function decrypt() {
    const inputText = document.getElementById('inputText').value;
    const message = document.getElementById('message');

    if (!isValidInput(inputText)) {
        message.textContent = 'El texto contiene caracteres no permitidos. Use solo letras minúsculas sin acentos ni caracteres especiales.';
        return;
    }

    message.textContent = '';
    let decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = decryptedText;
}

function copyText() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

function isValidInput(input) {
    const regex = /^[a-z\s]+$/;
    return regex.test(input);
}
