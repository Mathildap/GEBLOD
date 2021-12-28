// COOKIE
let main = document.querySelector('main');
let cookie = `
<section>
<p>Text</p>
<button>Accept</button>
<button>Show</button>
</section>`;

// CHANGE HEADER COLOR
const header = document.querySelector('header');
const desktopHeader = document.querySelector('.desktop-menu');

window.onscroll = () => {
    if (window.scrollY > 75) {
        header.classList.add('scroll-active');
    } else {
        header.classList.remove('scroll-active');
    }
};

if (window.innerWidth > 900) {
    window.onscroll = () => {
        if (window.scrollY > 75) {
            desktopHeader.classList.add('scroll-active');
        } else {
            desktopHeader.classList.remove('scroll-active');
        }
    };
}

// SVG HEART ANIMATION
gsap.to('#svgHeart', {
    duration: 1,
    scale: 1.2,
    repeat: 10,
});

gsap.to('#svgHeartDesktop', {
    duration: 1,
    scale: 1.2,
    repeat: 10,
});
