const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

// Sustituye con el token de tu bot
const token = '7981820861:AAF9-EQmWTya5v-JsmdwOZQE6qdRJK6VqW8';

// URL de tu WebApp desplegada
const WEB_APP_URL = 'https://prestapp.online/#/welcome';

// Crea una instancia del bot
const bot = new TelegramBot(token, { polling: true });

// Crea una instancia de Express
const app = express();

// Configurar la WebApp URL al iniciar el bot
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Genera dinero REAL de manera segura y efectiva con NXT Mining, inicia ya con una produccion gratuita de 5tk al dia.', {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Iniciar la app', web_app: { url: WEB_APP_URL } }
        ]
      ]
    }
  });
});

// Manejar mensajes generales (opcional)
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `NXT MINING BOT-APP`);
});

// Servir contenido opcional (Angular) con Express
app.use(express.static('dist/mi-app-angular'));

// Iniciar servidor Express en el puerto 3000
app.listen(3001, () => {
  console.log('Servidor Express corriendo en http://localhost:3000');
});
