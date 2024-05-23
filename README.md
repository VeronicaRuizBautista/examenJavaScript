


//document.addEventListener("DOMContentLoaded", function(){
if (!localStorage.getItem('esPrimeraVez')){
    localStorage.clear();
    localStorage.setItem('esPrimeraVez', 'true')
    }
    })
    
    function botonMenu() {
    var menus = document.querySelectorAll('nav[id="menu"]');
    menus.forEach(function(menu) {
    menu.classList.toggle("visible");
    });
    }
    
    function incrementar(id) {
    let contador = parseInt(document.getElementById(id).innerText);
    contador++;
    document.getElementById(id).innerText = contador;
    localStorage.setItem('contador', contador);
    }
    
    window.restar =restar
    function contadorCero() {
    document.getElementById('contador').innerText = 0;
    localStorage.setItem('contador', 0);
    }
    function modificarContador(num) {
    let cont = parseInt(document.getElementById('contador').innerText);
    contador = cont - num;
    document.getElementById('contador').innerText = contador;
    localStorage.setItem('contador', contador);
    }
    window.modificarContador = modificarContador
    
    window.onload = function() {
    let contadorGuardado = localStorage.getItem('contador');
    if (contadorGuardado !== null) {
    document.getElementById('contador').innerText = contadorGuardado;
    }
    };
    
    [//window.itemsAgregados](https://window.itemsagregados/) = []
    function agregar(img, description, value, id) {
    window.itemsAgregados = JSON.parse(localStorage.getItem('itemsAgregados')) || [];
    const existente = itemsAgregados.find(item => item.description == description);
    let cantidad=1
    if (existente) {
    existente.cantidad += 1;
    } else {
    const item= {img, description, value, id, cantidad}
    itemsAgregados.push(item)
    console.log("item agregado", itemsAgregados)
    localStorage.setItem('itemsAgregados', JSON.stringify(itemsAgregados));
    }
    incrementar('contador');
    localStorage.setItem('itemsAgregados', JSON.stringify(itemsAgregados))
    }
    
    //
    
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationRockets())
    
    let rockets = document.querySelector("#rockets")
    rockets.addEventListener("click", async(e)=>{
    e.preventDefault()
    paginacion.innerHTML = ""
    paginacion.append(await paginationRockets())
    })
    
    //



    et opcion = document.querySelectorAll("nav.categorias a")
let report_details = document.querySelector(".report_details")
let ilera_final = document.querySelector(".ilera_final")
let todosLosProductos = document.querySelector(".tituloh1")
opcion.forEach (val =>{
val.addEventListener("click", (e)=>{
e.preventDefault()
opcion.forEach(link => link.classList.remove('report_active'))
e.target.classList.add("report_active")

```
    if (e.target.innerText == "Todos los productos"){
        report_details.innerHTML= `
        <toda-ropa class="ropita"></toda-ropa>
        `
        todosLosProductos.innerHTML = `
        <h1 class="tituloPrincipal">Todos los Productos</h1>
        `
        ilera_final.innerHTML = "";
    }
})

```

})

const defaultOption = document.querySelector("nav.categorias a.report_active");
if (defaultOption) {
defaultOption.click();
}
customElements.define("toda-ropa" , todos)

//

let btn = document.querySelectorAll("button")
let report__menu = document.querySelectorAll(".report__menu button")
let report__details = document.querySelector(".report__details")
btn.forEach(val =>{
val.addEventListener("click", (e)=>{
for(let val of report__menu) val.classList.remove('report__active');
e.target.classList.add("report__active")

```
    if(e.target.innerHTML=="clients"){
        report__details.innerHTML = /*html*/`
            <my-details logic="client_6" text="6. Devuelve el nombre de los clientes y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante."></my-details>

```

let [clients] = report__menu
clients.click();





export class todos extends HTMLElement{
    constructor(){
    super()
    this.attachShadow({mode: "open"});
    }
    connectedCallback(){
    this.ropa_toda();
    }
    async ropa_toda(){
    const bdata = await fetch("http://localhost:5621/hi")
    const data = await bdata.json();
    this.renderData(data);
    }
    renderData(data){
    const style =              `<link rel="stylesheet" href="../css/ropa.css">             <script src="./js/main.js"></script>`;
    let content = `${style}`;
}

renderData(data){
    const style = `
    <link rel="stylesheet" href="../css/ropa.css">
    <script src="./js/main.js"></script>
    `;

    let content = `${style}`;
    data.forEach(val =>{
        this.total += val.value * val.cantidad;
    })
    content += `
    `
    this.shadowRoot.innerHTML = content;

    this.shadowRoot.querySelector('.vaciarCarrito').addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.setItem('itemsAgregados', JSON.stringify([]));
        this.total = 0;
        let report_details = document.querySelector(".report_details")
        report_details.innerHTML= "El carrito esta vacio :(";
    });


export const getAllCapsules = async (page,limit)=>{
let config = {
headers:{
"content-type": "application/json"
},
method: "POST",
body: JSON.stringify({
"options": {
page,
limit
}
})
}
let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config)
let data = await res.json();
return data;
}

export const getAllCapsulesId = async(id) =>{
let res = await fetch(`https://api.spacexdata.com/v4/capsules/${id}`)
let data = await res.json()
console.log(data)
return data;


# information

//capsule
export const informationCapsule = async(id, info1, info2) =>{
let description__item = document.querySelector("#description__item")
let div = document.createElement("div")
const style = `<link rel="stylesheet" href="../css/report.css">`;
let content = `${style}`;
content +=    `<div class="containerComponente">         <div class="subtittle">             <h3>Id: ${id}</h3>         </div>         <p> <span>Type: </span> ${info1}</p>         <p><span>Last Update: </span> ${info2}</p>     </div>`
div.innerHTML =content
description__item.append(div)
}

//capsule
import {
    getAllCapsulesId,
    getAllCapsules
    } from "../modules/capsule.js";
    import {
    informationCapsule,
    information2Capsule
    } from "./information.js";
    
    const getCapsulesId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCapsules(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
    val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    
    ```
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = "";
    let section__information__1 = document.querySelector(".section__information__1")
    section__information__1.innerHTML = ""
    let section__information__2 = document.querySelector(".section__information__2")
    section__information__2.innerHTML = ""
    let section__information__3 = document.querySelector(".section__information__3")
    section__information__3.innerHTML = ""
    
    let Capsule = await getAllCapsulesId(e.target.id)
    
    await nameRockets("Capsule")
    await imagen("<https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEbt7vhhz3j_19auW2HorH1zwfVpfmaQx2IjoKDlbWf7kLqfVSjOpwwf_OWyzXNCSnJKo&usqp=CAU>")
    await informationCapsule(Capsule.id, Capsule.type, Capsule.last_update)
    await information2Capsule(Capsule.serial, Capsule.water_landings, Capsule.status)
    
    ```
    
    }
    
    export const paginationCapsules = async(page=1, limit=10)=>{
    
    ```
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCapsules(page, limit)
    
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")
    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getCapsulesId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCapsulesId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getCapsulesId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
    
    ```
    
    }


    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = "";
    let section__information__1 = document.querySelector(".section__information__1")
    section__information__1.innerHTML = ""
    let section__information__2 = document.querySelector(".section__information__2")
    section__information__2.innerHTML = ""
    let section__information__3 = document.querySelector(".section__information__3")
    section__information__3.innerHTML = ""

    let Capsule = await getAllCapsulesId(e.target.id)

    await nameRockets("Capsule")
    await imagen("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEbt7vhhz3j_19auW2HorH1zwfVpfmaQx2IjoKDlbWf7kLqfVSjOpwwf_OWyzXNCSnJKo&usqp=CAU")
    await informationCapsule(Capsule.id, Capsule.type, Capsule.last_update)
    await information2Capsule(Capsule.serial, Capsule.water_landings, Capsule.status)
}

export const paginationCapsules = async(page=1, limit=10)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCapsules(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getCapsulesId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCapsulesId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getCapsulesId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}