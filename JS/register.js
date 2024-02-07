        const form = document.getElementById('form');
        const fname = document.getElementById('fname');
        const lname = document.getElementById('lname');
        const email = document.getElementById('email');
        const pass = document.getElementById('pass');
        const pass2 = document.getElementById('pass2');
        const birthday = document.getElementById('birthday');
        const phone = document.getElementById('phone');
        const address = document.getElementById('address');
        const female = document.getElementById('female');
        const male = document.getElementById('male');
        const pnts = document.getElementById('pnts');
      
      
        
        form.addEventListener('submit', (event)=> {
        
            validateInputs();
            console.log(isFormValid());
            if(isFormValid()==true){
                
                event.preventDefault();

                swal({
                    title: "Thank you!",
                    text: "Your account has been successfully created!",
                    icon: "success",
                    button: "Okay",
                  }).then(function(){window.location = "index.html"});
    
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
        

        function isValidPhone (phone) 
        {
            return String(phone)
            .match (
                /((\+[0-9]{2})|0)[.\- ]?9[0-9]{2}[.\- ]?[0-9]{3}[.\- ]?[0-9]{4}/
            );
        };
       
        function validateInputs () {
            const fnameValue = fname.value.trim();
            const emailValue = email.value.trim();
            const passValue = pass.value.trim();
            const pass2Value = pass2.value.trim();
            const birthdayValue = birthday.value.trim();
            const phoneValue = phone.value.trim();
            const addressValue = address.value.trim();
            const femaleValue = female.value.trim();
            const maleValue = male.value.trim();
            const pntsValue = pnts.value.trim();
            
        
            if(fnameValue === ''){
                setError(fname, 'First name is required');

            }
            else if(fname.value.length<5){  
                setError(fname, 'First name is too short');
            }
        
            else {
                setSuccess(fname);
            }
        
            if(passValue===''){
                setError(pass,'Password is required');
            }
            else if(pass.value.length<6){
                setError(pass,'Password is too short (Min. of 6 characters)');
            }
            else {
                setSuccess(pass);
            }

            if(pass2Value===''){
                setError(pass2,'Please confirm your password');
            }
            else if(pass2Value !== passValue){
                setError(pass2,'Password does not match');
            }
            else{
                setSuccess(pass2);
            }
            
            if (emailValue===''){
                setError(email, 'Email is required');
            }   
            else if(!isValidEmail(emailValue))
            {
                setError(email, 'Provide a valid email address');
            }
            else
            {
                setSuccess(email);
            }

            if(birthdayValue === ''){
                setError(birthday,'Enter your birthday');
            }

            else{
                setSuccess(birthday);
            }
            if(phoneValue===''){
                setError(phone,'Please enter a valid number');
            }
           
            else if(!isValidPhone(phoneValue)){
                setError(phone,'Enter a valid phone number');
            }
            else{
                setSuccess(phone);
            }

            if(!female.checked && !male.checked && !pnts.checked) {
                setError(female, 'Please choose one');
            }
            
            else{
                setSuccess(female);
            }
            
            if(addressValue===''){
                setError(address,'Please enter your address');
            }
            else{
                setSuccess(address);
            }

            if (!checkbox.checked) {
                setError(checkbox, 'Please check the terms and conditions');
               } 
               
            else {
                 setSuccess(checkbox);
                 
               }

        }

      