const keep_alive = require('./keep_alive.js')
let Discord = require("discord.js");
let client = new Discord.Client();

client.on("ready", () => {
  client.user.setActivity("קרן קיימת לישראל", { type: "WATCHING" });
});

client.on("message", (message) => {
  if (message.mentions.has(client.user)) {
    let answers = [
      "עץ אקליפטוס",
      "עץ אגס",
      "עץ אורן",
      "עץ אפרסק",
      "עץ אשכולית",
      "עץ אשל",
      "עץ בוקי",
      "עץ בורז",
      "עץ ברוש",
      "עץ גפן",
      "עץ דקל",
      "עץ הדס",
      "עץ הדסה",
      "עץ הרוביניה",
      "עץ וואלנוט",
      "עץ זית",
      "עץ חוח",
      "עץ חוחית",
      "עץ חוחית קישונית",
      "עץ חורש",
      "עץ חרוב",
      "עץ טוט",
      "עץ יערות מהפך",
      "עץ יערות משובים",
      "עץ כורכום",
      "עץ כרמי יין",
      "עץ לבנה",
      "עץ לילך",
      "עץ לילך הסברי",
      "עץ מאפה",
      "עץ מדרס",
      "עץ מור",
      "עץ מיצרון",
      "עץ מלון",
      "עץ מלך",
      "עץ מנטה",
      "עץ מסיסוית",
      "עץ נגיד",
      "עץ נטל",
      "עץ נטלי",
      "עץ נורית",
      "עץ נטע",
      "עץ נטע תפוחים",
      "עץ נטעים",
      "עץ נטעי עץ",
      "עץ ניאופנט",
      "עץ נפטית",
      "עץ נעורה",
      "עץ נפח",
      "עץ נפח מצופה",
      "עץ נפט",
      "עץ נפטר",
      "עץ נקטר",
      "עץ סנטור",
      "עץ סרסור",
      "עץ עברונה",
      "עץ עצים",
      "עץ עץ",
      "עץ פונט",
      "עץ פריה",
      "עץ פרוס",
      "עץ פרופיריה",
      "עץ פרסה",
      "עץ צדיק",
      "עץ צדיקי",
      "עץ קורטיסולה",
      "עץ קורטינוס",
      "עץ קישוא",
      "עץ קישון",
      "עץ קוקי",
      "עץ קסות",
      "עץ קסוס",
      "עץ קיקי",
      "עץ קורק",
      "עץ קרח",
      "עץ קרמיט",
      "עץ קרמיט מלכותי",
      "עץ רותיה",
      "עץ רמון",
      "עץ רמונים",
      "עץ רמונית",
      "עץ רמית",
      "עץ רמית בצפון",
      "עץ רמית פראית",
      "עץ רוז",
      "עץ שותית",
      "עץ שיטה",
      "עץ שיח",
      "עץ שלוחית",
      "עץ תפוח",
      "עץ תות",
      "עץ תותיה",
      "עץ תותית",
      "עץ תותיות",
      "עץ תינוק",
      "עץ תמר",
      "עץ תמרה",
    ];
    message.channel.send(
      `${answers[Math.floor(Math.random() * answers.length)]}`,
    );
  }
});

client.login(process.env.TOKEN);
