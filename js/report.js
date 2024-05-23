import { años,
        actores,
        imdb
} from "./components/webcomponents.js";

//export const filtrarAño{
 //   e.preventDefault()
  //  console.log("hi")
    //let nav =document.querySelector(".container")
    //nav.innerHTML= "";
    //nav.innerHTML=`<mis-años></mis-años>`
//}
customElements.define("mis-años" , años)
customElements.define("mis-actores" , actores)
customElements.define("mis-imdb" , imdb)


export const filtrarAño = async(e)=>{
    let nav = document.querySelector(".container");
    nav.innerHTML = ""
    nav.innerHTML = `<mis-años></mis-años>`
}

export const filtrarActor = async(e)=>{
    let nav = document.querySelector(".container");
    nav.innerHTML = ""
    nav.innerHTML = `<mis-actores></mis-actores>`
}


export const filtrarimdb = async(e)=>{
    let nav = document.querySelector(".container");
    nav.innerHTML = ""
    nav.innerHTML = `<mis-imdb></mis-imdb>`
}
