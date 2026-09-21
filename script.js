const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const translations = {
  en: {
    navProjects:'Projects', navAbout:'About', navServices:'Services', headerContact:'Discuss a project', eyebrow:'Construction company · since 2012', heroTitle1:'BUILD.', heroTitle2:'RELIABLY.', heroLead:'We create spaces that work for you today and stay valuable tomorrow.', projectsCta:'Our projects', tellUs:'Tell us about your project', years:'years of experience', scroll:'Scroll down', construction:'Construction', reconstruction:'Reconstruction', renovation:'Renovation', aboutLabel:'About us', introTitle1:"We don't just build.", introTitle2:'We create foundations.', introText:'FORMAT is a team of architects, engineers and craftspeople. We take care of the full cycle — from the first idea and design to handover.', learnMore:'Learn more', objects:'completed<br>projects', featured:'Featured projects', allProjects:'All projects', whatWeDo:'What we do', service1:'General contracting', service1Text:'We organise the entire process and take responsibility for the result.', service2:'Design & planning', service2Text:'We find precise solutions for ambitious briefs.', service3:'Reconstruction', service3Text:'We give existing buildings a new life.', service4:'Finishing & renovation', service4Text:'We create interiors people want to spend time in.', contactLabel:"Let's talk", contactTitle1:'Have a project?', contactTitle2:"Let's build it.", footerTagline:'Building with character.', footerServices:'Construction · Reconstruction · Renovation', backTop:'Back to top ↑'
  },
  ru: {
    navProjects:'Проекты', navAbout:'О компании', navServices:'Услуги', headerContact:'Обсудить проект', eyebrow:'Строительная компания · с 2012 года', heroTitle1:'СТРОЙ.', heroTitle2:'НАДЁЖНО.', heroLead:'Создаём пространства, которые работают на вас сегодня и остаются ценными завтра.', projectsCta:'Наши проекты', tellUs:'Рассказать о задаче', years:'лет опыта', scroll:'Листайте вниз', construction:'Строительство', reconstruction:'Реконструкция', renovation:'Ремонт', aboutLabel:'О компании', introTitle1:'Не просто строим.', introTitle2:'Создаём основу.', introText:'ФОРМАТ — команда архитекторов, инженеров и мастеров. Берём на себя весь цикл: от идеи и проектирования до сдачи объекта.', learnMore:'Узнать больше', objects:'построенных<br>объектов', featured:'Избранные проекты', allProjects:'Все проекты', whatWeDo:'Что мы делаем', service1:'Генеральный подряд', service1Text:'Организуем весь процесс и отвечаем за результат.', service2:'Проектирование', service2Text:'Находим точные решения для амбициозных задач.', service3:'Реконструкция', service3Text:'Даём существующим зданиям новую жизнь.', service4:'Отделка и ремонт', service4Text:'Создаём интерьер, в котором хочется быть.', contactLabel:'Давайте знакомиться', contactTitle1:'Есть проект?', contactTitle2:'Построим.', footerTagline:'Строим с характером.', footerServices:'Строительство · Реконструкция · Ремонт', backTop:'Наверх ↑'
  }
};

function setLanguage(language) {
  const dictionary = translations[language];
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll('[data-language]').forEach((button) => button.classList.toggle('active', button.dataset.language === language));
  localStorage.setItem('format-language', language);
  document.title = language === 'ru' ? 'ФОРМАТ — строим надёжно' : 'FORMAT — built reliably';
}

document.querySelectorAll('[data-language]').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.language)));
setLanguage(localStorage.getItem('format-language') || 'en');

const revealItems = document.querySelectorAll('.project-card, .service-item');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => {
  item.classList.add('reveal');
  observer.observe(item);
});
