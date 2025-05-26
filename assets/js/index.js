let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');
let nav = document.getElementById('nav'); // Get the nav element
let navOffset = nav.offsetTop; // Get the offset position of the nav bar

window.onscroll = () => {
    // Sticky navigation bar
    if (window.scrollY > navOffset) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }

    // Highlight active section link
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top > offset && top < offset + height) {
            navLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};
