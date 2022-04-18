// show menu
const navToggle = document.querySelector("#nav-toggle"),
    navClose = document.querySelector("#nav-close"),
    navMenu = document.querySelector("#nav-menu");

navToggle.addEventListener("click", function () {
    navMenu.classList.add("show-menu");
})

navClose.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
})

//when clicking the menu link, menu is removed
const navLink = document.querySelectorAll(".nav-link");

function navRemove() {
    const navMenu = document.querySelector("#nav-menu");
    navMenu.classList.remove("show-menu");
}

navLink.forEach(link => link.addEventListener("click", navRemove));

//when scrolling, background of header is changed
function scrollHeader() {
    const header = document.querySelector("#header");
    if (window.scrollY >= 200) {
        header.classList.add("scroll-header");
    } else {
        header.classList.remove("scroll-header");
    }
}

window.addEventListener("scroll", scrollHeader);

// Show Scroll Up
function scrollUp() {
    const scrollUp = document.querySelector("#scroll-up");
    // If the scroll is higher than 200 viewpoint height, add the show-scroll class to the a tag with the scroll-top class
    if (window.scrollY >= 200) {
        scrollUp.classList.add("show-scroll")
    } else {
        scrollUp.classList.remove("show-scroll");
    }
}

window.addEventListener("scroll", scrollUp);

// Scroll section active link
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.scrollHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener("scroll", scrollActive);

//Scroll Reveal Animation
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true
})

sr.reveal(`.home-header, .track-title`, { delay: 600, origin: 'top' });
sr.reveal(`.home-footer`, { delay: 700, origin: 'top' });
sr.reveal(`.home-img`, { delay: 900, origin: 'bottom' });

sr.reveal(`.song-name`, { origin: 'bottom', interval: 100 });

sr.reveal(`.specs-title, .specs-description, .specs-button`, { delay: 600, origin: 'bottom', interval: 100 });
sr.reveal(`.specs-img`, { delay: 600, origin: 'top' });

sr.reveal(`.member-description`, { origin: 'top' });
sr.reveal(`.member img`, { origin: 'bottom' });

sr.reveal(`.footer-logo, .footer-content, .footer-social, .footer-copy`, { interval: 100 });

