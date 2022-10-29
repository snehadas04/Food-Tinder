let menubar = document.querySelector('#menu-bar');
let menu = document.querySelector('.menu');

menubar.onclick = () => {

    menubar.classList.toggle('fa-times');
    menu.classList.toggle('active');

}

window.onscroll = () => {

    menubar.classList.remove('fa-times');
    menu.classList.remove('active');

    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }

}

function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 3000);
}

window.onload = fadeOut();