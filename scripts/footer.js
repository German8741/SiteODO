// footer.js - Скрипт для динамической вставки футера на все страницы

document.addEventListener('DOMContentLoaded', function() {
  // Проверяем, не существует ли уже футер
  if (!document.querySelector('.footer')) {
  // 1. Создаем HTML структуру футера
  const footerHTML = `
<div class="footer" style="width: 1440px; height: 785px; position: relative; background: white">
  <!-- Группа 1 -->
  <div class="footer__group footer__group--1">
    <!-- Афиша -->
    <div class="footer__section" style="width: 180px; left: 60px; top: 60px; position: absolute; justify-content: flex-start; align-items: flex-start; gap: 11px; display: inline-flex">
      <div style="justify-content: center; display: flex; flex-direction: column; color: black; font-size: 26px; font-family: Academy Condensed; font-weight: 500; word-wrap: break-word">
        <a href="afisha.html" style="text-decoration: none; color: black;">Афиша</a>
      </div>
    </div>

    <!-- Залы -->
    <div class="footer__section" style="width: 180px; left: 445px; top: 60px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 11px; display: inline-flex">
      <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 10.91px; display: inline-flex">
        <div style="justify-content: center; display: flex; flex-direction: column; color: black; font-size: 26px; font-family: Academy Condensed; font-weight: 500; word-wrap: break-word">
          <a href="zaly.html" style="text-decoration: none; color: black;">Залы</a>
        </div>
      </div>
      <div class="footer__sublinks" style="align-self: stretch; height: 107px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4.36px; display: flex">
        <div style="justify-content: center; display: flex; flex-direction: column; color: rgba(0, 0, 0, 0.60); font-size: 16px; font-family: Myriad Pro; font-weight: 400; word-wrap: break-word">
          <a href="koncertniy.html" style="text-decoration: none; color: rgba(0, 0, 0, 0.60);">Концертный зал</a>
        </div>
        <div style="justify-content: center; display: flex; flex-direction: column; color: rgba(0, 0, 0, 0.60); font-size: 16px; font-family: Myriad Pro; font-weight: 400; word-wrap: break-word">
          <a href="Foye.html" style="text-decoration: none; color: rgba(0, 0, 0, 0.60);">Фойе</a>
        </div>
        <div style="justify-content: center; display: flex; flex-direction: column; color: rgba(0, 0, 0, 0.60); font-size: 16px; font-family: Myriad Pro; font-weight: 400; word-wrap: break-word">
          <a href="zhucovskiy.html" style="text-decoration: none; color: rgba(0, 0, 0, 0.60);">Жуковский зал</a>
        </div>
        <div style="justify-content: center; display: flex; flex-direction: column; color: rgba(0, 0, 0, 0.60); font-size: 16px; font-family: Myriad Pro; font-weight: 400; word-wrap: break-word">
          <a href="maliy.html" style="text-decoration: none; color: rgba(0, 0, 0, 0.60);">Малый зал</a>
        </div>
        <div style="justify-content: center; display: flex; flex-direction: column; color: rgba(0, 0, 0, 0.60); font-size: 16px; font-family: Myriad Pro; font-weight: 400; word-wrap: break-word">
          <a href="ballada.html" style="text-decoration: none; color: rgba(0, 0, 0, 0.60);">Гусарская баллада</a>
        </div>
      </div>
    </div>

    <!-- История -->
    <div class="footer__section" style="width: 180px; left: 830px; top: 60px; position: absolute; justify-content: flex-start; align-items: flex-start; gap: 11px; display: inline-flex">
      <div style="justify-content: center; display: flex; flex-direction: column; color: black; font-size: 26px; font-family: Academy Condensed; font-weight: 500; word-wrap: break-word">
        <a href="istoriya.html" style="text-decoration: none; color: black;">История</a>
      </div>
    </div>

    <!-- Музей -->
    <div class="footer__section" style="width: 180px; left: 1215px; top: 60px; position: absolute; justify-content: flex-start; align-items: flex-start; gap: 11px; display: inline-flex">
      <div style="justify-content: center; display: flex; flex-direction: column; color: black; font-size: 26px; font-family: Academy Condensed; font-weight: 500; word-wrap: break-word">
        <a href="muzei.html" style="text-decoration: none; color: black;">Музей</a>
      </div>
    </div>
  </div>

  <!-- Группа 2 -->
  <div class="footer__group footer__group--2">
    <!-- Библиотека -->
    <div class="footer__section" style="width: 180px; left: 60px; top: 265px; position: absolute; justify-content: flex-start; align-items: flex-start; gap: 11px; display: inline-flex">
      <div style="justify-content: center; display: flex; flex-direction: column; color: black; font-size: 26px; font-family: Academy Condensed; font-weight: 500; word-wrap: break-word">
        <a href="biblioteka.html" style="text-decoration: none; color: black;">Библиотека</a>
      </div>
    </div>

    <!-- Пушкинская карта -->
    <div class="footer__section" style="width: 180px; left: 445px; top: 265px; position: absolute; justify-content: flex-start; align-items: flex-start; gap: 11px; display: inline-flex">
      <div style="justify-content: center; display: flex; flex-direction: column; color: black; font-size: 26px; font-family: Academy Condensed; font-weight: 500; word-wrap: break-word">
        <a href="pushkinskaya-karta.html" style="text-decoration: none; color: black;">Пушкинская карта</a>
      </div>
    </div>

    <!-- Контакты -->
    <div class="footer__section" style="width: 180px; left: 830px; top: 265px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 11px; display: inline-flex">
      <div style="align-self: stretch; justify-content: flex-start; align-items: center; gap: 10.91px; display: inline-flex">
        <div style="justify-content: center; display: flex; flex-direction: column; color: black; font-size: 26px; font-family: Academy Condensed; font-weight: 500; word-wrap: break-word">
          <a href="adres.html" style="text-decoration: none; color: black;">Контакты</a>
        </div>
      </div>
      <div class="footer__sublinks" style="align-self: stretch; height: 63px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4.36px; display: flex">
        <div style="justify-content: center; display: flex; flex-direction: column; color: rgba(0, 0, 0, 0.60); font-size: 16px; font-family: Myriad Pro; font-weight: 400; word-wrap: break-word">
          <a href="adres.html" style="text-decoration: none; color: rgba(0, 0, 0, 0.60);">Адрес</a>
        </div>
        <div style="justify-content: center; display: flex; flex-direction: column; color: rgba(0, 0, 0, 0.60); font-size: 16px; font-family: Myriad Pro; font-weight: 400; word-wrap: break-word">
          <a href="kontakty.html" style="text-decoration: none; color: rgba(0, 0, 0, 0.60);">Контакты</a>
        </div>
        <div style="justify-content: center; display: flex; flex-direction: column; color: rgba(0, 0, 0, 0.60); font-size: 16px; font-family: Myriad Pro; font-weight: 400; word-wrap: break-word">
          <a href="ystavs.html" style="text-decoration: none; color: rgba(0, 0, 0, 0.60);">Реквизиты</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Группа 3 (Логотип) -->
  <div class="footer__group footer__group--logo">
    <a href="https://t.me/GermanYusupov" class="footer__logo" style="width: 190px; height: 107px; left: 1080px; top: 479.50px; position: absolute;">
      <img style="width: 100%; height: 100%;" src="assets/images/GP_studio.png" alt="Logo">
    </a>
  </div>

  <!-- Группа 4 (Контакты и соцсети) -->
  <div class="footer__group footer__group--contacts">
    <!-- Контактная информация -->
    <div class="footer__section" style="width: 330px; left: 60px; top: 426px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 5px; display: inline-flex">
      <div style="align-self: stretch; justify-content: center; display: flex; flex-direction: column; color: #4C4C4C; font-size: 26px; font-family: Academy Condensed; font-weight: 500; word-wrap: break-word">Екатеринбург, улица Первомайская, 27</div>
      <div style="align-self: stretch; justify-content: center; display: flex; flex-direction: column; color: #C40005; font-size: 26px; font-family: Academy Condensed; font-weight: 500; word-wrap: break-word">
        <a href="https://yandex.ru/maps/org/dom_ofitserov_tsentralnogo_voyennogo_okruga_ministerstva_oborony_rossii/1075579811/?ll=60.604079%2C56.841228&mode=search&sctx=ZAAAAAgBEAAaKAoSCZjArbt5TE5AERlYx%2FFDa0xAEhIJ%2BkLIef8f3D8RL9y5MNKLxD8iBgABAgMEBSgKOABA3ZwGSAFqAnJ1nQHNzMw9oAEAqAEAvQHqYFK7wgEFo5fwgASCAhfQtNC%2B0Lwg0L7RhNC40YbQtdGA0L7QsooCAJICAJoCDGRlc2t0b3AtbWFwc6oCGDQ2OTA5OTc5NDI4LDIzMTE5NDA1NTMyNrACAQ%3D%3D&sll=60.603513%2C56.837944&sspn=0.073495%2C0.026845&text=%D0%B4%D0%BE%D0%BC%20%D0%BE%D1%84%D0%B8%D1%86%D0%B5%D1%80%D0%BE%D0%B2&utm_source=share&z=15" target="_blank" style="text-decoration: none; color: #C40005;">найти на карте</a>
      </div>
    </div>

    <div class="footer__section" style="width: 330px; left: 450px; top: 426px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 5px; display: inline-flex">
      <div style="align-self: stretch; justify-content: center; display: flex; flex-direction: column; color: black; font-size: 26px; font-family: Academy Condensed; font-weight: 500; word-wrap: break-word">
        <a href="tel:+73433500903" style="text-decoration: none; color: black;">+7 (343) 350-09-03</a>
      </div>
      <div style="justify-content: center; display: flex; flex-direction: column; color: #4C4C4C; font-size: 20px; font-family: Academy Condensed; font-weight: 500; word-wrap: break-word; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
        <a href="mailto:odoural@mail.ru" style="text-decoration: none; color: #4C4C4C;">odoural@mail.ru</a>
      </div>
      <div style="justify-content: center; display: flex; flex-direction: column; color: #4C4C4C; font-size: 16px; font-family: Myriad Pro; font-weight: 400; word-wrap: break-word">билетные кассы</div>
    </div>

    <div class="footer__section" style="width: 330px; left: 60px; top: 563px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 5px; display: inline-flex">
      <div style="align-self: stretch; justify-content: center; display: flex; flex-direction: column; color: black; font-size: 26px; font-family: Academy Condensed; font-weight: 500; word-wrap: break-word">
        <a href="tel:+73432501588" style="text-decoration: none; color: black;">+7 (343) 250-15-88</a>
      </div>
      <div style="justify-content: center; display: flex; flex-direction: column; color: #4C4C4C; font-size: 20px; font-family: Academy Condensed; font-weight: 500; word-wrap: break-word; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
        <a href="mailto:odoural@mail.ru" style="text-decoration: none; color: #4C4C4C;">odoural@mail.ru</a>
      </div>
      <div style="justify-content: center; display: flex; flex-direction: column; color: #4C4C4C; font-size: 16px; font-family: Myriad Pro; font-weight: 400; word-wrap: break-word">приемная ОДО</div>
    </div>

    <!-- Соцсети -->
    <div class="footer__social" style="width: 330px; padding-left: 2px; padding-right: 2px; left: 450px; top: 563px; position: absolute; justify-content: flex-start; align-items: flex-start; gap: 25px; display: inline-flex">
      <div style="width: 40px; height: 40px; position: relative; overflow: hidden">
        <a href="https://vk.com/odoural" target="_blank" style="width: 33.33px; height: 33.33px; left: 3.33px; top: 3.33px; position: absolute;">
          <img src="assets/svg_icons/вк.png" alt="VK Icon" style="width: 100%; height: 100%;">
        </a>
      </div>
      <div style="width: 40px; height: 40px; position: relative; overflow: hidden">
        <a href="https://rutube.ru/channel/54245019/" target="_blank" style="width: 33.33px; height: 33.33px; left: 3.33px; top: 3.33px; position: absolute;">
          <img src="assets/svg_icons/рутуб.png" alt="RuTube Icon" style="width: 100%; height: 100%;">
        </a>
      </div>
      <div style="width: 40px; height: 40px; position: relative; overflow: hidden">
        <a href="https://t.me/odoural" target="_blank" style="width: 33.33px; height: 33.33px; left: 3.33px; top: 3.33px; position: absolute;">
          <img src="assets/svg_icons/тг.png" alt="Telegram Icon" style="width: 100%; height: 100%;">
        </a>
      </div>
    </div>
  </div>

  <!-- Копирайт -->
  <div class="footer__group footer__group--copyright">
    <div class="footer__copyright" style="left: 60px; top: 700px; position: absolute; color: black; font-size: 18px; font-family: Academy Condensed; font-weight: 500; word-wrap: break-word">
      © 2025 ФГБУ "Дом офицеров Центрального военного округа" Минобороны России
    </div>
  </div>
</div>
`;

  document.body.insertAdjacentHTML('beforeend', footerHTML);
    
    console.log('Футер успешно добавлен на страницу');
    
    // Подсветка активной страницы
    const currentPage = location.pathname.split('/').pop();
    document.querySelectorAll('.footer a').forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.style.color = '#C40005';
        link.style.fontWeight = 'bold';
      }
    });
  } else {
    console.log('Футер уже существует на странице');
  }
});