const burgerButton = document.querySelector('.burgermanu img')
const burgerManu = document.querySelector('.rightMenu')

const mountain = document.querySelector('.Mountain')
const house = document.querySelector('.House')

burgerButton.addEventListener('click', function(){
    burgerManu.classList.toggle("greenBurgerMenu")
})

mountain.addEventListener('click', function(){
    mountain.style.zIndex = 3;
    house.style.zIndex = 1;
    mountain.style.opacity = 1;
    house.style.opacity = 0.7;
})

house.addEventListener('click', function(){
    house.style.zIndex = 3;
    mountain.style.zIndex = 1;
    mountain.style.opacity = 0.7;
    house.style.opacity = 1;
})
