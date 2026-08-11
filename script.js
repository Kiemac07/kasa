document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileMenuClose = document.getElementById("mobileMenuClose");
    const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");


    /* =====================================================
       OPEN MOBILE MENU
    ===================================================== */

    function openMenu() {

        if (!mobileMenu) return;

        mobileMenu.classList.add("active");

        if (mobileMenuOverlay) {
            mobileMenuOverlay.classList.add("active");
        }

        if (menuToggle) {
            menuToggle.setAttribute(
                "aria-expanded",
                "true"
            );
        }

        document.body.style.overflow = "hidden";
    }


    /* =====================================================
       CLOSE MOBILE MENU
    ===================================================== */

    function closeMenu() {

        if (!mobileMenu) return;

        mobileMenu.classList.remove("active");

        if (mobileMenuOverlay) {
            mobileMenuOverlay.classList.remove("active");
        }

        if (menuToggle) {
            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }

        document.body.style.overflow = "";
    }


    /* =====================================================
       MENU BUTTON
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

    if (mobileMenuClose) {

        mobileMenuClose.addEventListener(
            "click",
            closeMenu
        );

    }


    /* =====================================================
       CLICK OUTSIDE MENU
    ===================================================== */

    if (mobileMenuOverlay) {

        mobileMenuOverlay.addEventListener(
            "click",
            closeMenu
        );

    }


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {
                closeMenu();
            }

        }
    );


    /* =====================================================
       CLOSE MENU AFTER CLICKING A LINK
    ===================================================== */

    if (mobileMenu) {

        const menuLinks =
            mobileMenu.querySelectorAll("a");

        menuLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                closeMenu
            );

        });

    }


    /* =====================================================
       SMOOTH SCROLL FOR INTERNAL LINKS
    ===================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");

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


                const header =
                    document.querySelector(
                        ".site-header"
                    );


                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;


                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.pageYOffset -
                    headerHeight;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    }

});