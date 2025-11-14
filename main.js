
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
if(hamburger && menu) {
  hamburger.onclick = function() {
    menu.classList.toggle('show');
  };
  const menuLinks = menu.querySelectorAll('a');
  menuLinks.forEach(link =>
    link.addEventListener('click', () => menu.classList.remove('show'))
  );
}
const colorBtn = document.getElementById('colorModeBtn');
if(colorBtn) {
  colorBtn.onclick = function() {
    document.body.classList.toggle('dark');
  };
}