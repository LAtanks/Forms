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
        setErrorFor(username, "Username is required!");
    }else if(usernameValue != ''){
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, "Email is required!");
    }else if(checkEmail(email)){
        setErrorFor(email, "Please use a valid email!");
    }else{
        setSuccessFor(email);
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Create a password so no one can find out');
    }else if(passwordValue.length < 8){
        setErrorFor(password, "Enter password with more than 8 digits");
    }else{
        setSuccessFor(password);
    }

    if(ConfirmPasswordValue === ''){
        setErrorFor(ConfirmPassword, 'Enter the same password created!');
    }else if(ConfirmPasswordValue != passwordValue){
        setErrorFor(ConfirmPassword, 'passwords are not accurate!');
    }else{
        setSuccessFor(ConfirmPassword);
    }

    const formControls = form.querySelectorAll(".form-controls");
    const formIsValid = [...formControls].every((formControl) => {
      return formControl.className === "form-controls success";
    });

    if(formIsValid){
        console.log('the form is 100% valid');
       // window.location = './lol.html';
    }else{
        console.log('the form is not 100% valid');
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
