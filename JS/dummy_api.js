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

    const date = new Date();
    date.setHours(date.getHours() + 1)
    const unixDate = Math.floor(date.getTime() / 1000)
    console.log(unixDate)

    let form_data = new FormData();
    form_data.append('key', "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAvWsZp6+LgsDLDZNThnxP\nedjz6oRCKzkarLAH/zYX/6ZfrxVBE4Lu+/jAcxT9nA2QFaOijjV+dLdqr0XdjBAZ\nWThgPkISRV6assRIo5Z7q/6YbeNtkeOEIRwGOFB+sGhE/NSPaoChSBVlfaISoPFs\n7twPpcaPG+ua+SeBPTuFRLO6YDaQy9TObprk5cDGbYHsqAZm6IZGHLAKUPWGeGMB\nrjnPZzHbvkkGJAqhHw7twLtRbj/9ZWRh4n2sk8gMU+g4HJGAWv4wVZ3VrIdc+w6R\nIoUaqvYYGOHqulOLoYpstNAooJhprKAbWoLsN1GBCm/a0EePMZu2KlQNjw5VWt7o\nLOOsqALPZjsJ0AhGe8XlW496amiH+hvjeWIlPEVdE2oy+iuso/izRiWbzHqZV4i6\n4+SByscSgFaZP/yjMv9k5F8Z1ZWyTd4HQ81QZT1kZLOdvZ+/xrWlVb+T4K0R2ARI\nUb8aoV0Z6B7sCl97aFu9/80lSPy/V9vk2a/a8VzFbb1Ybzmcok+tIg6Fh0vo0lCc\nx/lFTUElD+SeFt4thVSUWuLczUuGTmBumrXB8LAJFyAIAIBOe2Vvjf9EfhItWI8q\nCq447GHyhTsoL7U3j/bCCcTzpRgZyRd5x9EfuRpJoj2mTOrXHpsGZAkuaUmwiTc7\nXquTSj+EjPh4d75q4zbjE3UCAwEAAQ==",),
    form_data.append( "pickup" , "Heathrow Airport",)
    form_data.append("destination" , "London")
    form_data.append("date" , unixDate)
            
    fetch('https://api.taxicode.com/booking/quote/', {
            method: "POST",
            body:form_data
            }).then(function (response) {
                return response.json();
            }).then(function (text) {
                console.log("Response:" ,text)
            })

}

