gsap.to(".heading-one", {text: "Maple", duration: 2, ease: "power1.out", delay: .5})
gsap.to(".heading-two", {text: "Pink Party", duration: 2, ease: "power1.out", delay: 1})


particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 10,
            "density": {
                "enable": true,
                "value_area": 1800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "image",
            "stroke": {
                "width": 3,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "../pictures/logo.jpg",
                "width": 25,
                "height": 45
            }
        },
        "opacity": {
            "value": 0.7,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 10,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 20,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 50,
            "color": "#ffffff",
            "opacity": 0.6,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 300,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 150,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 200,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.2
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
})

window.onscroll = function() {scrollFunction()};

const btnUp = document.querySelector('#btn-up');
const btnHome = document.querySelector('#btn-home');

btnUp.addEventListener('click', topFunction);

function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        btnUp.style.display = "block";
        btnHome.style.display = "block";

        gsap.to(".heading-three", {text: "Midnight", duration: 2, ease: "power1.in", delay: .5})
    } 
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        gsap.to(".heading-four", {text: "Rainbow", duration: 2, ease: "power1.in", delay: .5})
    }  
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        gsap.to(".heading-five", {text: "Midday", duration: 2, ease: "power1.in", delay: .5})
    }
    if (document.body.scrollTop > 1350 || document.documentElement.scrollTop > 1350) {
        gsap.to(".heading-six", {text: "Strawberry", duration: 2, ease: "power1.in", delay: .5})
    }
    else {
        btnUp.style.display = "none";
        btnHome.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}