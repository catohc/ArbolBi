import Contact from "../models/Contact.js"
import { bst } from "./dependencies.js"

let btn = document.getElementById("agenda-btn")

btn.addEventListener("click",()=>{
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let phoneNumber = document.getElementById("phoneNumber").value

    let contacto = new Contact(firstName, lastName, phoneNumber)
    let data = bst.add(contacto)
    console.log(data);
    if (data)
        alert("Registro exitoso")
    else
        alert("Falló el registro")
})