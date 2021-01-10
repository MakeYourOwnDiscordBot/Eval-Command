const { MessageEmbed } = require("discord.js");
const { inspect } = require('util');
module.exports = {
  name: "eval",
  ownerOnly: true,
  
  async execute(message,args,client) {

		var code = message.content.slice(client.prefix.length+4).split(' ');
		try {
      await eval(args.join(' '));
			message.react('✅');
		} catch (error) {
			message.channel.send({
				embed: {
					title: 'ERROR',
					description: `コード\`\`\`javascript\n ${code} \`\`\`ERROR内容\`\`\` ${error} \`\`\``
				}
			});
			message.react('❎');
		}

  }
};
