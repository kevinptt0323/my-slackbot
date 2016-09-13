import SlackBot from 'slackbots';
import config from './config';

const bot = new SlackBot(config.bot);

bot.on('start', () => {
  console.log('Hello, slack bot');
});

