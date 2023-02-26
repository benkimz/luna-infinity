const form = document.getElementById('myform');
const firstname = document.getElementById('fname');
const lastname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const check01 = document.getElementById('check01');

form.addEventListener('submit', e => {
    e.preventDefault();

    validationcheck();
})

const setError = (element, message) =>{
   const formOrigin = element.parentElement;
   const errorDisplay = formOrigin.querySelector('.error');


   errorDisplay.innerText = message;
   formOrigin.classList.add('error');
   formOrigin.classList.remove('success');
}
const setSuccess = element =>{
    const formOrigin = element.parentElement;
    const errorDisplay = formOrigin.querySelector('.error');

    errorDisplay.innerText = '';
    formOrigin.classList.add('success');
    formOrigin.classList.remove('error');
}

const emailvalidation = email =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}

function validationcheck(){
    const firstnamevalue = firstname.value.trim();
    const lastnamevalue = lastname.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const password2value = password2.value.trim();


    if(firstnamevalue === ''){
        setError(firstname, 'Firstname is requried')
    }else{
        setSuccess(firstname);
    }
    if(lastnamevalue === ''){
        setError(lastname, 'lastname is requried')
    }else{
        setSuccess(lastname);
    }
    if(emailvalue === ''){
        setError(email, 'Email Address Is required')
    }else if(!emailvalidation(emailvalue)){
        setError(email, 'Please enter a valid email address');
    }else{
        setSuccess(email)
    }
    if(passwordvalue === ''){
        setError(password, 'Please enter password')
    }else if(passwordvalue.length < 8){
        setError(password, 'Password should have atleast 8 characters');
        check01.style.color = 'red'
    }else{
        setSuccess(password);
        check01.style.color = 'green';
    }
    if(passwordvalue.length >= 10){
        document.getElementById('check02').style.color = 'green'
        // setSuccess(password)
    }else{
        document.getElementById('check02').style.color = 'red';
        
    }
    if(passwordvalue.match(/[0-9]/i)){
        document.getElementById('check04').style.color = 'green';
        // setSuccess(password)
    }else{
        document.getElementById('check04').style.color = 'red';
        // setError(password, 'please include a numerical character')
    }
    if(passwordvalue.match(/[^a-zA-Z0-9-'']/i)){
        document.getElementById('check03').style.color = 'green'
        // setSuccess(password)
    }else{
        document.getElementById('check03').style.color = 'red';
        // setError(password, 'please include special character')
    }
    if(passwordvalue.match(' ')){
        document.getElementById('check05').style.color = 'red'
        // setError(password, 'please do not use spaces')
    }else{
        document.getElementById('check05').style.color = 'green'
        // setSuccess(password)
    }
    if(passwordvalue.match(/[A-Z]/)){
        document.getElementById('check06').style.color = 'green'
        // setSuccess(password)
    }else{
        document.getElementById('check06').style.color = 'red';
        // setError(password, 'please include uppercase letters character')
    }
    // if(passwordvalue.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)){
    //     document.getElementById('check04').style.color = 'green';
    //     document.getElementById('check03').style.color = 'green';
    //     document.getElementById('check05').style.color = 'green';
    //     document.getElementById('check06').style.color = 'green'
    // }
    // else{
    //     document.getElementById('check04').style.color = 'red';
    //     document.getElementById('check03').style.color = 'red';
    //     document.getElementById('check05').style.color = 'red';
    //     document.getElementById('check06').style.color = 'red';
    // }
    // if(passwordvalue.match(/[^a-zA-Z0-9-'']/i) && (/[0-9]/i) && (/[A-Z]/)){
    //     document.getElementById('check04').style.color = 'green';
    //     document.getElementById('check03').style.color = 'green';
    //     document.getElementById('check05').style.color = 'green';
    //     document.getElementById('check06').style.color = 'green'
    //     setSuccess(password)
    // }else{
    //     document.getElementById('check04').style.color = 'red';
    //     document.getElementById('check03').style.color = 'red';
    //     document.getElementById('check05').style.color = 'red';
    //     document.getElementById('check06').style.color = 'red';
    //     setError(password, 'please use a strong password')
    // }
     if(password2value === ''){
         setError(password2, 'Please confirm password');
     }else if(password2value !== passwordvalue){
         setError(password2, 'Password does not match')
     }else{
         setSuccess(password2);
     }
}

var is_visible = false;

function see(){
    // var input = document.getElementById('password');
   
    if(is_visible){
        password.type = 'password'
        is_visible = false;
        document.getElementById('eye2').style.visibility = 'visible';
        document.getElementById('eye').style.visibility = 'hidden';
    }else{
        password.type = 'text';
        is_visible = true;
        document.getElementById('eye').style.visibility = 'visible';
        document.getElementById('eye2').style.visibility = 'hidden';
    }
}

function see2(){
    // var input = document.getElementById('password');
   
    if(is_visible){
        password2.type = 'password'
        is_visible = false;
        document.getElementById('eye2-confirm').style.visibility = 'visible';
        document.getElementById('eye-confirm').style.visibility = 'hidden';
    }else{
        password2.type = 'text';
        is_visible = true;
        document.getElementById('eye-confirm').style.visibility = 'visible';
        document.getElementById('eye2-confirm').style.visibility = 'hidden';
    }
}