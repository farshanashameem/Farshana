          
      const form = document.getElementById('form');
      const names=document.getElementById("name");
      const email=document.getElementById("email");
      const phone=document.getElementById("phone");
      const comments=document.getElementById("textarea");

      const errName=document.getElementById("error-name");
      const errMail=document.getElementById("error-mail");
      const errPhone=document.getElementById("error-number");
      const errMsg=document.getElementById("error-text");

      form.addEventListener('submit',(e)=>{

        var mailCheck= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var namesChecks=/^[A-Za-z]+$/;
        let Error = false;
        var phoneCheck=/^\d{10}$/;

        if(names.value===''||names.value===null) {
                e.preventDefault();
                errName.innerHTML="Name can't be blank";
                Error = true;
            }
        else if(!names.value.match(namesChecks)){
                e.preventDefault();
                errName.innerHTML="Enter a valid Name";
                Error = true;
        }

        if(!email.value.match(mailCheck)){
            e.preventDefault();
            errMail.innerHTML='Valid Email is required';
            Error = true;
          }
          if(phone===''||phone===null){
            e.preventDefault();
            errPhone.innerHTML='Phone Number cannot be empty';
            Error = true;
          }
          else if(!phone.value.match(phoneCheck)){
            e.preventDefault();
            errPhone.innerHTML='Valid phone number required';
            Error = true;

          }
        
          if(comments.value===''||comments.value===null){
            e.preventDefault();
            errMsg.innerHTML='Message cannot be blank';
            Error = true;
          }
        
          if(!Error){
            alert('form is submitted');
          }

      });
