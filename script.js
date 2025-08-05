const toggle = document.getElementById('theme-toggle');
const body = document.body;

const saved = localStorage.getItem('theme');
if (saved === 'dark') {
  body.classList.add('dark');
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});
