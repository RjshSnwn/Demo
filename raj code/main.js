function india() {
    fetch(`https://api.covid19api.com/dayone/country/india`).then(response =>
        response.json()).then(data => {
        if (data.length > 0) {
            var temp = "";



            data.forEach(element => {

                temp += "<tr>";
                temp += `<td>${element.ID}</td>`
                temp += `<td>${element.Country}</td>`
                temp += `<td>${element.Country}</td>`
                temp += `<td>${element.Lat}</td>`
                temp += `<td>${element.Lon}</td>`
                temp += `<td>${element.Confirmed}</td>`
                temp += `<td>${element.Deaths}</td>`
                temp += `<td>${element.Recovered}</td>`
                temp += `<td>${element.Active}</td>`
                temp += `<td>${new Date (element.Date).toLocaleDateString()}</td>`


            });

            document.getElementById('data').innerHTML = temp;
            $(document).ready(function() {
                $('#example').DataTable({

                });
            });

        }

    });
}

//user input 

function getdata() {
    var name = document.getElementById('input').value;
    document.getElementById("data").innerHTML = loader;
    fetch(`https://api.covid19api.com/dayone/country/${name}`).then(

        res => {
            res.json().then(
                data => {
                    if (data.length > 0) {
                        data = data.reverse();
                        var temp = "";
                        data.forEach((itemData) => {
                            temp += "<tr>";
                            temp += "<td>" + itemData.ID + "</td>";
                            temp += "<td>" + itemData.Country + "</td>";
                            temp += "<td>" + itemData.CountryCode + "</td>";
                            temp += "<td>" + itemData.Lat + "</td>";
                            temp += "<td>" + itemData.Lon + "</td>";
                            temp += "<td>" + itemData.Confirmed + "</td>";
                            temp += "<td>" + itemData.Deaths + "</td>";
                            temp += "<td>" + itemData.Recovered + "</td>";
                            temp += "<td>" + itemData.Active + "</td>";
                            temp += "<td>" + new Date(itemData.Date).toLocaleDateString() + "</td></tr>";
                        });
                        document.getElementById('data').innerHTML = temp;
                        $(document).ready(function() {
                            $('#example').DataTable({

                            });
                        });
                    }
                });
        });
}


var loader = `<div id="loading"  style="margin-left:500px;"></div>`
document.getElementById("data").innerHTML = loader;













//sidebar
// function openFunction() {
//     document.getElementById("menu").style.width = "300px";
//     document.getElementById("mainbox").style.marginLeft = "300px";
//     // document.getElementById("mainbox").innerHTML="Welcome";
// }

// function closeFunction() {
//     document.getElementById("menu").style.width = "0px";
//     document.getElementById("mainbox").style.marginLeft = "0px";
//     document.getElementById("mainbox").innerHTML = "&#9776;Open";
// }