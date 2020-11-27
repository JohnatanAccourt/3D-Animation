const container = document.querySelector(".container");
const intireLogo = document.querySelector(".logoParts");


const blueMid = document.getElementById("1");
const blueStrong = document.getElementById("2");
const yellow = document.getElementById("3");
const green = document.getElementById("4");
const white = document.getElementById("5");

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerWidth / 2 - e.pageY) / 25;
    intireLogo.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    
    blueMid.style.transform = 'translateZ(60px)';
    blueStrong.style.transform = 'translateZ(200px)';
    yellow.style.transform = 'translateZ(130px)';
    green.style.transform = 'translateZ(30px)';
    white.style.transform = 'translateZ(100px)';
})

container.addEventListener('mouseenter', (e) => {
    intireLogo.style.transition = '0s';
})

container.addEventListener('mouseleave', (e) => {
    intireLogo.style.transition = '0.5s';
    intireLogo.style.transform = 'rotateY(0deg) rotateX(0deg)';

    blueMid.style.transform = 'translateZ(0px)';
    blueStrong.style.transform = 'translateZ(0px)';
    yellow.style.transform = 'translateZ(0px)';
    green.style.transform = 'translateZ(0px)';
    white.style.transform = 'translateZ(0px)';
})