const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
toggle.addEventListener('click', () => {
 const open = navigation.classList.toggle('open');
 toggle.setAttribute('aria-expanded', String(open));
 if (open) navigation.querySelector('a[aria-current]')?.focus();
});
document.addEventListener('keydown', event => {
 if (event.key === 'Tab' && navigation.classList.contains('open') && window.matchMedia('(max-width:700px)').matches) {
  const items = [toggle, ...navigation.querySelectorAll('a')];
  const index = items.indexOf(document.activeElement);
  if (event.shiftKey && index === 0) { event.preventDefault(); items.at(-1).focus(); }
  if (!event.shiftKey && index === items.length - 1) { event.preventDefault(); toggle.focus(); }
 }
 if (event.key === 'Escape' && navigation.classList.contains('open')) {
  navigation.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.focus();
 }
});
