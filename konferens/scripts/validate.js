// OBS: följande kod fungerar när method ändras från post till get inuti <form> i index-html.

// eventlistener som anropar validateForm() när händelsen submit sker.
var regForm = document.getElementById("registration_form").addEventListener("submit", validateForm);

// Funktion för att validera användarens input. Funkionen avbryter submit-eventet genom preventDefault() om användarens
// input ej uppfyller valideringskraven.
function validateForm(e){
    
    // Deklaration av variabler för användarens kontaktuppgifter samt email-validering.
    var firstname = document.getElementById("field_firstname").value;
    var lastname = document.getElementById("field_lastname").value; // OBS här skrev jag fel i min första inlämning!
    var email = document.getElementById("field_email").value;
    var org = document.getElementById("field_organisation").value;
    var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    
    // if-sats som validerar att användarens kontaktuppgifter ej är blanka.
    if (firstname.length === 0 || lastname.length === 0 || email.length === 0 || org.length === 0){
        alert("Du måste fylla i alla kontaktuppgifter!");
        e.preventDefault();
    }
    // if-sats som validerar att email-adressen är i korrekt format.
    if (pattern.test(email) === false){
        alert("Email-adressen har inte rätt format!");
        e.preventDefault();
    }
    // if-sats som validerar att meddelandet inte överstiger 200 tecken.
    if (document.getElementById("field_message").value.length > 200){
        alert("Ditt meddelande får vara högst 200 tecken!");
        e.preventDefault();
    }
    // if-satser som validerar att titel skrivs in i de fall då föreläsning eller seminarium valts.
    if (document.getElementById("pres_type_1").checked === true || document.getElementById("pres_type_2").checked === true){
        if (document.getElementById("field_pres_title").value.length === 0){
            alert("Du måste skriva titel på föreläsning/seminarium!");
            e.preventDefault();
        }
    }
}