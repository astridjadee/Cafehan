const form = document.getElementById('form');
const email = document.getElementById('email');
const pass = document.getElementById('pass');

form.addEventListener('submit', (event)=> {
        
    validateInputs();
    console.log(isFormValid());
    if(isFormValid()==true){
        
     }else {
         event.preventDefault();
     }

}    
);

function isFormValid(){
    const inputContainers = form.querySelectorAll('.reg');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });

    return result; 
}


function setError (element, message) {
    const reg = element.parentElement;
    const errorDisplay = reg.querySelector('.error');

    errorDisplay.innerText = message;
    reg.classList.add('error');
    reg.classList.remove('success');
    
}


function setSuccess (element) {
    const reg = element.parentElement;
    const errorDisplay = reg.querySelector('.error');

    errorDisplay.innerText = '';    
    reg.classList.add('success');
    reg.classList.remove('error');
    
};


function isValidEmail (email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };    

  function validateInputs () {

    const emailValue = email.value.trim();
    const passValue = pass.value.trim();
  
    if (emailValue===''){
        setError(email, 'Email is required');
       
        }   
    else if(!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        alert("Enter a valid email and password!");
        
    }

    else {
        setSuccess(email);
    }
   

    if(passValue===''){
        setError(pass,'Password is required');
        alert("Password and email is required");
        
    }

    else if(pass.value.length<=6){
        setError(pass,'Password is too short (Min. of 6 characters)');
        alert("Enter a valid email and password!");
    }
    else{
        setSuccess(pass);

    }

   
}












