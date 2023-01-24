TELEGRAM_BOT_TOKEN = "5904669112:AAFM7ECLtyHw8P6maD2QpUCP8lCJh8S97rM";
const TeleBot = require("telebot");
const os = require("os");
const bot = new TeleBot(TELEGRAM_BOT_TOKEN);
const chatIds = [];
const CronJob = require("cron").CronJob;
const job = new CronJob("0/5 * * * * *", function () {
  // console.log("You will see this message every second");
  // chatIds.forEach((chatId) => {
  //   bot.sendMessage(chatId, "You are hacked");
  //   bot.sendPhoto(chatId, 'https://img.freepik.com/premium-vector/smile-face-with-middle-finger-gesture-t-shirt-print-vector-hand-drawn-cartoon-character-illustration-smile-face-middle-finger-gesture-print-t-shirt-poster-concept_92289-3299.jpg?w=2000')
  // })
},null,true);


bot.on("text", (msg) => msg.reply.text(`Name: ${msg.from.first_name}\nQurilma nomi: ${os.type()}`));

bot.on(["/start"], (msg) => {
  let chatId = msg.chat.id;
  if (!chatIds.includes(chatId)) {
    chatIds.push(chatId);
    // msg.reply.text("Boshladik!");
    job.start();
  }
});
bot.on(["/stop"], (msg) => {
  let chatId = msg.chat.id;
  chatIds.pop(chatId);
});

bot.start();
