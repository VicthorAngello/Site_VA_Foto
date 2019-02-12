// //Verifica Tamanho do Canvas

// function ajusteCanvas (){
//     var largura = window.innerWidth
//     var altura = window.innerHeight
//     console.log(largura, altura)
// }
// ajusteCanvas()

//Toggle add e remover a classe responsiva

class Menu{
    constructor(){
        this.navbar = document.getElementById('myMenu')
    }
    respondivo(){
        if(this.navbar.className === 'menu'){
            navbar.className = 'responsive'
        } else{
            navbar.className = 'menu'
        }
    }
}
let menu = new Menu(navbar)

// Função Menu Sticky
window.onscroll=function(){myFunction()}

var navbar = document.getElementById('myMenu')
var sticky = navbar.offsetTop

function myFunction(){
    if(window.pageYOffset>=sticky){
        navbar.classList.add('sticky')
    }else{
        navbar.classList.remove('sticky')
    }
}