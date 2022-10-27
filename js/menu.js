const btnMenu = document.querySelector('#btn-menu')
const fondoEnlace = document.querySelector('.fondo-enlace')
const barraLateralIzquierda = document.querySelector('.barraLateralIzquierda')

btnMenu.addEventListener('click', function(e) {
    fondoEnlace.classList.toggle('active');
    barraLateralIzquierda.classList.toggle('active');
    e.preventDefault();
})

fondoEnlace.addEventListener('click', function(e) {
    fondoEnlace.classList.toggle('active');
    barraLateralIzquierda.classList.toggle('active');
    e.preventDefault();
})
