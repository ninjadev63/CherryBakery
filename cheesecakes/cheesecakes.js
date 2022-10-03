function changeSizeCherry() {
    if (document.documentElement.clientWidth > 350) {
        animateSmallPics();

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
    }
    if (document.documentElement.clientWidth < 351) {
        hideSmallPics();

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
                        "width": 15,
                        "height": 30
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
    }
};
changeSizeCherry();

function animateSmallPics() {
    let tl = gsap.timeline({defaults: {duration: 1, rotation: 360, opacity: 0}});
        tl.from('.small-pic-one', {x: -80}, "+=1.5")
        tl.from('.small-pic-two', {x: -80}, "+=0.5")
        tl.from('.small-pic-three', {x: -80}, "+=0.5")
        tl.from('.small-pic-four', {x: -80}, "+=0.5")
        tl.from('.small-pic-five', {x: -80}, "+=0.5")
        tl.from('.small-pic-six', {x: -80}, "+=0.5")
        tl.from('.small-pic-seven', {x: -80}, "+=0.5")
        tl.from('.small-pic-eight', {x: -80}, "+=0.5")
};

function hideSmallPics() {
    const hidePic = document.querySelectorAll('.small');
    hidePic.forEach(pic => {
        pic.style.display = 'none';
    });
};


function changeHeading() {
    const leftPicture = document.querySelectorAll('.circular svg');

        leftPicture.forEach(picture => {
            if (document.documentElement.clientWidth < 556) {
                picture.setAttribute('viewBox', '0 0 112 112');
            }

            if (document.documentElement.clientWidth < 351) {
                picture.setAttribute('viewBox', '0 0 137 137');  
            }  
        });
};
changeHeading();

window.onscroll = function() {scrollFunction()};

const btnUp = document.querySelector('#btn-up');
const btnHome = document.querySelector('#btn-home');
btnUp.addEventListener('click', topFunction);

function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        btnUp.style.display = "block";
        btnHome.style.display = "block";
    } else {
        btnUp.style.display = "none";
        btnHome.style.display = "none";
    }
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};













