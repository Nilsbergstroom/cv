/*Funktion till meny*/
const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navBarLinks = document.getElementsByClassName("navbar-links")[0]

toggleButton.addEventListener("click", () =>{
    navBarLinks.classList.toggle("active")
} )

/*Visste-du-att-fakta*/
var fakta = [
    "De ägg du äter till frukost kommer förmodligen från Äggpackeriet som finns i byn! Där packas ägg från Pelle och Lisa AB, Norrlandsägg AB och Yttertavleägg! Äggceptionellt!", 
    
    "Höjdhopperskan Erika Kinsey är född och uppvuxen i guldbyn - Nälden! Hennes personbästa är 1.97cm vilket är ca 192.5 cm högre än ett normalstort ägg!", 
    "Sveriges främsta skådespelare, Adolf Jahr, växte upp i Nälden! Han spelade bland annat läraren som Alice Babs sjöng för i Swing it, magistern!", 
    
    "Med ett startkapital på 15kr och en verktygslåda grundade Carl Theodor Hallström år 1914 företaget Hallströms som än idag har sitt säte i Nälden! Företaget är ett av Sveriges största inom ventilation och det faktum att Umeå Universitet spottar ur sig kompetenta systemvetare är förmodligen en direkt konsekvens av den otroliga luftkvalitet som Hallströms Verkstäder förser lokalerna med!",
    
    "Ett ickepandemi-år så är den Första Lördagen i Maj varje år en helig dag för alla Näldenbor! Ty det är nämligen dagen som Näldens Dansgala går av stapeln! Omkring 2000 dansglada personer trängs och trivs då inne i Näldens ishall!", 
    
    "Under 1900-talet var Näldens ullspinneri en av de allra största leverantörerna av vadmalskläder i Sverige! Enligt hörsägen tillverkades där vadmalsbyxor som kunde beställas med s.k Gällivarehäng. Anledningen var att de som körde timmer i med häst skulle kunna fylla byxorna med hö för att hålla värmen på kuskbocken. ",
    
    "Erik Broms flerfaldig VÄRLDSMÄSTARE i fyrspannskörning med häst bor i Nälden!",
    
    "Näldens ishall är även ett Bed and Breakfast! Det är enbart Näldens Ishall och GLOBEN som är kombinerad BnB och hockey-arena. Källa: Okänd.",
    
    "Nälden har en alldeles egen pizzeria - LA CITA. Där serveras de bästa pizzorna norr om Neapel.",
    
    
    ]


/*Visste du att-funktion*/
function funfact(){  
    var randomfact = Math.floor(Math.random() * (fakta.length));
    document.getElementById("factdisplay").innerHTML = fakta[randomfact];
   }


/*Bildspel-funktion på Index.html*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

/*Funktion för topplistan på topplista.html*/
function currentSlide(n) {
  showSlides(slideIndex = n);
}



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var bild = document.getElementsByClassName("bild");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < bild.length; i++) {
      bild[i].className = bild[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  bild[slideIndex-1].className += " active";

}


/*Kontakta oss - Funktion*/

function validate(){
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 3){
    text = "Ange ett giltigt namn, minst 3 tecken";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 5){
    text = "Ange ett giltigt ämne, minst 5 tecken";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length <= 5){
    text = "Ange ett giltigt telefonnummer, minst 5 tecken";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Ange en giltig email-adress";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 10){
    text = "Ditt meddelande är lite kort. Skriv minst 15 tecken - För Näldens skull";
    error_message.innerHTML = text;
    return false;
  }
  alert("Tack för ditt meddelande!");
  return true;
}



