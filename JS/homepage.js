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
    return true;
  } else {

    setTimeout(function () {
      
      location.href = '/HTML/API_Page.html'
    }, 2000);

    var img;
    img = document.getElementById('cargif');
    img.style.width = '100%'
    img.style.height = '100%'
    img.src = '/Media/CarLoadingGif.gif';
  }
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