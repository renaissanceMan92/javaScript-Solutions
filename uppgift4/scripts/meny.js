$(document).ready(generateMenu);
// Anropas när HTML-dokumentet laddat färdigt. Dess syfte: skapa en navigeringsmeny för recepten.
function generateMenu() {
     // Skapa menyn i form av ett ul-element inuti klassen contentarea.
    $('.contentarea').last().append('<ul>');
    // Hämta recepttitlarna från varje h4-element med hjälp av map(). Placera i en lista kallad recipes.
    var recipes = $('#primarycontent').find('h4').map(function () {
        return $(this);
    });
    // Loopa genom listan baserat på dess längd. Detta gör att menyn anpassas till mängden recept vid varje laddning.
    for (var index = 0; index < recipes.length; index++){
        // Ge varje recept i listan ett unikt id baserat på dess index.
        recipes[index].attr('id', index);
        // För varje recept: skapa och placera ett li-element i ul-elementet; skapa ett a-element med en länk som leder till det motsvarande receptet i #primarycontent; placera a-elementet i li-elementet.
        $('ul').append($('<li>').append($('<a>', {href: "index.html#" + recipes[index].attr('id')}).text(recipes[index].text())));
    }
}