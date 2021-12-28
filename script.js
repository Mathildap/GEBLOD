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

// SEARCH ANIMATION
const searchIcon = document.getElementById('searchIcon');
searchIcon.addEventListener('click', () => {
    document.querySelector('.mobile-menu').style.display = 'none';
    document.getElementById('searchAnimationContainer').style.display = 'flex';

    document.getElementById('searchAnimationContainer').innerHTML = `
    <header class="mobile-search-animation">
                <div class="header-logo">
                    <img src="/img/logo.png" alt="GeBlod Logga" />
                </div>
                <div class="search-container">
                    <input type="text" placeholder="Vad söker du?" />
                    <div><i class="fas fa-search"></i></div>
                </div>
                <div class="x-icon" id="xIcon">
                    <i class="fas fa-times"></i>
                </div>
            </header>
    `;
    closeSearch();
});

function closeSearch() {
    const xIcon = document.getElementById('xIcon');

    xIcon.addEventListener('click', () => {
        document.querySelector('.mobile-menu').style.display = 'flex';
        document.getElementById('searchAnimationContainer').style.display =
            'none';
    });
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
