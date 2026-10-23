/**
 * ASCENT - COMBINED JAVASCRIPT: DEV 1 + DEV 2
 */

document.addEventListener("DOMContentLoaded", function () {
    /* KHỐI 1: DEV 1 (HEADER TO SERVICES) */

    // 1. Swiper: Services Carousel
    if (document.querySelector(".service-swiper")) {
        new Swiper(".service-swiper", {
            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
            },
            loop: true,
            centeredSlides: true,
            spaceBetween: 20,
            pagination: {
                el: ".service-pagination",
                clickable: true,
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        });
    }

    // 2. Mobile Offcanvas Menu Drawer Toggle
    const offcanva = document.querySelector(".offcanva");
    const overlay = document.querySelector(".offcanva-overlay");
    const trigger = document.querySelector(".offcanvaTragger");
    const closeBtn = document.querySelector(".offcanvaClose");

    if (trigger && offcanva && overlay) {
        trigger.addEventListener("click", () => {
            offcanva.classList.remove("-right-full");
            offcanva.classList.add("right-0");
            overlay.classList.remove("invisible");
            overlay.classList.add("visible");
        });
    }

    function closeMenu() {
        if (offcanva && overlay) {
            offcanva.classList.remove("right-0");
            offcanva.classList.add("-right-full");
            overlay.classList.remove("visible");
            overlay.classList.add("invisible");
        }
    }

    if (closeBtn) closeBtn.addEventListener("click", closeMenu);
    if (overlay) overlay.addEventListener("click", closeMenu);

    // 3. Sticky Header on Scroll (Smart Header Pinning)
    const header = document.getElementById("header");
    const header_container = document.getElementById("header-container");
    const top_header = document.getElementById("top-header");

    let prevScrollpos = window.scrollY;
    window.addEventListener("scroll", function () {
        let currentScrollPos = window.scrollY;

        if (header && header_container) {
            if (currentScrollPos <= 50) {
                header.style.top = "0px";
                header.classList.remove("header-pinned");
            } else if (prevScrollpos > currentScrollPos && currentScrollPos > header_container.clientHeight) {
                header.style.top = top_header ? `-${top_header.clientHeight}px` : "0px";
                header.classList.add("header-pinned");
            } else {
                header.style.top = `-${header_container.clientHeight}px`;
                header.classList.remove("header-pinned");
            }
        }
        prevScrollpos = currentScrollPos;
    });

    // 4. Mobile Dropdown Submenus
    document.querySelectorAll(".offcanva .dropdown").forEach(drop => {
        const link = drop.querySelector(".dropdown-toggle");
        const subMenu = drop.querySelector(".dropdown-item");

        if (link && subMenu) {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const isOpen = subMenu.classList.contains("opacity-100");

                document.querySelectorAll(".offcanva .dropdown-item").forEach(item => {
                    item.classList.add("opacity-0", "invisible", "max-h-0");
                    item.classList.remove("opacity-100", "visible", "max-h-[450px]");
                });

                if (!isOpen) {
                    subMenu.classList.remove("opacity-0", "invisible", "max-h-0");
                    subMenu.classList.add("opacity-100", "visible", "max-h-[450px]");
                }
            });
        }
    });

    /* HẾT KHỐI 1: DEV 1 */


    /* KHỐI 2: DEV 2 (FAQ TO FOOTER) */

    // 5. Swiper: Testimonials Carousel
    if (document.querySelector(".testimonial-swiper")) {
        new Swiper(".testimonial-swiper", {
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            loop: true,
            spaceBetween: 30,
            slidesPerView: 1,
        });
    }

    // 6. Accordion FAQ Toggle
    document.querySelectorAll(".according-btn").forEach(btn => {
        btn.addEventListener("click", function (e) {
            const item = e.currentTarget.closest(".according-item");
            if (!item) return;
            const isOpen = item.getAttribute("data-open") === "true";
            document.querySelectorAll(".according-item").forEach(i => {
                i.setAttribute("data-open", "false");
                i.classList.remove("active-accor");
            });
            if (!isOpen) {
                item.setAttribute("data-open", "true");
                item.classList.add("active-accor");
            }
        });
    });

    // 7. WOW.js Scroll Animations
    if (typeof WOW !== "undefined") {
        new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 40,
            mobile: true,
            live: true
        }).init();
    }

    /* HẾT KHỐI 2: DEV 2 */
});
