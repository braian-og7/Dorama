function validateForm() {
// Obtém os valores dos campos do formulário
const name = document.forms["frmContato"]["userName"].value.trim();
const email = document.forms["frmContato"]["userEmail"].value.trim();
const assunto = document.forms["frmContato"]["subject"].value.trim();
const message = document.forms["frmContato"]["message"].value.trim();

// Verifica se o campo "Nome" foi preenchido 
if (name === "") {
document.getElementById("userName-Info").innerHTML = "Por favor, digite seu nome";
document.getElementById("userName-Info").classList.add = "invalid-feedback";
document.forms["frmContato"]["userName"].classList.add("is-invalid");
return false;
}

// Verifica se o campo "E-mail" foi preenchido corretamente
if (!isValidEmail(email)) {
    document.getElementById("userEmail-info").innerHTML = "Por favor, digite um e-mail válido";
    document.getElementById("userEmail-info").classList.add("invalid-feedback");
    document.forms["frmContato"]["userEmail"].classList.add("is-invalid");
    return false;
}

// Verifica se o campo "Assunto" foi preenchido corretamente
if (assunto==="") {
    document.getElementById("userSubject-Info").innerHTML = "Por favor, digite um assunto válido";
    document.getElementById("userSubject-Info").classList.add("invalid-feedback");
    document.forms["frmContato"]["subject"].classList.add("is-invalid");
    return false;
}

// Verifica se p campo "Mensagem" foi preenchido
if (message === "") {
    document.getElementById("userMessage-Info").innerHTML = "Por favor, digite sua mensagem";
    document.getElementById("userMessage-Info").classList.add = ("invalid-feedback");
    document.forms["frmContato"]["message"].classList.add("is-invalid");
    return false;
}

if (message.length < 10) {
    document.getElementById("userMessage-Info").innerHTML = "Por favor, escreva uma mensagem minima de 10 caracteres";
    document.getElementById("userMessage-Info").classList.add = ("invalid-feedback");
    document.getElementById("userMessage-Info").classList.add = ("invalid-feedback");
    document.forms["frmContato"]["message"].classList.add("is-invalid");
    return false
}

// Retorna true caso todos os campos tenham sido preenchidos corretamente
return true;
}

function isValidEmail(email) {
    // Expressão regular para verificar se o e-mail é válido
    const emailRegex = /\S+@\.\S+/;
    return emailRegex.test(email);
}