var dummy_api_list_models = [];
var dummy_api_list_rentPerDay = [];
var dummy_api_list_seatingCapacity = [];
var temp = [];
var taxicode_list_class = [];
var taxicode_list_passengers = [];
var taxicode_list_price = [];

function getUberCars() {
    console.log("Uber called")
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
        //var dummy_api_list_models = [];
        for (i = 0; i < 5; i++) {
            dummy_api_list_models.push(text['cars'][i].model)
            dummy_api_list_rentPerDay.push(text['cars'][i].rentPerDay)
            dummy_api_list_seatingCapacity.push(text['cars'][i].seatingCapacity)
        }
        document.getElementById("uberPrice1").innerHTML = `₹${dummy_api_list_rentPerDay[3] * 13}`
        document.getElementById("uberPrice2").innerHTML = `₹${dummy_api_list_rentPerDay[4] * 14}`
        document.getElementById("uberPrice3").innerHTML = `₹${dummy_api_list_rentPerDay[1] * 16}`
        document.getElementById("uberPrice4").innerHTML = `₹${dummy_api_list_rentPerDay[2] * 18}`
        document.getElementById("uberPrice5").innerHTML = `₹${dummy_api_list_rentPerDay[0] * 15}`

        document.getElementById("uberModel1").innerHTML = dummy_api_list_models[0]
        document.getElementById("uberModel2").innerHTML = dummy_api_list_models[1]
        document.getElementById("uberModel3").innerHTML = dummy_api_list_models[2]
        document.getElementById("uberModel4").innerHTML = dummy_api_list_models[3]
        document.getElementById("uberModel5").innerHTML = dummy_api_list_models[4]

        document.getElementById("uberSeat1").innerHTML = dummy_api_list_seatingCapacity[0]
        document.getElementById("uberSeat2").innerHTML = dummy_api_list_seatingCapacity[1]
        document.getElementById("uberSeat3").innerHTML = dummy_api_list_seatingCapacity[2]
        document.getElementById("uberSeat4").innerHTML = dummy_api_list_seatingCapacity[3]
        document.getElementById("uberSeat5").innerHTML = dummy_api_list_seatingCapacity[4]

    })

}

function getRevvCars() {
    console.log("Revv called")
    const date = new Date();
    date.setHours(date.getHours() + 1)
    const unixDate = Math.floor(date.getTime() / 1000)
    console.log(unixDate)

    let form_data = new FormData();
    form_data.append('key', "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAvWsZp6+LgsDLDZNThnxP\nedjz6oRCKzkarLAH/zYX/6ZfrxVBE4Lu+/jAcxT9nA2QFaOijjV+dLdqr0XdjBAZ\nWThgPkISRV6assRIo5Z7q/6YbeNtkeOEIRwGOFB+sGhE/NSPaoChSBVlfaISoPFs\n7twPpcaPG+ua+SeBPTuFRLO6YDaQy9TObprk5cDGbYHsqAZm6IZGHLAKUPWGeGMB\nrjnPZzHbvkkGJAqhHw7twLtRbj/9ZWRh4n2sk8gMU+g4HJGAWv4wVZ3VrIdc+w6R\nIoUaqvYYGOHqulOLoYpstNAooJhprKAbWoLsN1GBCm/a0EePMZu2KlQNjw5VWt7o\nLOOsqALPZjsJ0AhGe8XlW496amiH+hvjeWIlPEVdE2oy+iuso/izRiWbzHqZV4i6\n4+SByscSgFaZP/yjMv9k5F8Z1ZWyTd4HQ81QZT1kZLOdvZ+/xrWlVb+T4K0R2ARI\nUb8aoV0Z6B7sCl97aFu9/80lSPy/V9vk2a/a8VzFbb1Ybzmcok+tIg6Fh0vo0lCc\nx/lFTUElD+SeFt4thVSUWuLczUuGTmBumrXB8LAJFyAIAIBOe2Vvjf9EfhItWI8q\nCq447GHyhTsoL7U3j/bCCcTzpRgZyRd5x9EfuRpJoj2mTOrXHpsGZAkuaUmwiTc7\nXquTSj+EjPh4d75q4zbjE3UCAwEAAQ==", ),
        form_data.append("pickup", "Heathrow Airport", )
    form_data.append("destination", "London")
    form_data.append("date", unixDate)

    fetch('https://api.taxicode.com/booking/quote/', {
        method: "POST",
        body: form_data
    }).then(function (response) {
        return response.json();
    }).then(function (text) {
        console.log(text)
        var keys = Object.keys(text.quotes);
        var key_name = keys[1]
        var vehicles = text.quotes['', key_name].vehicles

        console.log(vehicles.length)
        for (i = 0; i < vehicles.length; i++) {

            taxicode_list_class.push(vehicles[i].class)
            taxicode_list_price.push(vehicles[i].price)
            taxicode_list_passengers.push(vehicles[i].passengers)
            console.log(vehicles[i].passengers)
        }

        document.getElementById("revvPrice1").innerHTML = `₹ ${taxicode_list_price[0] * 2}`
        document.getElementById("revvPrice2").innerHTML = `₹ ${taxicode_list_price[1] * 3}`
        document.getElementById("revvPrice3").innerHTML = `₹ ${taxicode_list_price[8] * 4}`
        document.getElementById("revvPrice4").innerHTML = `₹ ${taxicode_list_price[9] * 5}`
        document.getElementById("revvPrice5").innerHTML = `₹ ${taxicode_list_price[10] * 7}`

        document.getElementById("revvModel1").innerHTML = taxicode_list_class[0]
        document.getElementById("revvModel2").innerHTML = taxicode_list_class[1]
        document.getElementById("revvModel3").innerHTML = taxicode_list_class[8]
        document.getElementById("revvModel4").innerHTML = taxicode_list_class[9]
        document.getElementById("revvModel5").innerHTML = taxicode_list_class[10]

        document.getElementById("revvSeat1").innerHTML = taxicode_list_passengers[0]
        document.getElementById("revvSeat2").innerHTML = taxicode_list_passengers[1]
        document.getElementById("revvSeat3").innerHTML = taxicode_list_passengers[8]
        document.getElementById("revvSeat4").innerHTML = taxicode_list_passengers[3]
        document.getElementById("revvSeat5").innerHTML = taxicode_list_passengers[6]



    })

}