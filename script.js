// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) current = s.id;
  });
  navLinks.forEach(l => {
    l.classList.remove('active');
    if (l.getAttribute('href') === '#' + current) l.classList.add('active');
  });
});

// Close mobile nav on link click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('navMenu');
    if (menu.classList.contains('show')) {
      document.querySelector('.navbar-toggler').click();
    }
  });
});

// Contact form
function sendMsg() {
  const name = document.getElementById('cName').value.trim();
  const email = document.getElementById('cEmail').value.trim();
  const msg = document.getElementById('cMsg').value.trim();
  if (!name || !email || !msg) {
    alert('Please fill in all fields.');
    return;
  }
  document.getElementById('formSuccess').classList.remove('d-none');
  document.getElementById('cName').value = '';
  document.getElementById('cEmail').value = '';
  document.getElementById('cMsg').value = '';
  setTimeout(() => document.getElementById('formSuccess').classList.add('d-none'), 4000);
}
