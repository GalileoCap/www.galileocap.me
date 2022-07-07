function setDataTheme(to) { document.documentElement.setAttribute('data-theme', to); }

if (window.matchMedia) {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) setDataTheme('dark'); //A: Is in dark mode
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    setDataTheme(newColorScheme);
  });
}

document.getElementById('theme-toggle').addEventListener('click', event => {
  let currentTheme = document.documentElement.getAttribute('data-theme');
  setDataTheme(currentTheme == 'dark' ? 'light' : 'dark');
});

document.getElementById('menu-trigger').addEventListener('click', event => {
  document.getElementById('menu').classList.toggle('hide-on-phone');
});
