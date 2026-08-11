/* =========================================================
   KASA BELLE ISLE
   MAIN STYLESHEET
========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --red: #d71920;
    --dark-red: #b51016;
    --deep-red: #8f0c11;
    --white: #ffffff;
    --off-white: #f7f7f7;
    --light-grey: #eeeeee;
    --grey: #777777;
    --dark: #111111;
    --black: #080808;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Inter", Arial, sans-serif;
    background: var(--white);
    color: var(--dark);
    line-height: 1.6;
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    font-family: inherit;
}


/* =========================================================
   HEADER
========================================================= */

.header {
    width: 100%;
    height: 82px;
    background: var(--white);
    border-bottom: 1px solid #e8e8e8;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.header-inner {
    max-width: 1400px;
    height: 100%;
    margin: auto;
    padding: 0 35px;

    display: flex;
    align-items: center;
    justify-content: space-between;
}


/* LOGO */

.logo {
    display: flex;
    flex-direction: column;
    line-height: 1;
}

.logo span {
    font-size: 31px;
    font-weight: 900;
    letter-spacing: -1.5px;
    color: var(--red);
}

.logo small {
    font-size: 8px;
    font-weight: 800;
    letter-spacing: 3px;
    color: var(--dark);
    margin-top: 5px;
}


/* NAVIGATION */

.nav {
    display: flex;
    align-items: center;
    gap: 28px;
}

.nav > a {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.3px;
    transition: 0.25s ease;
    position: relative;
}

.nav > a:not(.nav-order)::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -7px;
    width: 0;
    height: 2px;
    background: var(--red);
    transition: 0.25s ease;
}

.nav > a:hover::after,
.nav > a.active::after {
    width: 100%;
}

.nav > a:hover,
.nav > a.active {
    color: var(--red);
}


/* ORDER BUTTON */

.nav-order {
    background: var(--red);
    color: var(--white) !important;
    padding: 13px 21px;
    border-radius: 4px;
    font-size: 12px !important;
    letter-spacing: 0.5px;
    transition: 0.25s ease;
}

.nav-order:hover {
    background: var(--dark-red);
    transform: translateY(-2px);
}


/* MOBILE BUTTON */

.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    font-size: 27px;
    cursor: pointer;
}


/* =========================================================
   MOBILE NAV
========================================================= */

.mobile-nav {
    display: none;
    position: fixed;
    top: 82px;
    left: 0;
    width: 100%;
    background: var(--white);
    z-index: 999;
    padding: 20px 25px 30px;
    border-bottom: 1px solid #ddd;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}

.mobile-nav.open {
    display: flex;
    flex-direction: column;
}

.mobile-nav a {
    padding: 15px 5px;
    border-bottom: 1px solid #eee;
    font-weight: 700;
}

.mobile-nav a:hover {
    color: var(--red);
}

.mobile-order {
    margin-top: 15px;
    background: var(--red);
    color: white !important;
    text-align: center;
    border: none !important;
}


/* =========================================================
   HERO
========================================================= */

.hero {
    min-height: calc(100vh - 82px);
    position: relative;

    display: flex;
    align-items: center;

    background:
        linear-gradient(
            90deg,
            rgba(0,0,0,0.85) 0%,
            rgba(0,0,0,0.65) 45%,
            rgba(0,0,0,0.25) 100%
        ),
        url("images/store.jpg");

    background-size: cover;
    background-position: center;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background:
        linear-gradient(
            135deg,
            rgba(215,25,32,0.2),
            transparent 45%
        );
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 1400px;
    width: 100%;
    margin: auto;
    padding: 100px 35px;
    color: white;
}

.hero-badge {
    display: inline-block;
    border-left: 4px solid var(--red);
    padding-left: 12px;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 3px;
    margin-bottom: 22px;
}

.hero h1 {
    font-size: clamp(45px, 6vw, 82px);
    line-height: 0.98;
    font-weight: 900;
    letter-spacing: -4px;
    max-width: 850px;
}

.hero h1 span {
    color: var(--red);
}

.hero p {
    max-width: 580px;
    margin-top: 25px;
    font-size: 17px;
    color: #eeeeee;
}

.hero-buttons {
    display: flex;
    gap: 14px;
    margin-top: 35px;
    flex-wrap: wrap;
}


/* =========================================================
   BUTTONS
========================================================= */

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    min-height: 52px;
    padding: 0 26px;

    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.8px;

    border-radius: 4px;

    transition:
        transform 0.25s ease,
        background 0.25s ease,
        color 0.25s ease,
        box-shadow 0.25s ease;
}

.btn:hover {
    transform: translateY(-3px);
}

.btn-red {
    background: var(--red);
    color: var(--white);
}

.btn-red:hover {
    background: var(--dark-red);
    box-shadow: 0 12px 30px rgba(215,25,32,0.25);
}

.btn-white {
    background: var(--white);
    color: var(--dark);
}

.btn-white:hover {
    background: #eeeeee;
}

.btn-white-red {
    background: var(--white);
    color: var(--red);
}

.btn-white-red:hover {
    background: #eeeeee;
}


/* =========================================================
   ORDER STRIP
========================================================= */

.order-strip {
    background: var(--red);
    color: white;
}

.order-strip-inner {
    max-width: 1400px;
    margin: auto;
    padding: 45px 35px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}

.small-label {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 2px;
    opacity: 0.8;
}

.order-strip h2 {
    font-size: 28px;
    margin-top: 5px;
    font-weight: 800;
}


/* =========================================================
   GENERAL SECTIONS
========================================================= */

.section {
    max-width: 1400px;
    margin: auto;
    padding: 100px 35px;
}

.section-heading {
    max-width: 650px;
    margin-bottom: 55px;
}

.section-heading > span {
    color: var(--red);
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 2px;
}

.section-heading h2 {
    margin-top: 8px;
    font-size: clamp(35px, 4vw, 52px);
    line-height: 1.05;
    font-weight: 900;
    letter-spacing: -2px;
}

.section-heading p {
    margin-top: 15px;
    color: var(--grey);
}


/* =========================================================
   CATEGORY GRID
========================================================= */

.category-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
}

.category-card {
    min-height: 270px;
    background: var(--off-white);
    border: 1px solid #e7e7e7;
    padding: 35px;

    display: flex;
    flex-direction: column;

    transition:
        transform 0.3s ease,
        background 0.3s ease,
        box-shadow 0.3s ease;
}

.category-card:hover {
    transform: translateY(-7px);
    background: var(--white);
    box-shadow: 0 20px 45px rgba(0,0,0,0.09);
    border-color: var(--red);
}

.category-icon {
    width: 58px;
    height: 58px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--white);
    border: 1px solid #ddd;
    border-radius: 50%;

    font-size: 25px;
    margin-bottom: 28px;
}

.category-card h3 {
    font-size: 23px;
    font-weight: 800;
}

.category-card p {
    color: var(--grey);
    font-size: 14px;
    margin-top: 7px;
}

.category-card span {
    margin-top: auto;
    padding-top: 25px;

    font-size: 11px;
    font-weight: 900;
    letter-spacing: 1px;
    color: var(--red);
}


/* =========================================================
   ABOUT PREVIEW
========================================================= */

.about-preview {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 600px;
    background: var(--black);
    color: white;
}

.about-image {
    min-height: 500px;

    background:
        linear-gradient(
            rgba(0,0,0,0.25),
            rgba(0,0,0,0.25)
        ),
        url("images/store-inside.jpg");

    background-size: cover;
    background-position: center;
}

.image-placeholder {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;

    font-size: 40px;
    font-weight: 900;
    letter-spacing: -2px;

    background:
        linear-gradient(
            135deg,
            var(--red),
            var(--deep-red)
        );
}

.about-content {
    padding: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.red-text {
    color: var(--red);
}

.about-content h2 {
    margin-top: 12px;

    font-size: clamp(35px, 4vw, 55px);
    line-height: 1.02;
    letter-spacing: -2px;
}

.about-content p {
    color: #bdbdbd;
    max-width: 520px;
    margin-top: 25px;
}

.text-link {
    color: white;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 1px;

    margin-top: 30px;

    display: inline-block;
    width: fit-content;

    border-bottom: 2px solid var(--red);
    padding-bottom: 7px;

    transition: 0.25s ease;
}

.text-link:hover {
    color: var(--red);
}


/* =========================================================
   FINAL CTA
========================================================= */

.final-cta {
    padding: 110px 35px;
    text-align: center;

    background:
        linear-gradient(
            135deg,
            #ffffff,
            #f5f5f5
        );
}

.final-cta > div {
    max-width: 750px;
    margin: auto;
}

.final-cta span {
    color: var(--red);
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 2px;
}

.final-cta h2 {
    font-size: clamp(40px, 5vw, 65px);
    line-height: 1;
    letter-spacing: -3px;
    margin-top: 10px;
    font-weight: 900;
}

.final-cta p {
    color: var(--grey);
    margin: 20px auto 30px;
}


/* =========================================================
   FOOTER
========================================================= */

footer {
    background: var(--black);
    color: white;
}

.footer-inner {
    max-width: 1400px;
    margin: auto;
    padding: 75px 35px;

    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 50px;
}

.footer-brand p {
    max-width: 300px;
    color: #888;
    margin-top: 18px;
    font-size: 14px;
}

.footer-logo span {
    color: white;
}

.footer-logo small {
    color: #777;
}

.footer-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.footer-column h4 {
    color: var(--red);
    font-size: 11px;
    letter-spacing: 2px;
    margin-bottom: 20px;
}

.footer-column a {
    color: #aaa;
    font-size: 13px;
    margin-bottom: 11px;
    transition: 0.2s ease;
}

.footer-column a:hover {
    color: white;
}

.footer-column p {
    color: #888;
    font-size: 13px;
    max-width: 230px;
    margin-bottom: 20px;
}

.footer-order {
    color: white !important;
    font-weight: 800;
    border-bottom: 2px solid var(--red);
    padding-bottom: 5px;
}

.footer-bottom {
    border-top: 1px solid #242424;

    max-width: 1400px;
    margin: auto;
    padding: 22px 35px;

    display: flex;
    justify-content: space-between;
    gap: 20px;

    color: #666;
    font-size: 11px;
}


/* =========================================================
   SCROLL ANIMATION
========================================================= */

.category-card,
.about-content,
.section-heading,
.final-cta {
    animation: fadeUp 0.7s ease both;
}

@keyframes fadeUp {

    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }

}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 1100px) {

    .nav {
        gap: 17px;
    }

    .nav > a {
        font-size: 12px;
    }

    .category-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .footer-inner {
        grid-template-columns: 1fr 1fr;
    }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 800px) {

    .header {
        height: 72px;
    }

    .header-inner {
        padding: 0 20px;
    }

    .logo span {
        font-size: 27px;
    }

    .logo small {
        font-size: 7px;
    }

    .nav {
        display: none;
    }

    .mobile-menu-btn {
        display: block;
    }

    .mobile-nav {
        top: 72px;
    }


    /* HERO */

    .hero {
        min-height: 680px;
        background-position: center;
    }

    .hero-content {
        padding: 70px 25px;
    }

    .hero h1 {
        font-size: clamp(42px, 12vw, 65px);
        letter-spacing: -2.5px;
    }

    .hero p {
        font-size: 15px;
        max-width: 430px;
    }

    .hero-buttons {
        flex-direction: column;
        align-items: flex-start;
    }

    .hero-buttons .btn {
        width: 100%;
        max-width: 300px;
    }


    /* ORDER STRIP */

    .order-strip-inner {
        padding: 35px 25px;
        flex-direction: column;
        align-items: flex-start;
    }

    .order-strip h2 {
        font-size: 24px;
    }

    .order-strip .btn {
        width: 100%;
    }


    /* SECTION */

    .section {
        padding: 75px 25px;
    }

    .section-heading {
        margin-bottom: 35px;
    }

    .section-heading h2 {
        font-size: 38px;
    }


    /* CATEGORIES */

    .category-grid {
        grid-template-columns: 1fr;
    }

    .category-card {
        min-height: 230px;
        padding: 28px;
    }


    /* ABOUT */

    .about-preview {
        grid-template-columns: 1fr;
    }

    .about-image {
        min-height: 350px;
    }

    .about-content {
        padding: 65px 25px;
    }


    /* CTA */

    .final-cta {
        padding: 80px 25px;
    }

    .final-cta h2 {
        font-size: 42px;
    }


    /* FOOTER */

    .footer-inner {
        grid-template-columns: 1fr;
        padding: 60px 25px;
        gap: 40px;
    }

    .footer-bottom {
        padding: 20px 25px;
        flex-direction: column;
    }

}


/* =========================================================
   SMALL PHONES
========================================================= */

@media (max-width: 400px) {

    .hero h1 {
        font-size: 39px;
    }

    .hero-content {
        padding: 60px 20px;
    }

    .section {
        padding-left: 20px;
        padding-right: 20px;
    }

    .category-card {
        padding: 25px;
    }

}