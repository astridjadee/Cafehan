const form = document.getElementById('form')
const email = document.getElementById('email');

form.addEventListener('submit', e => {
        
    e.preventDefault();
    
    validateInputs();
    
});

const setError = (element, message) => {
    const fp = element.parentElement;
    const errorDisplay = fp.querySelector('.error');

    errorDisplay.innerText = message;
    fp.classList.add('error');
    fp.classList.remove('success');
    
}

const setSuccess = element => {
    const fp = element.parentElement;
   
    const errorDisplay = fp.querySelector('.error');

    errorDisplay.innerText = '';    
    fp.classList.add('success');
    fp.classList.remove('error');
};

const isValidEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


const validateInputs = () => {

    const emailValue = email.value.trim();

    if (emailValue===''){
                setError(email, 'Email is required');
            }
            else if(!isValidEmail(emailValue))
            {
                setError(email, 'Provide a valid email address');
            }
            else
            {
                setSuccess(email, );
        
                swal({
                    title: "Check your email to reset your password",
                    icon: "success",
                    button: "Okay",
                  }).then(function(){window.location = "index.html"});
            }


}

