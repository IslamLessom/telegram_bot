import { Telegraf } from 'telegraf'
const TOKEN = '7248391872:AAFbt1JlZ1cNtFdt2P6n7qrLlzR6Lxb_Pf4'
const bot = new Telegraf(TOKEN)

const web_link = "https://66aa9abbcabed40092e4b4ec--guileless-parfait-1b7560.netlify.app/"

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();