createTableElements();
createButton();

// Skapar de nya tabell-elementen.
function createTableElements(){
    // Skapa ny kolumn.
    var colheader = document.createElement("th");
    colheader.appendChild(document.createTextNode("Summa"));
    document.getElementsByTagName("tr")[0].appendChild(colheader);
    var rows = document.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++){
        var cell = rows[i].insertCell(-1);
    }
    // skapa ny rad.
    var sumrow = document.getElementById("pricetable").insertRow();
    sumrow.id = "sumrow";
    for (var i = 0; i < 6; i++){
        sumrow.insertCell();
    }
}

// Skapar knapp inkl. eventlistener som anropar doCalculation() vid tryck.
function createButton(){
    var button = document.createElement("button");
    button.addEventListener("click", doCalculation);
    button.className = "btn btn-primary";
    button.innerHTML = "Beräkna pris";
    document.getElementById("content").appendChild(button);
}

// Beräknar summan av antalet varor, summan av priset hos varor i ett visst antal, samt
// det sammanlagda priset av alla varor i ett visst antal.
function doCalculation(){
    var rows = document.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    var articlesum = 0;
    var pricesum = 0;
    // För varje rad i tabellen, placera alla dess celler i en lista, extrahera
    // den tredje och fjärde cellen (pris och antal), multiplicera dem och lägg
    // resultatet i den femte cellen.
    for (var i = 0; i < rows.length - 1; i++){
        var cells = rows[i].getElementsByTagName("td");
        var number = parseInt(cells[4].getElementsByTagName("input")[0].value);
        var price = parseInt(cells[3].textContent);
        cells[5].innerHTML = number * price;
        articlesum += number;
        pricesum += number * price;
    }
    // Placera resultaten i fjärde och femte cellen i raden längst ned.
    document.getElementById("sumrow").getElementsByTagName("td")[4].innerHTML = articlesum;
    document.getElementById("sumrow").getElementsByTagName("td")[5].innerHTML = pricesum;
}