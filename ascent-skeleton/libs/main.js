/**
 * ASCENT - PART 1 JAVASCRIPT: DEV 1 ONLY
 * Scope: Header to Services Section
 */

document.addEventListener("DOMContentLoaded", function () {
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
            // At the very top (<= 50px): show full header
            if (currentScrollPos <= 50) {
                header.style.top = "0px";
                header.classList.remove("header-pinned");
            } 
            // Scroll up: pinned header appears with shadow
            else if (prevScrollpos > currentScrollPos && currentScrollPos > header_container.clientHeight) {
                header.style.top = top_header ? `-${top_header.clientHeight}px` : "0px";
                header.classList.add("header-pinned");
            } 
            // Scroll down: header hides
            else {
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

                // Close all other dropdowns
                document.querySelectorAll(".offcanva .dropdown-item").forEach(item => {
                    item.classList.add("opacity-0", "invisible", "max-h-0");
                    item.classList.remove("opacity-100", "visible", "max-h-[450px]");
                });

                // Toggle current dropdown
                if (!isOpen) {
                    subMenu.classList.remove("opacity-0", "invisible", "max-h-0");
                    subMenu.classList.add("opacity-100", "visible", "max-h-[450px]");
                }
            });
        }
    });

    // 5. WOW.js scroll animation (Part 1 elements)
    if (typeof WOW !== "undefined") {
        new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 40,
            mobile: true,
            live: true
        }).init();
    }
});
