//do każdego z osobna dajemy consol loga aby czytało daną czynność, a nie cały kod z js.
function wyslij() { 
const imie = document.getElementById("imie").value
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

//nie krotsze od 3 znakow imie
function walidacja() {
const imie = document.getElementById("imie").value
if (imie.length < 3) {
    alert("ZA KRÓTKIE IMIE")
}
const nazwisko = document.getElementById("sname").value
if(nazwisko.length < 5){
    alert("ZA KRÓTKIE NAZWISKO")
}
}

function email(val){
    let xd = val.split('')
    console.log(xd)
    const isEmail = xd.some(item => item === "@")
    console.log(isEmail)
}

function telefon() {
    const tel = document.getElementById("tel").value
    const isNum = Number()
}



function pizza(pizza){
    const wybranaPizza = pizza
    console.log(wybranaPizza)
}
