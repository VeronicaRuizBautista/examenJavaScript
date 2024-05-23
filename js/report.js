import { años,
        actores,
        imdb,
        titulo,
        imdbAndTitulo,
        urlyobject,
        all
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
customElements.define("mis-titulos" , titulo)
customElements.define("mis-imdbandtitulo" , imdbAndTitulo)
customElements.define("mis-urlyobject" , urlyobject)
customElements.define("mis-all" , all)


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

export const filtrartitulo = async(e)=>{
    let nav = document.querySelector(".container");
    nav.innerHTML = ""
    nav.innerHTML = `<mis-titulos></mis-titulos>`
}


export const filtrarimdbAndTitulo = async(e)=>{
    let nav = document.querySelector(".container");
    nav.innerHTML = ""
    nav.innerHTML = `<mis-imdbandtitulo></mis-imdbandtitulo>`
}


export const filtrarurlyobject = async(e)=>{
    let nav = document.querySelector(".container");
    nav.innerHTML = ""
    nav.innerHTML = `<mis-urlyobject></mis-urlyobject>`
}

export const filtrarall = async(e)=>{
    let nav = document.querySelector(".container");
    nav.innerHTML = ""
    nav.innerHTML = `<mis-all></mis-all>`
}

