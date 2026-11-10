document.addEventListener('DOMContentLoaded', () => {
    // 1. Toggle Menu Navigasi Mobile (Hamburger)
    const fikrinurfahmiToggle = document.getElementById('fikrinurfahmi_menu_toggle');
    const fikrinurfahmiNav = document.getElementById('fikrinurfahmi_nav_menu');

    if (fikrinurfahmiToggle && fikrinurfahmiNav) {
        fikrinurfahmiToggle.addEventListener('click', () => {
            fikrinurfahmiNav.classList.toggle('fikrinurfahmi_show');
        });
    }

    // 2. Auto-Active Navbar Link Berdasarkan Halaman yang Sedang Dibuka
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.fikrinurfahmi_nav_link');

    navLinks.forEach(link => {
        // Hapus kelas aktif bawaan dari HTML
        link.classList.remove('fikrinurfahmi_active');
        
        // Ambil atribut href link
        const linkHref = link.getAttribute('href');
        
        // Jika href cocok dengan halaman saat ini, tambahkan kelas aktif (oranye)
        if (linkHref === currentPath) {
            link.classList.add('fikrinurfahmi_active');
        }
    });

    // 3. Validasi Form Kontak
    const fikrinurfahmiContactForm = document.getElementById('fikrinurfahmi_contact_form');
    if (fikrinurfahmiContactForm) {
        fikrinurfahmiContactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Pesan Anda telah berhasil terkirim ke CV Nusa Muda Karya!');
            fikrinurfahmiContactForm.reset();
        });
    }

    // 4. Validasi Form Login
    const fikrinurfahmiLoginForm = document.getElementById('fikrinurfahmi_login_form');
    if (fikrinurfahmiLoginForm) {
        fikrinurfahmiLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Login Berhasil! Selamat Datang di Dashboard internal CV Nusa Muda Karya.');
            fikrinurfahmiLoginForm.reset();
        });
    }
});