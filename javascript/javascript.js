//Verifica Tamanho do Canvas

function ajusteCanvas (){
    var largura = window.innerWidth
    var altura = window.innerHeight
    console.log(largura, altura)
}
ajusteCanvas()


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

//Toggle add e remover a classe responsiva
function menuResponsivo() {
    
    if (navbar.className === "menu"){
        navbar.className ='responsive'
        window.onscroll=function(){myFunction()}
    }else{
        navbar.className ='menu'
    }
}

console.log(navbar.className)
