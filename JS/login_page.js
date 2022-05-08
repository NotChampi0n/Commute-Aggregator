function submitLoginForm(){
    var email, pwd;
    email = document.getElementById('email').value;
    pwd = document.getElementById('password').value;
    if(email == "" || pwd == ""){
      alert('Please enter Email and Password')
    }
    else{
      document.getElementById("login").submit();
    }
}