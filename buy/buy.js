document.addEventListener('DOMContentLoaded', function() {
  // Принудительное обновление кэша
  if ('caches' in window) {
    caches.keys().then(function(cacheNames) {
      cacheNames.forEach(function(cacheName) {
        caches.delete(cacheName);
      });
    });
  }

  // Ticket counter functionality
  const ticketCount = document.querySelector('.ticket-count');
  const decrementBtn = document.querySelectorAll('.counter-btn')[0];
  const incrementBtn = document.querySelectorAll('.counter-btn')[1];
  
  let count = 1;
  
  decrementBtn.addEventListener('click', function() {
    if (count > 1) {
      count--;
      ticketCount.textContent = count;
    }
  });
  
  incrementBtn.addEventListener('click', function() {
    count++;
    ticketCount.textContent = count;
  });
  
  // Phone number formatting
  const phoneInput = document.querySelector('input[type="tel"]');
  
  phoneInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    let formattedValue = '';
    
    if (value.length > 0) {
      if (!value.startsWith('8')) {
        value = '8' + value;
      }
      
      formattedValue = '8';
      if (value.length > 1) {
        formattedValue += ' (' + value.slice(1, Math.min(4, value.length));
      }
      if (value.length > 4) {
        formattedValue += ') ' + value.slice(4, Math.min(7, value.length));
      }
      if (value.length > 7) {
        formattedValue += '-' + value.slice(7, Math.min(9, value.length));
      }
      if (value.length > 9) {
        formattedValue += '-' + value.slice(9, Math.min(11, value.length));
      }
    }
    
    e.target.value = formattedValue;
  });
  
  phoneInput.addEventListener('paste', function(e) {
    e.preventDefault();
    let pastedData = (e.clipboardData || window.clipboardData).getData('text');
    let digits = pastedData.replace(/\D/g, '');
    if (digits) {
      phoneInput.value = digits;
      phoneInput.dispatchEvent(new Event('input'));
    }
  });
  
  // Form submission
  const paymentForm = document.querySelector('.user-data-block');
  paymentForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Получение данных формы
    const phone = phoneInput.value.replace(/\D/g, '');
    const email = document.querySelector('input[type="email"]').value;
    const lastName = document.querySelector('input[placeholder="Юсупов"]').value;
    const firstName = document.querySelector('input[placeholder="Герман"]').value;
    const ticketQuantity = parseInt(ticketCount.textContent);
    const amount = ticketQuantity * 10000; // 100.00 RUB за билет, в копейках

    // Валидация
    if (!email || !lastName || !firstName || !phone) {
      alert('Заполните все поля формы!');
      return;
    }

    try {
      // Запрос на сервер для регистрации заказа
      const response = await fetch('/buy/register-order.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: phone,
          email: email,
          lastName: lastName,
          firstName: firstName,
          amount: amount,
          orderNumber: `order-${Date.now()}`,
          returnUrl: 'https://cb83634.tw1.ru/buy/success.html',
          failUrl: 'https://cb83634.tw1.ru/buy/fail.html'
        })
      });
      const orderData = await response.json();

      if (orderData.error || !orderData.bankInvoiceId) {
        throw new Error(orderData.error || 'bankInvoiceId не получен');
      }

      // Проверка наличия SberPay SDK
      if (!window['payment-widget']) {
        throw new Error('SberPay SDK не загружен');
      }

      // Инициализация и открытие виджета
      const { createWidget } = window['payment-widget'];
      const widget = createWidget('UAT'); // Тестовая среда
      widget.open({
        bankInvoiceId: orderData.bankInvoiceId,
        backUrl: 'https://cb83634.tw1.ru/buy/success.html',
        lifeTime: 1200000, // 20 минут
        isFinishPage: true,
        finishPageTimeOut: 10
      }).then((result) => {
        console.log('Результат оплаты:', result); // success, return, cancel
      }).catch((error) => {
        console.error('Ошибка виджета:', error);
        alert('Ошибка при оплате. Попробуйте позже.');
      });

    } catch (error) {
      console.error('Ошибка при инициализации оплаты:', error);
      alert('Ошибка при обработке платежа: ' + error.message);
    }
  });
});