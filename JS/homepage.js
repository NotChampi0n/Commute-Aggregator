function swap() {
  var from, to;
  from = document.getElementById('from').value;
  to = document.getElementById('to').value;
  document.getElementById('from').value = to;
  document.getElementById('to').value = from;
}

function checkField() {
  var from, to;
  from = document.getElementById('from').value;
  to = document.getElementById('to').value;
  if (from == "" || to == "") {
    alert('Please enter locations')
  } else {

    location.href = '/HTML/API_Page.html'
  }
}

function submitForm(){
  var email, pwd;
  email = document.getElementById('email').value;
  pwd = document.getElementById('password').value;
  if(email == "" || pwd == ""){
    alert('Please enter Email or Password')
  }
  else{
    document.getElementById("login").submit();
  }
}

function takeInput() {
  let input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*'
  let file = input.file;
  input.click();
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}