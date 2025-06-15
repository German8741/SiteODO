const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/register-order', async (req, res) => {
  try {
    const { phone, amount, orderNumber, returnUrl, failUrl } = req.body;
    const response = await axios.get('https://3dsec.sberbank.ru/payment/rest/register.do', {
      params: {
        userName: 'e39cde1qwe2',
        password: 'Rzwi=~bjE|Js?QqweU',
        orderNumber: orderNumber,
        amount: amount,
        returnUrl: returnUrl,
        failUrl: failUrl,
        phone: phone
      }
    });
    res.json({
      bankInvoiceId: response.data.sbolBankInvoiceId,
      orderId: response.data.orderId
    });
  } catch (error) {
    console.error('Ошибка:', error.response?.data || error.message);
    res.status(500).json({ error: 'Ошибка регистрации заказа' });
  }
});

app.post('/callback/sberbank', (req, res) => {
  console.log('Callback received:', req.body);
  res.status(200).send('OK');
});

app.listen(3000, () => console.log('Server running on port 3000'));