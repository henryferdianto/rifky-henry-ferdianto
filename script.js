/* ================== Toggle Ikon Menu (Navbar Mobile) ================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark'); // Mengganti ikon bars menjadi 'X'
    navbar.classList.toggle('active'); // Menampilkan/menyembunyikan menu
};


/* ================== Scroll Section Active Link ================== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* ================== Sticky Navbar ================== */
    // (Kode ini bisa ditambahkan jika ingin header 'menempel' saat di-scroll)
    // let header = document.querySelector('header');
    // header.classList.toggle('sticky', window.scrollY > 100);

    /* ================== Hapus toggle ikon dan navbar saat klik link (scroll) ================== */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


/* ================== Typed.js (Efek Ketikan) ================== */
const typed = new Typed('.multiple-text', {
    // MODIFIKASI: Mengganti string placeholder dengan teks dari HTML
    strings: ['AI/ML Engineer', 'Data Scientist', 'Data Analyst'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});