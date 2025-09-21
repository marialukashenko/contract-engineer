document.querySelectorAll('[data-target]').forEach(el => {
  el.addEventListener('click', function(e) {
    e.preventDefault(); // отменяем стандартный переход по ссылке
    const targetId = this.getAttribute('data-target');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});