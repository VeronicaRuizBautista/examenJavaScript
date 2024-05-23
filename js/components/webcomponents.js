async function  data(){
    const bdata = await fetch("https://search.imdbot.workers.dev/?q=Niram") 
    const data = await bdata.json();
    return data
}

export async  function buscarAño(año){
    console.log("hii")
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
                <p>Titulo: ${val["#TITLE"]}</p>
                <p>Year: ${val["#YEAR"]}</p>
                <p>Actors: ${val["#ACTORS"]}</p>
                <img src="${val["#IMG_POSTER"]}" alt="">
            </div>
            `
            }
        })
        let nav =document.querySelector(".container")
        nav.innerHTML=""
        nav.innerHTML = content
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
        <script type="module" src="../js/main.js" async></script>
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
                        <li><a href="#" onclick="buscarAño(${val["#YEAR"]})" class="años">${val["#YEAR"]}</a></li>
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

export  class titulo extends HTMLElement{
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
            <h2>títulos de todas las películas</h2>
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
                        <li><a href="#" onclick="buscarAño('${val["#TITLE"]}') class="años">${val["#TITLE"]}</a></li>
                    </ul>
                </div>
            </div>
            `
        })
        let nav =document.querySelector(".container")
        nav.innerHTML = content

    }
    
}

export  class imdbAndTitulo extends HTMLElement{
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
            <h2>Consulta los identificadores y títulos de todas las películas.</h2>
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
                    <li><a href="#" onclick="buscarAño('${val["#imdbAndTitulo"]}') class="años">${val["#RANK"]} y ${val["#TITLE"]}</a></li>
                    </ul>
                </div>
            </div>
            `
        })
        let nav =document.querySelector(".container")
        nav.innerHTML = content

    }
    
}

export  class urlyobject extends HTMLElement{
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
            <h2>URL completas y los tipos de objetos</h2>
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
                    <li><a href="#" onclick="buscarAño('${val["#IMDB_URL"]}') class="años">${val["#IMDB_URL"]} y ${val["#AKA"]}</a></li>
                    </ul>
                </div>
            </div>
            `
        })
        let nav =document.querySelector(".container")
        nav.innerHTML = content

    }
    
}

export  class all extends HTMLElement{
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
            <h2>URL completas y los tipos de objetos</h2>
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
                    <li><a href="#" onclick="buscarAño('${val["#IMDB_URL"]}') class="años">${val["#TITLE"]}, ${val["#YEAR"]} y ${val["#IMDB_IV"]} </a></li>
                    </ul>
                </div>
            </div>
            `
        })
        let nav =document.querySelector(".container")
        nav.innerHTML = content

    }
    
}


