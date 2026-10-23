/**
 * ASCENT - PART 2 JAVASCRIPT: DEV 2 ONLY
 * Scope: FAQ to Footer Section
 */

document.addEventListener("DOMContentLoaded", function () {
    // 1. Swiper: Testimonials Carousel
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

    // 2. Accordion FAQ Toggle
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

    // 3. WOW.js scroll animation (Part 2 elements)
    if (typeof WOW !== "undefined") {
        new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 20,
            mobile: true,
            live: true
        }).init();
    }
});
