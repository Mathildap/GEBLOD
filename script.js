console.log('Hello');

let main = document.querySelector('main');

let cookie = `
<section>
<p>Text</p>
<button>Accept</button>
<button>Show</button>
</section>`;

const header = document.querySelector('header');

window.onscroll = () => {
    if (window.scrollY > 75) {
        header.classList.add('scroll-active');
    } else {
        header.classList.remove('scroll-active');
    }
};
