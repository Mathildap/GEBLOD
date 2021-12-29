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

// OPEN MENU
document.querySelector('.mobile-menu-slide').style.display = 'none';
const burgerIcon = document.getElementById('burgerIcon');

burgerIcon.addEventListener('click', () => {
    document.querySelector('.mobile-menu').style.display = 'none';
    document.querySelector('.mobile-menu-slide').style.display = 'block';

    closeMenu();
});

function closeMenu() {
    const closeMenu = document.getElementById('closeMenu');

    closeMenu.addEventListener('click', () => {
        document.querySelector('.mobile-menu-slide').style.display = 'none';
        document.querySelector('.mobile-menu').style.display = 'flex';
    });
}

// OPEN SEARCH
const searchIcon = document.getElementById('searchIcon');

searchIcon.addEventListener('click', () => {
    document.querySelector('.mobile-menu').style.display = 'none';
    document.getElementById('searchAnimationContainer').style.display = 'flex';

    document.getElementById('searchAnimationContainer').innerHTML = `
    <header class="mobile-search-container">
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

// SVG HEART ANIMATION MOBILE
gsap.to('#svgHeart', {
    duration: 1,
    scale: 1.2,
    repeat: -1,
});

// SVG HEART ANIMATION DESKTOP
gsap.to('#svgHeartDesktop', {
    duration: 1,
    scale: 1.2,
    repeat: -1,
});

// COOKIES
if (!localStorage.getItem('COOKIES')) {
    document.querySelector('main').insertAdjacentHTML(
        'beforeend',
        `
        <div class="cookie">
            <h2>Den här webbplatsen använder kakor</h2>
            <div><button id="acceptCookies">Acceptera</button><button id="showMoreCookies">Visa detaljer</button></div>
        </div>`
    );

    document.getElementById('acceptCookies').addEventListener('click', () => {
        console.log('accept');
        localStorage.setItem('COOKIES', true);
        document.querySelector('.cookie').remove();
    });
}
