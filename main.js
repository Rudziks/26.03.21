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


function pobieranie() {
    console.log("-----------------")
    const imie = document.getElementById("imie").value
    const nazwisko = document.getElementById("nazwisko").value
    console.log('Imie/Nazwisko:' + " " + imie + ' ' + nazwisko)
    const email = document.getElementById("email").value
    console.log("Email:" + "" + email)
    const tel = document.getElementById("tel").value
    console.log("Telefon:" + "" + tel)
    const mess = document.getElementById("mess").value
    console.log("Wiadomość:" + "" + mess)
    console.log('-----------------')
}