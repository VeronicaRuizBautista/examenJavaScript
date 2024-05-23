async function  data(){
    const bdata = await fetch("https://search.imdbot.workers.dev/?q=Niram") 
    const data = await bdata.json();
    return data
}


export  class años extends HTMLElement{
    constructor(){
    super()
    this.attachShadow({mode: "open"});
    }
    connectedCallback(){
    this.anos();
    }
    async anos(){
        const bdata = await fetch("https://search.imdbot.workers.dev/?q=Niram") 
        const data = await bdata.json();
        this.renderData(data);
    }
    renderData(data){
        const style=`<link rel="stylesheet" href="css/components.css">
        <script type="module" src="webcomponents.js" async></script>
        `
        let content = `${style}`
        content +=`
        <div class="consulta">
            <h2>Selecione el año por el que desea filtrar</h2>
        </div>
        `
        let dic=data.description
        console.log("f", dic)
        dic.forEach  ( val =>  {
            //console.log("X",val["#ACTORS"])
            content += `
            <div class="contenido">
                <div class="opc">
                    <ul>
                        <li><a href="#" onclick="buscarAño('${val["#YEAR"]}') class="años">${val["#YEAR"]}</a></li>
                    </ul>
                </div>
            </div>
            `
        })
        let nav =document.querySelector(".container")
        nav.innerHTML = content

    }
    
}

export  class actores extends HTMLElement{
    constructor(){
    super()
    this.attachShadow({mode: "open"});
    }
    connectedCallback(){
    this.anos();
    }
    async anos(){
        const bdata = await fetch("https://search.imdbot.workers.dev/?q=Niram") 
        const data = await bdata.json();
        this.renderData(data);
    }
    renderData(data){
        const style=`<link rel="stylesheet" href="css/components.css">
        <script type="module" src="webcomponents.js" async></script>
        `
        let content = `${style}`
        content +=`
        <div class="consulta">
            <h2>Selecione el actor por el que desea filtrar</h2>
        </div>
        `
        let dic=data.description
        console.log("f", dic)
        dic.forEach  ( val =>  {
            //console.log("X",val["#ACTORS"])
            content += `
            <div class="contenido">
                <div class="opc">
                    <ul>
                        <li><a href="#" onclick="buscarAño('${val["#ACTORS"]}') class="años">${val["#ACTORS"]}</a></li>
                    </ul>
                </div>
            </div>
            `
        })
        let nav =document.querySelector(".container")
        nav.innerHTML = content

    }
    
}
export  class imdb extends HTMLElement{
    constructor(){
    super()
    this.attachShadow({mode: "open"});
    }
    connectedCallback(){
    this.anos();
    }
    async anos(){
        const bdata = await fetch("https://search.imdbot.workers.dev/?q=Niram") 
        const data = await bdata.json();
        this.renderData(data);
    }
    renderData(data){
        const style=`<link rel="stylesheet" href="css/components.css">
        <script type="module" src="webcomponents.js" async></script>
        `
        let content = `${style}`
        content +=`
        <div class="consulta">
            <h2>Selecione el IMDb por el que desea filtrar</h2>
        </div>
        `
        let dic=data.description
        console.log("f", dic)
        dic.forEach  ( val =>  {
            //console.log("X",val["#ACTORS"])
            content += `
            <div class="contenido">
                <div class="opc">
                    <ul>
                        <li><a href="#" onclick="buscarAño('${val["#IMDB_ID"]}') class="años">${val["#IMDB_ID"]}</a></li>
                    </ul>
                </div>
            </div>
            `
        })
        let nav =document.querySelector(".container")
        nav.innerHTML = content

    }
    
}


export async  function buscarAño(año){
    const bdata = await fetch("https://search.imdbot.workers.dev/?q=Niram") 
    const data = await bdata.json();
    let dic=data.description
        console.log("f", dic)
        dic.forEach(val =>{
            if (año == val["#YEAR"]){
            const style=`<link rel="stylesheet" href="css/components.css">`
            let content = `${style}`
            content +=`
            <div class="consulta">
                <h2>pelicula</h2>
                <p>titulo: ${val["#TITLE"]}</p>
                <p>titulo: ${val["#YEAR"]}</p>
                <p>titulo: ${val["#ACTORS"]}</p>
                <img src="${val["#IMG_POSTER"]}" alt="">
            </div>
            `
            }
        })
}