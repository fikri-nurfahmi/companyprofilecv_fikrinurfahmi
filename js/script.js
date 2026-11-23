document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('fikrinurfahmi_menu_toggle');
    const nav = document.getElementById('fikrinurfahmi_nav_menu');
    if (toggle && nav) {
        toggle.addEventListener('click', () => nav.classList.toggle('fikrinurfahmi_show'));
    }

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.fikrinurfahmi_nav_link').forEach((link) => {
        link.classList.toggle('fikrinurfahmi_active', link.getAttribute('href') === currentPath);
    });

    const contactForm = document.getElementById('fikrinurfahmi_contact_form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nama = document.getElementById('nama').value.trim();
            const email = document.getElementById('email').value.trim();
            const subjek = document.getElementById('subjek').value.trim();
            const pesan = document.getElementById('pesan').value.trim();

            alert(
                `Pesan terkirim ke CV Nusa Muda Karya!\n\n` +
                `Nama: ${nama}\n` +
                `Email: ${email}\n` +
                `Subjek: ${subjek}\n` +
                `Pesan: ${pesan}`
            );
            contactForm.reset();
        });
    }

    const loginForm = document.getElementById('fikrinurfahmi_login_form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            alert(
                `Login berhasil!\n\n` +
                `Username: ${username}\n` +
                `Password: ${password}`
            );
            loginForm.reset();
        });
    }
});
