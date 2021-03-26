//do każdego z osobna dajemy consol loga aby czytało daną czynność, a nie cały kod z js.
function wyslij() { 
const imie = document.getElementById("name").value
const nazwisko = document.getElementById("sname").value
    console.log(imie + ' ' + nazwisko)
const mail = document.getElementById("mail").value
    console.log(mail)
const tel = document.getElementById("tel").value
    console.log(tel)
const info = document.getElementById("info").value
    console.log(info)
}

function walidacja() { 
const imie = document.getElementById("name").value
    console.log(imie)
const nazwisko = document.getElementById("sname").value
    console.log(nazwisko)
const mail = document.getElementById("mail").value
    console.log(mail)
const tel = document.getElementById("tel").value
    console.log(tel)
const info = document.getElementById("info").value
    console.log(info)
}