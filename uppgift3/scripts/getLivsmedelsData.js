// Tabellen är från början gömd.
$("#search-table").hide();

// Funktion som anropas när användaren utför en sökning.
$("#sok-button").click(function(){
    // Tabellen töms.
    $("tbody").empty();
    // Mha ajax och jsonp konstrueras en namn-baserad sökning mot databasen webservice_livsmedel.
    $.ajax({
        url: "https://webservice.informatik.umu.se/webservice_livsmedel/getlivsmedel.php",
        dataType: "jsonp",
        data: {namn: $("input").val()},
        // Om sökningen lyckas exekveras följande:
        success: function (response) {
            var livsmedel = response.livsmedel;
            // Om sökningen inte ger några resultat, syns ingen tabell.
            if (livsmedel.length < 1 || $("input").val() === ""){
                $("#search-table").hide();
            // Om sökningen ger resultat, placeras varje matchande livsmedels attribut (namn, energi, kolhydrater, protein, fett - i rätt ordning) på en ny rad i tabellen.
            } else {
                $("#search-table").show();
                livsmedel.forEach(function (artikel) {
                    var row = $("tbody").append($("<tr></tr>"));
                    row.append($("<td></td>").text(artikel.namn));
                    row.append($("<td></td>").text(artikel.energi));
                    row.append($("<td></td>").text(artikel.kolhydrater));
                    row.append($("<td></td>").text(artikel.protein));
                    row.append($("<td></td>").text(artikel.fett));
                });
            }  
        }
    });
});