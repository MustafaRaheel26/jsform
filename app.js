let userName = document.querySelector('#userName')
let email = document.querySelector('#email')
let NicNumber = document.querySelector('#nicNumber')
let password = document.querySelector('#password')
let btn = document.querySelector('#btn')

let regex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,10}$/
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let nicRegex = /^42\d{11}$/
let passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+]{8,16}$/

let obj;

btn.addEventListener('submit', function(event){
    event.preventDefault()
    if(regex.test(userName.value)){
        console.log(userName.value);
        obj.push(userName.value)
        console.log(obj);
    }else {
        console.log('UserName is Incorrect');
    }
    if(emailRegex.test(email.value)){
        console.log(email.value);
    }else {
        console.log('Email is Incorrect');
    }
    if(nicRegex.test(NicNumber.value)){
        console.log(NicNumber.value); 
    }else {
        console.log('NIC is Incorrect');
    }
    if(passwordRegex.test(password.value)){
        console.log(password.value);
    }else {
        console.log('Password is Incorrect');
    }
    
    userName.value = ''
    email.value = ''
    password.value = ''
    NicNumber.value = ''
})