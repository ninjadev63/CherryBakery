window.onresize = function () {
    location.reload();
};

const bodyHeight = document.querySelector('body');
const particles = document.querySelector('#particles-js');

function setHeight() {
    let height = bodyHeight.scrollHeight;
        particles.style.height = `${height}` + 'px';
}
setHeight();

AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    

    
    offset: 100,
    delay: 0.5,
    duration: 2000,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',

});

let colors = ['#FCAC0C'];
gsap.to('#btn-table', {duration: 5, repeat: -1, yoyo: true, backgroundColor: function(i) {
    return colors[i%1]
}})

gsap.timeline({defaults: {duration: 0.8, opacity: 0, scale: 0.5}})
    .from(".pic-one", {x: 100})
    .from(".pic-two", {x: -150, y: 150})
    .from(".pic-three", {x: -150, y: -150})


const wrapper = document.querySelector('.assortment-wrapper');
const prev = document.querySelector('#prev-btn');
const next = document.querySelector('#next-btn');
const categories = document.querySelectorAll('.category');
const dots = document.querySelectorAll('.dot');

function showCategory() {
    if (document.documentElement.clientWidth > 900) {
        dots[1].classList.add('active');
        dots[2].classList.add('active');

        let position = 0;
        let categoriesToShow = 3;
        let categoriesToScroll = 1;

        const categoriesCount = categories.length;
        let categoryWidth = wrapper.clientWidth / categoriesToShow;
        let movePosition = categoriesToScroll * categoryWidth;

        categories.forEach(item => {
            item.style.minWidth = `${categoryWidth}px`;
            item.style.maxWidth = `${categoryWidth}px`;
        })

        prev.addEventListener('click', showPrevCategory);
        next.addEventListener('click', showNextCategory);

    function showNextCategory() {
        let categoryLeft = categoriesCount - (Math.abs(position) + categoriesToShow * categoryWidth) / categoryWidth;

        position -= categoryLeft >= categoriesToScroll ? movePosition : categoryLeft * categoryWidth;

        setPosition();
        showNextNumOfCategory();
    };

    function showPrevCategory() {
        let categoryLeft = Math.abs(position) / categoryWidth;

        position += categoryLeft >= categoriesToScroll ? movePosition : categoryLeft * categoryWidth;

        setPosition();
        showPrevNumOfCategory();
    };

    function setPosition() {
        wrapper.style.transform = `translateX(${position}px)`;
        wrapper.style.transition = `transform 1s`;
    };

    let i = 2;

    function showNextNumOfCategory() {
        i++;
        if (i === 2 || i === 3 || i === 4 || i === 5) dots[i].classList.add('active');
        if (i >= 6) i = 5;
    };

    function showPrevNumOfCategory() {
        i--;
        if (i === 6) dots[i-1].classList.remove('active');
        if (i === 2 || i === 3 || i === 4 || i === 5) dots[i+1].classList.remove('active');
        if (i <= 1) i = 2;
    };
    };

    if (document.documentElement.clientWidth <= 900 && document.documentElement.clientWidth > 600) {
        dots[1].classList.add('active');

        let position = 0;
        let categoriesToShow = 2;
        let categoriesToScroll = 1;

        const categoriesCount = categories.length;
        let categoryWidth = wrapper.clientWidth / categoriesToShow;
        let movePosition = categoriesToScroll * categoryWidth;

        categories.forEach(item => {
            item.style.minWidth = `${categoryWidth}px`;
            item.style.maxWidth = `${categoryWidth}px`;
        })

        prev.addEventListener('click', showPrevCategory);
        next.addEventListener('click', showNextCategory);

    function showNextCategory() {
        let categoryLeft = categoriesCount - (Math.abs(position) + categoriesToShow * categoryWidth) / categoryWidth;

        position -= categoryLeft >= categoriesToScroll ? movePosition : categoryLeft * categoryWidth;

        setPosition();
        showNextNumOfCategory();
    };

    function showPrevCategory() {
        let categoryLeft = Math.abs(position) / categoryWidth;

        position += categoryLeft >= categoriesToScroll ? movePosition : categoryLeft * categoryWidth;

        setPosition();
        showPrevNumOfCategory();
    };

    function setPosition() {
        wrapper.style.transform = `translateX(${position}px)`;
        wrapper.style.transition = `transform 1s`;
    };

    let i = 1;

    function showNextNumOfCategory() {
        i++;
        if (i === 1 || i === 2 || i === 3 || i === 4 || i === 5) dots[i].classList.add('active');
        if (i >= 6) i = 5;
    };

    function showPrevNumOfCategory() {
        i--;
        if (i === 6) dots[i-1].classList.remove('active');
        if (i === 1 || i === 2 || i === 3 || i === 4 || i === 5) dots[i+1].classList.remove('active');
        if (i <= 0) i = 1;
    };
    };

    if (document.documentElement.clientWidth <= 600) {

        let position = 0;
        let categoriesToShow = 1;
        let categoriesToScroll = 1;

        const categoriesCount = categories.length;
        let categoryWidth = wrapper.clientWidth / categoriesToShow;
        let movePosition = categoriesToScroll * categoryWidth;

        categories.forEach(item => {
            item.style.minWidth = `${categoryWidth}px`;
            item.style.maxWidth = `${categoryWidth}px`;
        })

        prev.addEventListener('click', showPrevCategory);
        next.addEventListener('click', showNextCategory);

    function showNextCategory() {
        let categoryLeft = categoriesCount - (Math.abs(position) + categoriesToShow * categoryWidth) / categoryWidth;

        position -= categoryLeft >= categoriesToScroll ? movePosition : categoryLeft * categoryWidth;

        setPosition();
        showNextNumOfCategory();
    };

    function showPrevCategory() {
        let categoryLeft = Math.abs(position) / categoryWidth;

        position += categoryLeft >= categoriesToScroll ? movePosition : categoryLeft * categoryWidth;

        setPosition();
        showPrevNumOfCategory();
    };

    function setPosition() {
        wrapper.style.transform = `translateX(${position}px)`;
        wrapper.style.transition = `transform 1s`;
    };

    let i = 0;

    function showNextNumOfCategory() {
        i++;
        if (i === 0 || i === 1 || i === 2 || i === 3 || i === 4 || i === 5) dots[i].classList.add('active');
        if (i >= 6) i = 5;
    };

    function showPrevNumOfCategory() {
        i--;
        if (i === 6) dots[i-1].classList.remove('active');
        if (i === 0 || i === 1 || i === 2 || i === 3 || i === 4 || i === 5) dots[i+1].classList.remove('active');
        if (i < 0) i = 0;
    };
    };
}
showCategory();


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
                "src": "./pictures/logo.jpg",
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
btnUp.addEventListener('click', topFunction);

function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        btnUp.style.display = "block";
    } else {
        btnUp.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

