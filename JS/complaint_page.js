function takeInput(){
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*'
    let file = input.file;
    input.click();
}