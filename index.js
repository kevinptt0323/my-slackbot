import SlackBot from 'slackbots';
import config from './config';

import mention from './mention';

const bot = new SlackBot(config.bot);

mention(bot);

bot.on('start', () => {
  console.log('Hello, slack bot');

  //bot.postTo('kevinptt', 'hello, world').then(function(data) {
  //  console.log(data);
  //});

});

bot.on('message', ({type, user, channel, text, ...data}) => {
  if (type==='message') {
    console.log(data);
    console.log(`${user} @ ${channel} : ${text}`);
  }
});
