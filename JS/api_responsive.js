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
    uberLogo = document.getElementById("uberLogo");

    revvParent = document.getElementById("revvApiParent");
    revvContainer = document.getElementById("revvApiContainer");
    revvLogo = document.getElementById("revvLogo");
}

function stretchUberApi(){    
    console.log(isOpenUber)
    if(isOpenUber){
        
        isOpenUber = false
        uberParent.style.width="88px";
        uberContainer.style.width="61px";
        uberParent.style.left="212px";
        uberContainer.style.display="block";
        Array.from(document.getElementsByClassName("uberItem")).forEach(elem => {
            elem.style.display = "none";
        });
        uberLogo.style.display = "block";
 
    }
    else{
        isOpenUber = true
        uberParent.style.width="300px";
        uberContainer.style.width="272px";
        uberParent.style.left="0px";
        uberContainer.style.display="grid";
        Array.from(document.getElementsByClassName("uberItem")).forEach(elem => {
            elem.style.display = "block";
        });
        uberLogo.style.display = "none";

        if(isOpenRevv){
            isOpenRevv = false
            revvParent.style.width="88px";
            revvContainer.style.width="61px";
            revvParent.style.left="272px";
            revvContainer.style.display="block";
            Array.from(document.getElementsByClassName("revvItem")).forEach(elem => {
                elem.style.display = "none";
            });
            revvLogo.style.display = "block";
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
        revvContainer.style.display="block";
        Array.from(document.getElementsByClassName("revvItem")).forEach(elem => {
            elem.style.display = "none";
        });
        revvLogo.style.display = "block";

        if(!isOpenUber){
            uberParent.style.width="88px";
            uberContainer.style.width="61px";
            uberParent.style.left="212px";
            uberContainer.style.display="block";
        }
        if(isOpenUber){
            isOpenUber = true
            uberParent.style.width="300px";
            uberContainer.style.width="272px";
            uberParent.style.left="0px";
            uberContainer.style.display="grid";
            Array.from(document.getElementsByClassName("uberItem")).forEach(elem => {
                elem.style.display = "block";
            });
            uberLogo.style.display = "none";
        }
    }
    else{
        isOpenRevv = true
        revvParent.style.width="300px";
        revvContainer.style.width="272px";
        revvParent.style.left="61px";
        revvContainer.style.display="grid";
        Array.from(document.getElementsByClassName("revvItem")).forEach(elem => {
            elem.style.display = "block";
        });
        revvLogo.style.display = "none";
        if(!isOpenUber){
            uberParent.style.left = "0px";
            Array.from(document.getElementsByClassName("uberItem")).forEach(elem => {
                elem.style.display = "none";
            });
            uberLogo.style.display = "block";
        }
        if(isOpenUber){   
            console.log("hello");
            uberContainer.style.display="block"
            uberContainer.style.width="61px";
            Array.from(document.getElementsByClassName("uberItem")).forEach(elem => {
                elem.style.display = "none";
            });
            uberLogo.style.display = "block";
        }
    }
}
