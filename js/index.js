
// Burger

let burgerList = document.querySelectorAll('.burger_list')

function menuBurger() {
    burger_wrapper.classList.toggle('active_burger')
    burger_nav.classList.toggle('active_burger')
    document.body.classList.toggle('lock')
    burger_menu.classList.toggle('burger_active')
    header.classList.toggle('header_active')
}

burgerList.forEach(item => {
    item.addEventListener('click', () => {
        burger_wrapper.classList.remove('active_burger')
        burger_nav.classList.remove('active_burger')
        document.body.classList.remove('lock')
        burger_menu.classList.remove('burger_active')
        header.classList.remove('header_active')
    })
});

burger_button.addEventListener('click', menuBurger)

// Slider Table
let maxImg = 3
let count = 0
let moveSlide = 0
let stepSlide = 480
let buttonSlide = document.getElementsByClassName('progress')
let width = 1

if(screen.width < 500) stepSlide = 360;

let timerid = setInterval(rightSlide, 4000)
let barSlide = setInterval(frame, 40)

function controlBut() {
    let activeButton = document.querySelector('.act_prog')
    activeButton.classList.remove('act_prog')
    buttonSlide[count].classList.add('act_prog');
    buttonSlide[count].style.width = 1 + '%';
}

function frame() {
    if (width >= 100) {
        clearInterval
    } else {
        width++
        buttonSlide[count].style.width = width + '%';
    }
}

function rightSlide() {
    clearInterval(barSlide)
    width = 1
    clearInterval(timerid)
    timerid = setInterval(rightSlide, 4000)

    if (count >= maxImg - 1) {
        moveSlide = 0
        count = 0
        container_slide.style.right = `${moveSlide}px`;
        barSlide = setInterval(frame, 40)
        controlBut()
    }
    else if (count < maxImg) {
        moveSlide += stepSlide;
        count += 1
        container_slide.style.right = `${moveSlide}px`;
        barSlide = setInterval(frame, 40)
        controlBut()
    }
}

function leftslide() {
    clearInterval(barSlide)
    clearInterval(timerid)
    timerid = setInterval(rightSlide, 4000)
    width = 1

    if (count <= 0) {
        moveSlide = stepSlide * (maxImg - 1)
        count = maxImg - 1
        container_slide.style.right = `${moveSlide}px`;
        barSlide = setInterval(frame, 40)
        controlBut()
    }
    else if (count > 0) {
        moveSlide -= stepSlide
        count -= 1
        container_slide.style.right = `${moveSlide}px`;
        barSlide = setInterval(frame, 40)
        controlBut()
    }
}


button_right.addEventListener('click', rightSlide)

button_left.addEventListener('click', leftslide)





slidewrapper.addEventListener('mouseover', () => {
    clearInterval(timerid)
    clearInterval(barSlide)
})

slidewrapper.addEventListener('mouseout', () => {
    barSlide = setInterval(frame, 40)
    timerid = setInterval(rightSlide, 4000 - (4000 * (width / 100)))
})

let x1 = null
let y1 = null


function handleTouchStart(event) {
const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientX;
}
function handleTouchMove(event) {

    if (!x1 || !y1) return false;

    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientX;
    let xDiff = x2 - x1
    let yDiff = y2 - y1

    if (xDiff > 0)  {
       leftslide()
    } else {
        rightSlide()
    }

    x1 = null
    y1 = null
}


slidewrapper.addEventListener('touchstart', handleTouchStart)
slidewrapper.addEventListener('touchmove', handleTouchMove)
