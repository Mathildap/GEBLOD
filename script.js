// CHANGE HEADER COLOR
const header = document.querySelector('header');
const desktopHeader = document.querySelector('.desktop-menu');

checkWidthAndColorHeader();

window.addEventListener('resize', () => {
    checkWidthAndColorHeader();
});

function checkWidthAndColorHeader() {
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
}

// OPEN MENU
const burgerIcon = document.getElementById('burgerIcon');

burgerIcon.addEventListener('click', () => {
    openMenu();
});

function openMenu() {
    if (window.innerWidth > 550) {
        document.querySelector('.mobile-menu-slide').style.width = '50%';
        document.querySelector('.mobile-menu-slide').style.boxShadow =
            '0px 0px 4px 4px #00000525';
    } else {
        document.querySelector('.mobile-menu-slide').style.width = '100%';
    }
}

// CLOSE MENU
closeMenu.addEventListener('click', () => {
    document.querySelector('.mobile-menu-slide').style.width = '0%';
    document.querySelector('.mobile-menu-slide').style.boxShadow = '0';
});

// OPEN SEARCH
const searchIcon = document.getElementById('searchIcon');

searchIcon.addEventListener('click', () => {
    openSearch();
});

function openSearch() {
    document.querySelector('.mobile-search-slide').style.width = '100%';
    document.querySelector('.mobile-search-slide').style.boxShadow =
        '0px 0px 4px 4px #00000525';
}

// CLOSE SEARCH
document.getElementById('xIcon').addEventListener('click', () => {
    console.log('close');
    document.querySelector('.mobile-search-slide').style.width = '0%';
    document.querySelector('.mobile-search-slide').style.boxShadow =
        '0px 0px 0px 0px #fff';
});

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
