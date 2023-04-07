/**
 * Tutorial follow for https://www.youtube.com/watch?v=3Ec9zY1C2og
 */


let username = document.getElementById("username");
let password = document.getElementById("password") 
let ConfirmPassword = document.getElementById("ConfirmPassword")
let email = document.getElementById("email");
let form = document.getElementById("form") ;
let icons = document.getElementsByTagName("img");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value.toString();
    const ConfirmPasswordValue = ConfirmPassword.value;

    if(usernameValue === ''){
        setErrorFor(username, "O nome de usuario é obrigatorio!");
    }else if(usernameValue != ''){
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, "O email é obrigatorio!");
    }else if(checkEmail(email)){
        setErrorFor(email, "Por favor use um email válido");
    }else{
        setSuccessFor(email);
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Crie uma senha para que ninguem descubra');
    }else if(passwordValue.length < 8){
        setErrorFor(password, "Digite senha com mais de 8 digitos");
    }else{
        setSuccessFor(password);
    }

    if(ConfirmPasswordValue === ''){
        setErrorFor(ConfirmPassword, 'Digite a mesma senha criada!');
    }else if(ConfirmPasswordValue != passwordValue){
        setErrorFor(ConfirmPassword, 'as senhas não estão exatas!');
    }else{
        setSuccessFor(ConfirmPassword);
    }

    const formControls = form.querySelectorAll(".form-controls");
    const formIsValid = [...formControls].every((formControl) => {
      return formControl.className === "form-controls success";
    });

    if(formIsValid){
        console.log('o formulario está 100% válido');
       // window.location = './lol.html';
    }else{
        console.log('o formulario não está 100% válido');
    }
}

function setErrorFor(input, msg){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = msg;
    formControl.className = 'form-controls error'
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-controls success'
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}
