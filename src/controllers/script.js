import Contact from "../models/Students.js"
import BST from "../models/tree/BST.js"
import { bst } from "./dependencies.js"

let btn = document.getElementById("agenda-btn")

btn.addEventListener("click",()=>{
    let firstName = document.getElementById("firstName").value
    let matricula = document.getElementById("lastName").value
    let old = document.getElementById("phoneNumber").value

    let student = new Contact(firstName, matricula, old)
    let data = bst.add(student)
    console.log(data);
    if (data)
        alert("Registro exitoso")
    else
        alert("Falló el registro")
})
let btns = document.getElementById("Bagenda-btn");
btns.addEventListener("click",()=>{
    let smatricula = document.getElementById("lastName").value
    let sdata = bst.search(smatricula);
    console.log(sdata)
    if (sdata) {
        alert("yei")
    }
    else alert("au")
});

tree.preOrderTraversal((value) => {
    alert(`Matricula: ${value.matricula}, Nombre: ${value.nombre}`);
});

let btnOrder = document.getElementById("WanderTree")
btnOrder.addEventListener("click",()=>{
let tree = new BST();
tree.preOrderTraversal((value =>{
    alert(`Matricula: ${value.matricula}, Nombre: ${value.nombre}`);
}));
});