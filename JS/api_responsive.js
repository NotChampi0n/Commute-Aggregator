var isOpenUber = false;
var isOpenRevv = false;

let uberParent;
let uberContainer;

let revvParent;
let revvContainer;

document.addEventListener("DOMContentLoaded", setIds);

function setIds(){
    uberParent = document.getElementById("uberApiParent");
    uberContainer = document.getElementById("uberApiContainer");

    revvParent = document.getElementById("revvApiParent");
    revvContainer = document.getElementById("revvApiContainer");
}

function stretchUberApi(){    
    console.log(isOpenUber)
    if(isOpenUber){
        isOpenUber = false
        uberParent.style.width="88px";
        uberContainer.style.width="61px";
        uberParent.style.left="212px";

 
    }
    else{
        isOpenUber = true
        uberParent.style.width="300px";
        uberContainer.style.width="272px";
        uberParent.style.left="0px";

        if(isOpenRevv){
            isOpenRevv = false
            revvParent.style.width="88px";
            revvContainer.style.width="61px";
            revvParent.style.left="272px";
        }
    }
}

function stretchRevvApi(){    
    console.log(isOpenRevv)
    if(isOpenRevv){
        isOpenRevv = false
        revvParent.style.width="88px";
        revvContainer.style.width="61px";
        revvParent.style.left="272px";

        if(!isOpenUber){
            uberParent.style.width="88px";
            uberContainer.style.width="61px";
            uberParent.style.left="212px";
        }
    }
    else{
        isOpenRevv = true
        revvParent.style.width="300px";
        revvContainer.style.width="272px";
        revvParent.style.left="61px";

        if(!isOpenUber){
            uberParent.style.left = "0px";
        }
        
    }
}
