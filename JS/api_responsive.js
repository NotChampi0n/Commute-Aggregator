var isOpenUber = false;
var isOpenOla = false;

let uberParent;
let uberContainer;

let olaParent;
let olaContainer;

document.addEventListener("DOMContentLoaded", setIds);

function setIds(){
    uberParent = document.getElementById("uberApiParent");
    uberContainer = document.getElementById("uberApiContainer");
    uberLogo = document.getElementById("uberLogo");

    olaParent = document.getElementById("olaApiParent");
    olaContainer = document.getElementById("olaApiContainer");
    olaLogo = document.getElementById("olaLogo");
}

function stretchUberApi(){    
    console.log(isOpenUber)
    if(isOpenOla && isOpenUber){
        isOpenUber = true
        uberParent.style.removeProperty("left");
        uberParent.style.width="835px";
        uberContainer.style.width="780px";
        uberParent.style.right="145px";
        uberContainer.style.display="grid";
        Array.from(document.getElementsByClassName("uberItem")).forEach(elem => {
            elem.style.display = "block";
        });
        uberLogo.style.display = "none";
        isOpenOla = false
        olaParent.style.width="200px";
        olaContainer.style.width="85%";
        olaParent.style.right="0px";
        olaContainer.style.display="block";
        Array.from(document.getElementsByClassName("olaItem")).forEach(elem => {
            elem.style.display = "none";
        });
        olaLogo.style.display = "block";
    }
    else if(isOpenUber){
        isOpenUber = false
        uberParent.style.removeProperty("left");
        uberParent.style.width="200px";
        uberContainer.style.width="85%";
        uberParent.style.right="155px";
        uberContainer.style.display="block";
        Array.from(document.getElementsByClassName("uberItem")).forEach(elem => {
            elem.style.display = "none";
        });
        uberLogo.style.display = "block";
 
    }
    else{
        isOpenUber = true
        uberParent.style.removeProperty("left");
        uberParent.style.width="835px";
        uberContainer.style.width="780px";
        uberParent.style.right="145px";
        uberContainer.style.display="grid";
        Array.from(document.getElementsByClassName("uberItem")).forEach(elem => {
            elem.style.display = "block";
        });
        uberLogo.style.display = "none";

        if(isOpenOla){
            isOpenOla = false
            olaParent.style.width="200px";
            olaContainer.style.width="85%";
            olaParent.style.right="0px";
            olaContainer.style.display="block";
            Array.from(document.getElementsByClassName("olaItem")).forEach(elem => {
                elem.style.display = "none";
            });
            olaLogo.style.display = "block";
        }
    }
}

function stretchOlaApi(){    
    console.log(isOpenOla)
    if(isOpenOla){
        isOpenOla = false
        olaParent.style.width="200px";
        olaContainer.style.width="85%";
        olaParent.style.right="0px";
        olaContainer.style.display="block";
        Array.from(document.getElementsByClassName("olaItem")).forEach(elem => {
            elem.style.display = "none";
        });
        olaLogo.style.display = "block";

        if(!isOpenUber){
            uberParent.style.removeProperty("left");
            uberParent.style.width="200px";
            uberContainer.style.width="85%";
            uberParent.style.right="145px";
            uberContainer.style.display="block";
        }
        if(isOpenUber){
            isOpenUber = true
            uberParent.style.removeProperty("left");
            uberParent.style.width="835px";
            uberContainer.style.width="780px";
            uberParent.style.right="145px";
            uberContainer.style.display="grid";
            Array.from(document.getElementsByClassName("uberItem")).forEach(elem => {
                elem.style.display = "block";
            });
            uberLogo.style.display = "none";
        }
    }
    else{
        isOpenOla = true
        olaParent.style.width="835px";
        olaContainer.style.width="780px";
        olaParent.style.right="0px";
        olaContainer.style.display="grid";
        Array.from(document.getElementsByClassName("olaItem")).forEach(elem => {
            elem.style.display = "block";
        });
        olaLogo.style.display = "none";
        if(!isOpenUber){
            uberParent.style.left = "0px";
            Array.from(document.getElementsByClassName("uberItem")).forEach(elem => {
                elem.style.display = "none";
            });
            uberLogo.style.display = "block";
        }
        if(isOpenUber){   
            uberParent.style.removeProperty("left");
            uberContainer.style.display="block"
            uberContainer.style.width="85%";
            Array.from(document.getElementsByClassName("uberItem")).forEach(elem => {
                elem.style.display = "none";
            });
            uberLogo.style.display = "block";
        }
    }
}
