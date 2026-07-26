/*=========================================
            LOADER
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 800);

});

/*=========================================
        TYPED.JS
=========================================*/

new Typed("#typing", {

    strings: [

        "Data Analyst",

        "SQL Developer",

        "Python Enthusiast",

        "Power BI Developer",

        "Freelancer"

    ],

    typeSpeed: 70,

    backSpeed: 45,

    backDelay: 1800,

    loop: true

});

/*=========================================
            AOS
=========================================*/

AOS.init({

    duration: 1000,

    once: true,

    offset: 80

});

/*=========================================
        HAMBURGER MENU
=========================================*/

const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/*=========================================
        CLOSE MENU ON CLICK
=========================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

/*=========================================
        ACTIVE NAVBAR LINK
=========================================*/

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*=========================================
        SCROLL PROGRESS BAR
=========================================*/

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    progressBar.style.width = progress + "%";

});

/*=========================================
        BACK TO TOP
=========================================*/

const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=========================================
        COUNTER
=========================================*/

const counters = document.querySelectorAll(".counter");

const speed = 80;

const startCounter = () => {

    counters.forEach(counter => {

        const update = () => {

            const target = +counter.dataset.target;

            const current = +counter.innerText;

            const increment = Math.ceil(target / speed);

            if (current < target) {

                counter.innerText = current + increment;

                requestAnimationFrame(update);

            } else {

                counter.innerText = target;

            }

        };

        update();

    });

};

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounter();

                observer.disconnect();

            }

        });

    },

    {

        threshold: .5

    }

);

const stats = document.querySelector(".stats");

if (stats) {

    observer.observe(stats);

}

/*=========================================
        VANILLA TILT
=========================================*/

VanillaTilt.init(

    document.querySelectorAll(

        ".project-card,.skill-category,.info-card,.stat-card"

    ),

    {

        max: 10,

        speed: 400,

        glare: true,

        "max-glare": .15

    }

);

/*=========================================
        CUSTOM CURSOR
=========================================*/

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {

    if (cursorDot) {
        cursorDot.style.left = e.clientX + "px";
        cursorDot.style.top = e.clientY + "px";
    }

    if (cursorOutline) {

        cursorOutline.animate({

            left: e.clientX - 17 + "px",
            top: e.clientY - 17 + "px"

        }, {

            duration: 300,
            fill: "forwards"

        });

    }

});

/*=========================================
        CURSOR HOVER EFFECT
=========================================*/

document.querySelectorAll("a,button,.project-card,.skill-category").forEach(el => {

    el.addEventListener("mouseenter", () => {

        if (cursorOutline) {

            cursorOutline.style.transform = "scale(1.6)";
            cursorOutline.style.borderColor = "#8b5cf6";

        }

    });

    el.addEventListener("mouseleave", () => {

        if (cursorOutline) {

            cursorOutline.style.transform = "scale(1)";
            cursorOutline.style.borderColor = "#c084fc";

        }

    });

});

/*=========================================
        NAVBAR BACKGROUND
=========================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(9,6,17,.88)";
        header.style.boxShadow = "0 12px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(9,6,17,.55)";
        header.style.boxShadow = "none";

    }

});

/*=========================================
        BUTTON RIPPLE EFFECT
=========================================*/

document.querySelectorAll(".primary-btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = diameter + "px";
        circle.style.height = diameter + "px";

        circle.style.left = e.offsetX - diameter / 2 + "px";
        circle.style.top = e.offsetY - diameter / 2 + "px";

        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

/*=========================================
        PARTICLES
=========================================*/

tsParticles.load("particles-js", {

    background: { color: "transparent" },

    fpsLimit: 60,

    particles: {

        number: {

            value: 55

        },

        color: {

            value: ["#8b5cf6", "#3b82f6", "#ffffff"]

        },

        links: {

            enable: true,

            distance: 150,

            color: "#8b5cf6",

            opacity: .15

        },

        move: {

            enable: true,

            speed: 1.2

        },

        opacity: {

            value: .5

        },

        size: {

            value: 2

        }

    },

    interactivity: {

        events: {

            onHover: {

                enable: true,

                mode: "repulse"

            },

            resize: true

        },

        modes: {

            repulse: {

                distance: 120

            }

        }

    },

    detectRetina: true

});

/*=========================================
        FADE IN
=========================================*/

const revealItems = document.querySelectorAll(

    ".project-card,.skill-category,.info-card,.stat-card,.timeline-item,.language-card,.resume-card,.contact-card"

);

const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {

        threshold: .15

    }

);

revealItems.forEach(item => {

    item.classList.add("hidden");

    revealObserver.observe(item);

});

/*=========================================
        PARALLAX HERO
=========================================*/

const hero = document.querySelector(".hero-image");

window.addEventListener("mousemove", (e) => {

    if (!hero) return;

    const x = (window.innerWidth / 2 - e.clientX) / 40;

    const y = (window.innerHeight / 2 - e.clientY) / 40;

    hero.style.transform = `translate(${x}px,${y}px)`;

});

/*=========================================
        YEAR
=========================================*/

const year = document.querySelector(".year");

if (year) {

    year.textContent = new Date().getFullYear();

}

/*=========================================
        CONSOLE MESSAGE
=========================================*/

console.log("%cWelcome to Mohammed Kaif's Portfolio 🚀",
    "color:#8b5cf6;font-size:18px;font-weight:bold;");

/*=========================================
        CONTACT FORM
=========================================*/
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const inputs = contactForm.querySelectorAll("input, textarea");
        let valid = true;

        inputs.forEach((input) => {
            if (input.value.trim() === "") {
                valid = false;
                input.style.border = "1px solid #ff4d4f";
            } else {
                input.style.border = "1px solid rgba(255,255,255,.08)";
            }
        });

        if (!valid) {
            return;
        }

        const button = contactForm.querySelector("button");
        const originalText = button.innerHTML;

        button.innerHTML = "Sending...";
        button.disabled = true;

        emailjs.send(
            "service_ygg7jyf",
            "template_kt2rohn",
            {
                from_name: contactForm.elements.from_name.value,
                from_email: contactForm.elements.from_email.value,
                subject: contactForm.elements.subject.value,
                message: contactForm.elements.message.value,
            }
        )
            .then((response) => {
                console.log("SUCCESS!", response);
                button.innerHTML = "✓ Message Sent";
                contactForm.reset();

                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.disabled = false;
                }, 2500);
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                button.innerHTML = "Failed to Send";

                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.disabled = false;
                }, 2500);
            });
    });
}