TELEGRAM_BOT_TOKEN = "5904669112:AAFM7ECLtyHw8P6maD2QpUCP8lCJh8S97rM";
const TeleBot = require("telebot");
const os = require("os");
const bot = new TeleBot(TELEGRAM_BOT_TOKEN);
const chatIds = [];
const CronJob = require("cron").CronJob;
const job = new CronJob("* * * * * *", function () {
  // console.log("You will see this message every second");
  chatIds.forEach((chatId) => {
    bot.sendMessage(chatId, "🤣");
    // bot.sendPhoto(chatId, 'https://www.section.io/engineering-education/authors/ck-muithi/avatar_hu25b829c8f03ccf3982871de8ac4ed264_105111_180x0_resize_q75_box.jpg')
  })
},null,true);



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
