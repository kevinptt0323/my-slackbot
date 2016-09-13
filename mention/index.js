import { mentionList } from './config';

function mention(bot) {
  bot.on('message', ({type, user, channel, text, ...data}) => {
    if (type==='message' && !data.reply_to && !data.bot_id) {
      let text2 = text.toLowerCase();
      mentionList.forEach(({keywords, members}) => {
        for(let keyword of keywords) {
          if (text2.search(keyword.toLowerCase())!=-1) {
            bot.postMessage(channel, members.join(', '));
          }
        }
      });
    }
  });
}

function help(bot) {
  const helpContext =
    mentionList
      .reduce((arr, {keywords}) => arr.concat(keywords), [])
      .join(', ');
  bot.on('message', ({type, user, channel, text, ...data}) => {
    if (type==='message' && !data.reply_to && !data.bot_id) {
      let text2 = text.toLowerCase();
      if (text2=='help me') {
        bot.postMessage(channel, helpContext);
      }
    }
  });
}

export default (bot) => {
  mention(bot);
  help(bot);
};

