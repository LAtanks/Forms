let username = document.getElementById("username");
let password = document.getElementById("password") 
let email = document.getElementById("email");
let form = document.getElementById("form") ;
let icons = document.getElementsByTagName("img");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value;
    const passwordValue = password.value.toString();

    if(usernameValue === '' || !checkEmail(usernameValue)){
        setErrorFor(username, "O nome de usuario ou E-mail é obrigatorio!");
    }else if(usernameValue != '' || checkEmail(usernameValue)){
        setSuccessFor(username);
    }else if(!checkEmail(email)){
        console.log("asfasfasf")
    }


    if(passwordValue === ''){
        setErrorFor(password, 'Use a senha ja criada na sua conta');
    }else if(passwordValue.length < 8){
        setErrorFor(password, "Digite senha com mais de 8 digitos");
    }else{
        setSuccessFor(password);
    }

    const formControls = form.querySelectorAll(".form-controls");
    const formIsValid = [...formControls].every((formControl) => {
      return formControl.className === "form-controls success";
    });

    if(formIsValid){
        console.log('o formulario está 100% válido');
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