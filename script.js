const status = document.querySelector('#status');

document.querySelector('#helloBtn').addEventListener('click', () => {
  status.textContent = 'Hello from GitHub Pages!';
});

const themeBtn = document.querySelector('#themeBtn');
function applyTheme(dark) {
  document.body.classList.toggle('dark', dark);
  themeBtn.setAttribute('aria-pressed', String(dark));
  try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
}
try { applyTheme(localStorage.getItem('theme') === 'dark'); } catch (e) {}
themeBtn.addEventListener('click', () => applyTheme(!document.body.classList.contains('dark')));
