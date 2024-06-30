

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    
    if (scrollPosition > 100) {
        
        document.body.style.backgroundColor = 'lightgray'; // Azul
    } else {
        
        document.body.style.backgroundColor = 'white'; // Vermelho
    }
});
function site(){
    location.href = 'https://lucaszy0.github.io/projetos/nike/'
}
function codigo(){
    location.href = 'https://github.com/lucaszy0/projetos/tree/main/nike'
}
function site2(){
    location.href = 'https://lucaszy0.github.io/projetos/Hollow-knight/'
}
function codigo2(){
    location.href = 'https://github.com/lucaszy0/projetos/tree/main/Hollow-knight'
}