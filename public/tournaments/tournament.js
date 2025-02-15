const nxtBtn = document.querySelector(".next-btn");
const prvBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const numberOfSlides = slides.length;
let slideNumber = 0;
document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.querySelector(".preloader");
    const minimumLoadingTime = 2000; // 2 seconds minimum display time
    const startTime = Date.now();
    window.addEventListener("load", function () {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(minimumLoadingTime - elapsedTime, 0);
        setTimeout(() => {
            preloader.classList.add("fade-out");
            setTimeout(() => {
                preloader.style.display = "none";
            }, 500); // Wait for fade animation to complete
        }, remainingTime);
    });
});

nxtBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slideNumber++;

    if (slideNumber > numberOfSlides - 1) {
        slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
};

prvBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideNumber--;
    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add("active");
};
let headings = document.querySelectorAll(".content_heading"); // Get all matching elements

if (window.matchMedia("(max-width: 768px)").matches) {
    headings.forEach((heading) => {
        let oldText = heading.textContent;
        heading.textContent = "GlitchPop " + oldText;
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const mainTxt = document.querySelector(".main-txt");
    const eventsTxt = document.querySelector(".events-txt");
    const wrapper = document.querySelector(".wrapper");
    [mainTxt, eventsTxt, wrapper].forEach((el) => {
        if (el) {
            el.classList.add("animate-on-scroll");
            observer.observe(el);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    function smoothScroll(target, duration) {
        const targetPosition =
            target.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animationScroll(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(
                timeElapsed,
                startPosition,
                distance,
                duration
            );
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animationScroll);
        }

        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        }
        requestAnimationFrame(animationScroll);
    }
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                smoothScroll(targetElement, 1000);
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const previousTournaments = document.querySelector(
        ".previous-tournaments .tournament-grid"
    );
    const upcomingEvents = document.querySelector(
        ".upcoming-events .tournament-grid"
    );

    function adjustCards() {
        const isMobile = window.innerWidth <= 768;
        function handleGrid(grid) {
            if (!grid) return;

            const cards = grid.querySelectorAll(".box");
            cards.forEach((card, index) => {
                if (isMobile && index === 2) {
                    card.style.display = "none";
                } else {
                    card.style.display = "block";
                }
            });

            if (isMobile) {
                grid.style.gridTemplateColumns = "repeat(2, 1fr)";
                grid.style.gap = "10px";
            } else {
                grid.style.gridTemplateColumns = "repeat(3, 1fr)";
                grid.style.gap = "20px";
            }
        }

        handleGrid(previousTournaments);
        handleGrid(upcomingEvents);
    }
    adjustCards();
    let resizeTimer;
    window.addEventListener("resize", function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(adjustCards, 250);
    });
});

let links = [
    "https://unstop.com/o/YVrQ7P1?lb=9utVUlM&utm_medium=Share&utm_source=WhatsApp",
    "https://unstop.com/o/4lvd3JI?lb=9utVUlM&utm_medium=Share&utm_source=WhatsApp",
    "https://unstop.com/o/cvdrnoX?lb=9utVUlM&utm_medium=Share&utm_source=WhatsApp",
];
let upcomingTourBox = document.querySelectorAll(".upcomingBox");
console.log(upcomingTourBox);
for (let i = 0; i < upcomingTourBox.length; i++) {
    upcomingTourBox[i].addEventListener("click", () => {
        window.location.href = links[i];
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const detailItems = document.querySelectorAll(".detail-item");
    detailItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.classList.add("active");
        });
        item.addEventListener("mouseleave", () => {
            item.classList.remove("active");
        });

        item.addEventListener("touchstart", (e) => {
            e.preventDefault();
            detailItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });
            item.classList.toggle("active");
        });
    });

    document.addEventListener("touchstart", (e) => {
        if (!e.target.closest(".detail-item")) {
            detailItems.forEach((item) => {
                item.classList.remove("active");
            });
        }
    });
});
