/*
=========================================
CLIENT CONFIGURATION
=========================================
*/

const businessConfig = {
    name: "NOVA Pintura",

    whatsapp: "5493515550184",

    phone: "+54 9 351 555-0184",

    city: "Córdoba",

    province: "Córdoba",

    country: "Argentina",

    email: "hola@novapintura.com",

    whatsappMessage:
        "Hola, vi la página de NOVA Pintura y quisiera pedir un presupuesto.",
};

/* =========================================
   BUSINESS DATA
========================================= */

const whatsappLinks =
    document.querySelectorAll("[data-whatsapp]");

const phoneLinks =
    document.querySelectorAll("[data-phone]");

const emailLinks =
    document.querySelectorAll("[data-email]");


whatsappLinks.forEach((link) => {

    const message =
        encodeURIComponent(
            businessConfig.whatsappMessage
        );

    link.href =
        `https://wa.me/${businessConfig.whatsapp}?text=${message}`;

});


phoneLinks.forEach((link) => {

    link.href =
        `tel:${businessConfig.phone.replace(/\s+/g, "")}`;

    link.textContent =
        businessConfig.phone;

});

emailLinks.forEach((link) => {

    link.href =
        `mailto:${businessConfig.email}`;

    link.textContent =
        businessConfig.email;

});

/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const nav =
    document.querySelector(".nav");

const navLinks =
    document.querySelectorAll(".nav__list a");


function closeMenu() {

    nav.classList.remove("nav--open");

    menuToggle.classList.remove(
        "menu-toggle--active"
    );

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Abrir menú"
    );

    document.body.classList.remove(
        "menu-open"
    );

}


function openMenu() {

    nav.classList.add("nav--open");

    menuToggle.classList.add(
        "menu-toggle--active"
    );

    menuToggle.setAttribute(
        "aria-expanded",
        "true"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Cerrar menú"
    );

    document.body.classList.add(
        "menu-open"
    );

}


menuToggle.addEventListener(
    "click",
    () => {

        const isOpen =
            nav.classList.contains(
                "nav--open"
            );

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }

    }
);


navLinks.forEach((link) => {

    link.addEventListener(
        "click",
        closeMenu
    );

});


document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            nav.classList.contains(
                "nav--open"
            )
        ) {

            closeMenu();

            menuToggle.focus();

        }

    }
);


/* =========================================
   REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "is-visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15,
        }
    );


revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* =========================================
   HEADER SCROLL
========================================= */

const siteHeader =
    document.querySelector(".site-header");


function updateHeaderOnScroll() {

    if (window.scrollY > 40) {

        siteHeader.classList.add(
            "site-header--scrolled"
        );

    } else {

        siteHeader.classList.remove(
            "site-header--scrolled"
        );

    }

}


window.addEventListener(
    "scroll",
    updateHeaderOnScroll
);


updateHeaderOnScroll();

const beforeAfterRanges =
    document.querySelectorAll("[data-before-range]");


beforeAfterRanges.forEach((range) => {

    const container =
        range.closest("[data-before-after]");

    const beforeLayer =
        container.querySelector("[data-before-layer]");

    const divider =
        container.querySelector("[data-before-divider]");


    function updateComparison() {

        const value = range.value;

        beforeLayer.style.width =
            `${value}%`;

        divider.style.left =
            `${value}%`;

    }


    range.addEventListener(
        "input",
        updateComparison
    );


    updateComparison();

});