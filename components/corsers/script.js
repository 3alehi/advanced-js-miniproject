let template = document.createElement("template")

template.innerHTML =`
<link rel="stylesheet" href="corsers/course.css">
<div class="cors">
    <div class="img">
    <img src="" >
    </div>
    <div class="inffo">
    <div class="name">
    <h1></h1>
        </div>
        <div class="info">
        <p>Student:<slot name="student"></slot></p>
        <p>teacher: <slot name="tecer"></slot></p>
        </div>
    <div class="btn">
    <button class="info1">info</button>
    <button class="toggle">toogle</button>
    </div>
    
    </div>
    
    </div>
`

class corsess extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
        this.shadowRoot.append(template.content.cloneNode(true))
    }
connectedCallback(){
    let namecoruser = this.shadowRoot.querySelector('.name h1') .innerHTML= this.getAttribute('title-c')
let img = this.shadowRoot.querySelector('.img img').setAttribute('src' , this.getAttribute("img"))
let btn  = this.shadowRoot.querySelector('.btn .info1')
btn.addEventListener('click' ,()=>{
    this.remove()
})

}

}
export{corsess}
