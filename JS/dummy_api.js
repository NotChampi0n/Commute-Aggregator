function getDummyCars() {
    fetch('https://infinite-depths-52748.herokuapp.com/api/cars', {
        method: "POST",
        body: {
            "mode": "raw",
            // this will be according to the user.....
            "raw": "{\n\t\"filters\":{\n\t\t\"issueDate\":\"05/10/2020 18:21\",\n\t\t\"returnDate\":\"05/15/2020 13:15\",\n\t\t\"rentRange\":[0,10],\n\t\t\"seatingCapacity\":4,\n\t\t\"city\":\"Hyd\"\n\t}\t\n}",
            "options": {
                "raw": {
                    "language": "json"
                }
            }
        }
    }).then(function (response) {
        return response.json();
    }).then(function (text) {

        // This is how you can populate the data to the screen
        //document.getElementById("to").value = text['cars'][1].model

        // ---- Logic to filter data ---- 
        // for(i=0;i<text['cars'].length;i++){
        //     if(text['cars'][i]['city'] == "Hyd"){ //isme jo "Hyd" hai wo user ka city
        //         //kuch bhi kar idhar
        //     }
        // }

        console.log(text);
    })

}