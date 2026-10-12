/* Переводы. Русский текст берётся прямо из HTML, поэтому здесь только қазақша и English.
   Ключ = значение атрибута data-i18n (текст), data-i18n-ph (placeholder) или data-i18n-aria (aria-label). */
(() => {
  const DICT = {
    kk: {
      'nav.about': 'Мектеп туралы', 'nav.trainers': 'Тренерлер', 'nav.price': 'Құны',
      'hero.text': 'Бастауыш мектеп педагогтеріне арналған робототехника бойынша біліктілікті арттыру курстары',
      'hero.btn': 'Курсқа жазылу',
      'about.lead': '<b>Robo School</b> — робототехника және бағдарламалау саласындағы педагогикалық кадр резервін қалыптастыруға арналған мекеме',
      'stat.1': 'Робототехниканың әртүрлі бағыттары бойынша ОӘК',
      'stat.2': 'Робототехника іске қосылған мектептер',
      'stat.3': 'Біліктілікті арттыру курстарынан өткен педагогтер',
      'stat.4': 'Өз орталықтарында оқытылған балалар',
      'b.title': 'Курстан кейін сіз не аласыз',
      'b1.t': 'Куәлік', 'b2.t': 'Білім', 'b3.t': 'Тәжірибе', 'b3.tip': 'Бос орындар болған жағдайда',
      'b1.p': 'Білім беру ұйымдарында 6–12 жастағы балаларға робототехниканы оқытуға құқық беретін',
      'b2.p': 'Робототехника және бағдарламалау бойынша оқу-әдістемелік кешендерді әзірлеу негіздері бойынша',
      'b3.p': 'R:ED LAB базасында робототехниканы оқыту бойынша тәжірибеден өту мүмкіндігі (офлайн немесе онлайн форматта)',
      'tr.title': 'Кәсіби тренерлер',
      'role.robo': 'робототехника пәнінің мұғалімі', 'role.prog': 'бағдарламалау пәнінің мұғалімі',
      'more': 'Толығырақ',
      'pr.title': 'Қажетті пакетті таңдаңыз',
      'plan.1': 'Робототехника және<br>бағдарламалау бойынша ОӘК',
      'plan.2': 'Робототехника бойынша ОӘК',
      'plan.3': 'Бағдарламалау бойынша ОӘК',
      'apply.btn': 'Өтінім қалдыру',
      'promo.h': 'Курсқа 10% жеңілдікпен<br>жазылыңыз',
      'promo.p': 'Акция 2022 жылғы 10 наурызға дейін жарамды',
      'promo.submit': 'Өтінімді рәсімдеу', 'promo.sent': 'Өтінім жіберілді ✓',
      'ph.name': 'Аты-жөні', 'ph.phone': 'Телефон', 'ph.email': 'E-mail',
      'apply.title': 'Курсқа өтінім', 'apply.send': 'Өтінімді жіберу',
      'apply.note': 'Түймені басу арқылы сіз жеке деректерді өңдеуге келісім бересіз',
      'done.t': 'Өтінім жіберілді', 'done.p': 'Біз сізбен жақын арада хабарласамыз.',
      'close': 'Жабу', 'pack': 'Пакет',
      'tab.edu': 'Білімі', 'tab.work': 'Жұмыс тәжірибесі', 'tab.awards': 'Марапаттар',
      'empty': 'Ақпарат жақында пайда болады',
      'menu': 'Мәзір', 'top': 'Жоғары',
      'name.t6': 'Тренер 6'
    },
    en: {
      'nav.about': 'About', 'nav.trainers': 'Trainers', 'nav.price': 'Pricing',
      'hero.text': 'Professional development courses in robotics for primary school teachers',
      'hero.btn': 'Sign up for the course',
      'about.lead': '<b>Robo School</b> is an institution for building a talent pool of teachers in robotics and programming',
      'stat.1': 'Teaching kits across various robotics tracks',
      'stat.2': 'Schools where robotics has been launched',
      'stat.3': 'Teachers who completed training courses',
      'stat.4': 'Children taught at our own centers',
      'b.title': 'What you get after the course',
      'b1.t': 'Certificate', 'b2.t': 'Knowledge', 'b3.t': 'Practice', 'b3.tip': 'Subject to availability',
      'b1.p': 'Entitles you to teach robotics to children aged 6–12 in educational institutions',
      'b2.p': 'Fundamentals of developing teaching kits for robotics and programming',
      'b3.p': 'A chance to do a teaching internship in robotics at R:ED LAB (offline or online)',
      'tr.title': 'Professional trainers',
      'role.robo': 'robotics teacher', 'role.prog': 'programming teacher',
      'more': 'Learn more',
      'pr.title': 'Choose your package',
      'plan.1': 'Teaching kit for robotics<br>and programming',
      'plan.2': 'Teaching kit for robotics',
      'plan.3': 'Teaching kit for programming',
      'apply.btn': 'Submit a request',
      'promo.h': 'Sign up for the course<br>with a 10% discount',
      'promo.p': 'Offer valid until March 10, 2022',
      'promo.submit': 'Place request', 'promo.sent': 'Request sent ✓',
      'ph.name': 'Name', 'ph.phone': 'Phone', 'ph.email': 'E-mail',
      'apply.title': 'Course request', 'apply.send': 'Send request',
      'apply.note': 'By clicking the button, you agree to the processing of personal data',
      'done.t': 'Request sent', 'done.p': 'We will contact you shortly.',
      'close': 'Close', 'pack': 'Package',
      'tab.edu': 'Education', 'tab.work': 'Work experience', 'tab.awards': 'Awards',
      'empty': 'Information coming soon',
      'menu': 'Menu', 'top': 'Back to top',
      'name.irina': 'Irina Laim', 'name.marina': 'Marina Orlova', 'name.maxim': 'Maxim Petrov',
      'name.konstantin': 'Konstantin Nazarov', 'name.liza': 'Liza Vesennyaya', 'name.t6': 'Trainer 6'
    }
  };

  /* русский текст запоминаем из самой страницы */
  const ru = {
    pack: 'Пакет', 'promo.sent': 'Заявка отправлена ✓', empty: 'Информация скоро появится'
  };
  document.querySelectorAll('[data-i18n]').forEach(e => {
    const k = e.dataset.i18n; if (!(k in ru)) ru[k] = e.innerHTML.trim();
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(e => {
    const k = e.dataset.i18nPh; if (!(k in ru)) ru[k] = e.getAttribute('placeholder');
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(e => {
    const k = e.dataset.i18nAria; if (!(k in ru)) ru[k] = e.getAttribute('aria-label');
  });
  DICT.ru = ru;

  let lang = 'ru';
  window.t = key => (DICT[lang] && DICT[lang][key]) ?? ru[key] ?? key;
  window.getLang = () => lang;

  function setLang(l) {
    if (!DICT[l]) l = 'ru';
    lang = l;
    document.documentElement.lang = l;
    document.querySelectorAll('[data-i18n]').forEach(e => { e.innerHTML = window.t(e.dataset.i18n); });
    document.querySelectorAll('[data-i18n-ph]').forEach(e => e.setAttribute('placeholder', window.t(e.dataset.i18nPh)));
    document.querySelectorAll('[data-i18n-aria]').forEach(e => e.setAttribute('aria-label', window.t(e.dataset.i18nAria)));
    document.querySelectorAll('.lang button').forEach(b => {
      const on = b.dataset.lang === l;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on);
    });
    try { localStorage.setItem('lang', l); } catch (e) {}
    document.dispatchEvent(new CustomEvent('langchange', { detail: l }));
  }
  window.setLang = setLang;

  document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  const browser = (navigator.language || '').slice(0, 2);
  setLang(DICT[saved] ? saved : (DICT[browser] ? browser : 'ru'));
})();