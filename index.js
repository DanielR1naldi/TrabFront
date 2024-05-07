var emailInput = document.getElementById('email');
var telfoneInput = document.getElementById('telefone');
var nomInput = document.getElementById('nome');

var telefoneRegex =  /^\(\d{2}\)\d{2}\d{5}\-\d{4}$/;

var emailRegex = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validaInputs(){
    var nome = nomInput.value.trim();
    if (nome === '') {
        alert("O campo do nome não pode estar vazio");
    }

    var email = emailInput.value;
    if (!emailRegex.test(email)) {
        alert("Formato de e-mail inválido, digite novamente!");
    }

    var tel = telfoneInput.value;
    if (!telefoneRegex.test(tel)) {
        alert("Formato de telefone não está no padrão");
    }
}
