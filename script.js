let textInput = document.getElementById('textInput-id')
let textOutput = document.getElementById('textOutput-id')
let btnEncryption = document.getElementById('btnEncryption-id')
let btnDecrypt = document.getElementById('btnDecrypt-id')


function decrypt(text) {
    let letters = {
        'ai': [/ai/g, 'a'],
        'enter': [/enter/g, 'e'],
        'imes': [/imes/g, 'i'],
        'ober': [/ober/g, 'o'],
        'ufat': [/ufat/g, 'u']
    };
    for (l in letters) {
        text = text.includes(l) ? text.replace(letters[l][0], letters[l][1]) : text;
    }
    return text;
}


function encryption(text) {
    let letters = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };
    return text.split('').map((e) => letters[e] ? letters[e] : e).join('')
}

function createInput(fun) {
    let btnCopy = document.createElement('button');
    btnCopy.classList.add('textOutput-button-copy')
    btnCopy.innerText = 'Copiar';
    btnCopy.onclick = copyCliboard;

    let textarea = document.createElement('textArea');
    textarea.classList.add('textOutput-paragraph')
    textarea.setAttribute('readonly', true)
    textarea.value = fun(textInput.value);

    textOutput.innerHTML = '';
    textOutput.appendChild(textarea)
    textOutput.appendChild(btnCopy)
}

function validateText() {
    if (textInput.value == '' || textInput.value.match(/[A-Z]/g) != null
     || textInput.value.match(/[áéíóú]/g) != null || textInput.value.match(/["#$%&/()]/)) {
        alert('Por favor sigue las instrucciones ingresa texto que solo que tenga minúsculas, sin acentos y que no tenga caracteres especiales')
        return false
    }
    return true;
}

function copyCliboard() {
    navigator.clipboard.writeText(textOutput.childNodes[0].value)
}

function inputEncryption() {
    if (validateText()) {
        createInput(encryption)
    }
}

function inputDecrypt() {
    if (validateText()) {
        createInput(decrypt)
    }
}


btnEncryption.onclick = inputEncryption;
btnDecrypt.onclick = inputDecrypt;



