console.log('Hello');

let main = document.querySelector('main');

let cookie = `
<section>
<p>Text</p>
<button>Accept</button>
<button>Show</button>
</section>`;

// function checkScroll() {
//     console.log('checkScroll');
//     if (
//         document.body.scrollTop >= 1 ||
//         document.documentElement.scrollTop >= 1
//     ) {
//         console.log('scroll');
//     }
// }

// checkScroll();
const header = document.querySelector('header');

window.onscroll = () => {
    if (window.scrollY > 75) {
        console.log('scroll');
        header.classList.add('scroll-active');
    } else {
        header.classList.remove('scroll-active');
    }
};
