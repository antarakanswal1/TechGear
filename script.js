const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

function filterItems(category) {
  const items = document.querySelectorAll('.product-card');

  items.forEach(item => {
      if (category === 'all') {
          item.style.display = 'block';
      } else if (item.classList.contains(category)) {
          item.style.display = 'block';
      } else {
          item.style.display = 'none';
      }
  });
}