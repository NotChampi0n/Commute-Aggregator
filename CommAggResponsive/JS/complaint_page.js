function takeInput() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*'
    let file = input.file;
    input.click();
}

function submitComplaintForm(){
    var name, email, category, explanation;
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    category = document.getElementById('category').value;
    explanation = document.getElementById('complaint').value;
    if(name == "" || email == "" || category == "" || explanation == ""){
      alert('Please fill all the details')
    }
    else{
      document.getElementById("contact").submit();
    }
}