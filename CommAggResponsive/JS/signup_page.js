function submitSignupForm(){
    var name, email, phno, pwd;
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    phno = document.getElementById('phone').value;
    pwd = document.getElementById('password').value;
    if(name == "" || email == "" || phno == "" || pwd == ""){
      alert('Please fill all the details')
    }
    else{
      document.getElementById("signup").submit();
    }
  }