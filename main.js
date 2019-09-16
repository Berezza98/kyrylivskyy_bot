const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '949924997:AAHgYaibeStX8DlnBI_TAC1rSwmP0IQ1zvc';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.onText(/^\/start$/, function (msg) {
  const chatId = msg.chat.id;
  const opts = {
      reply_markup: {
          resize_keyboard: true,
          one_time_keyboard: true,
          keyboard: [ ['Будинки 1-4', 'Будинки 5-6'] ]
      }
  };

  bot.sendMessage(chatId, "Виберіть необхідну трансляцію \nТрансляція актуальна протягом однієї хвилини", opts);
});

bot.onText(/\d-\d$/, (msg, match) => {
  const timeStamp = Math.floor(new Date().getTime() / 1000);
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  if (match[0] === "1-4") {
    bot.sendVideo(chatId, `http://vs9.videoprobki.com.ua/tvukrbud/cam38.mp4?time${timeStamp}`);
  } else if (match[0] === "5-6") {
    bot.sendVideo(chatId, `http://vs8.videoprobki.com.ua/tvukrbud/cam32.mp4?time${timeStamp}`);
  }
});