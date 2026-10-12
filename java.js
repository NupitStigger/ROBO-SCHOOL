/* Меню-бургер на телефоне и кнопка «наверх» */
(() => {
  const header = document.querySelector('.header');
  const burger = document.getElementById('burger');
  const setOpen = open => {
    header.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', open);
  };

  burger.addEventListener('click', () => setOpen(!header.classList.contains('is-open')));
  document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => setOpen(false)));
  window.addEventListener('resize', () => { if (window.innerWidth > 800) setOpen(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });

  /* кнопка «наверх»: появляется после прокрутки вниз */
  const toTop = document.getElementById('toTop');
  const onScroll = () => toTop.classList.toggle('is-visible', window.scrollY > 500);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();