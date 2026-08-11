/* =========================================================
   KASA BELLE ISLE
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MENU ELEMENTS
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const menuClose = document.getElementById("menuClose");
    const sideMenu = document.getElementById("sideMenu");
    const menuOverlay = document.getElementById("menuOverlay");



    /* =====================================================
       OPEN MENU
    ===================================================== */

    function openMenu() {

        if (!sideMenu) return;

        sideMenu.classList.add("active");

        if (menuOverlay) {
            menuOverlay.classList.add("active");
        }

        if (menuToggle) {
            menuToggle.setAttribute(
                "aria-expanded",
                "true"
            );
        }

        sideMenu.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";
    }



    /* =====================================================
       CLOSE MENU
    ===================================================== */

    function closeMenu() {

        if (!sideMenu) return;

        sideMenu.classList.remove("active");

        if (menuOverlay) {
            menuOverlay.classList.remove("active");
        }

        if (menuToggle) {
            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }

        sideMenu.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow = "";
    }



    /* =====================================================
       HAMBURGER CLICK
    ===================================================== */

    if (menuToggle) {

        menuToggle.addEventListener(
            "click",
            openMenu
        );

    }



    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    if (menuClose) {

        menuClose.addEventListener(
            "click",
            closeMenu
        );

    }



    /* =====================================================
       CLICK OUTSIDE MENU
    ===================================================== */

    if (menuOverlay) {

        menuOverlay.addEventListener(
            "click",
            closeMenu
        );

    }



    /* =====================================================
       CLOSE MENU WHEN A LINK IS CLICKED
    ===================================================== */

    if (sideMenu) {

        const menuLinks =
            sideMenu.querySelectorAll("a");

        menuLinks.forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    closeMenu();

                }
            );

        });

    }



    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                closeMenu();

            }

        }
    );



    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    anchorLinks.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });



    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".about-content, " +
            ".about-image, " +
            ".review-card, " +
            ".product-card, " +
            ".main-category-card, " +
            ".contact-card, " +
            ".location-heading, " +
            ".location-map"
        );


    if (
        "IntersectionObserver"
        in window
    ) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "revealed"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            (element) => {

                element.classList.add(
                    "reveal"
                );

                observer.observe(
                    element
                );

            }
        );

    }



    /* =====================================================
       CURRENT PAGE IN MENU
    ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop() || "index.html";


    const sideLinks =
        document.querySelectorAll(
            ".side-link"
        );


    sideLinks.forEach((link) => {

        const href =
            link.getAttribute("href");


        if (
            href === currentPage
        ) {

            link.classList.add(
                "current-page"
            );

        }

    });



    /* =====================================================
       PREVENT EMPTY LINKS
    ===================================================== */

    const emptyLinks =
        document.querySelectorAll(
            'a[href="#"]'
        );


    emptyLinks.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

            }
        );

    });

});