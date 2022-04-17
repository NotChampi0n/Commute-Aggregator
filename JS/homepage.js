function swap(){
    var from, to;
    from = document.getElementById('from').value;
    to = document.getElementById('to').value;
    document.getElementById('from').value = to;
    document.getElementById('to').value = from;
}
function checkField(){
    var from, to;
    from = document.getElementById('from').value;
    to = document.getElementById('to').value;
    if(from == "" || to == ""){
        alert('Please enter locations')
    }
    else{
        location.href='/HTML/API_Page.html'
    }
}
function takeInput(){
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*'
    let file = input.file;
    input.click();
}