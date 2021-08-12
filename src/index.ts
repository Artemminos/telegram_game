require("@babel/register")({extensions: ['.js', '.ts']})
require('dotenv').config();
import {message_object, ProcessEnv, request_object} from "./types";
import {againOptions, gameOptions} from './option';

const TelegramApi = require('node-telegram-bot-api');


const token: any = process.env["API_TOKEN"];

const bot = new TelegramApi(token, {polling: true});

bot.setMyCommands([
    {command: '/start', description: 'Начальное приветствие'},
    {command: '/game', description: 'Угадай число'},
])


const chats: any = {};

const startGame = async (chat_id: number) => {
    await bot.sendMessage(chat_id, 'Отгдай число от 0 до 9', gameOptions)
    const randomNumber = Math.floor(Math.random() * 10);
    chats[chat_id] = randomNumber;
}
const start = () => {
    bot.on('message', async (msg: message_object) => {
        const {text} = msg;
        const chat_id = msg.chat.id;

//bot.sendSticker(chat_id,'sticker uri')
        if (text === '/game') {
            return startGame(chat_id)
        }
        return bot.sendMessage(chat_id, 'Не понимать')
    });
    bot.on('callback_query', async (msg: request_object) => {
        const data: string = msg.data;
        const chat_id: number = msg.message.chat.id;
        if (data === '/again') {
            return startGame(chat_id)
        }
        if (data === chats[chat_id]) {
            return await bot.sendMessage(chat_id, `Нифига ты отгадал цифру ${data}`, againOptions)
        } else {
            {/*
              if (data > chats[chat_id]) {
                return await bot.sendMessage(chat_id, `Перебор попробуй чуть меньше`, againOptions)
            } else {
                return await bot.sendMessage(chat_id, `Недобор попробуй чуть больше`, againOptions)
            }
            */
            }
            return await bot.sendMessage(chat_id, `Не отгадал бот загадал ${chats[chat_id]}`, againOptions)

        }
    })
}

start();