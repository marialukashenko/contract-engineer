function equalizeHeights() {
  const cards = document.querySelectorAll('.contact-card');
  if (!cards.length) return;

  // Сбрасываем прежние размеры
  cards.forEach(card => {
    card.style.height = 'auto';
    card.style.minHeight = 'auto';
  });

  // Находим максимальную
  let maxHeight = 0;
  cards.forEach(card => {
    maxHeight = Math.max(maxHeight, card.offsetHeight);
  });

  // Применяем всем
  cards.forEach(card => card.style.minHeight = maxHeight + 'px'); // 👈 заменили height на minHeight
}

// События
window.addEventListener('load', equalizeHeights);
window.addEventListener('resize', equalizeHeights);
