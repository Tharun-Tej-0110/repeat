// bot.js

const TelegramBot = require('node-telegram-bot-api');

// Replace with your own token
const token = '7059504784:AAEAyX2ZVUM74XwJSRKUX1jv_njh3YfDU-8';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listen for '/start' command
bot.onText(/\/start(.*)/, (msg, match) => {
    const chatId = msg.chat.id;
    const startParams = match[1].trim(); // Get start parameters

    // Send a picture and a message
    const photo = 'https://example.com/path/to/your/photo.jpg'; // Replace with your image URL
    const message = startParams ? `Hello! You started with: ${startParams}` : 'Hello! Welcome to the bot!';

    // Create inline keyboard buttons
    const inlineKeyboard = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Open Mini App',
                        url: 'https://repeatcoin.io', // Replace with your mini app URL
                    },
                ],
                [
                    {
                        text: 'Visit Website',
                        url: 'https://t.me/repeatcoin', // Replace with your website URL
                    },
                ],
            ],
        },
    };

    // Send photo and message with inline keyboard
    bot.sendPhoto(chatId, photo, { caption: message, ...inlineKeyboard });
});
