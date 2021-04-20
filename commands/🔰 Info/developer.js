const {
	MessageEmbed
} = require("discord.js")
const config = require("../../botconfig/config.json")
const ee = require("../../botconfig/embed.json")
const emoji = require(`../../botconfig/emojis.json`);
module.exports = {
	name: "developer",
	category: "🔰 Info",
	aliases: ["dev", "tomato"],
	description: "Shows Information about the Developer",
	useage: "developer",
	run: async (client, message, args) => {
		try {
			message.channel.send(new MessageEmbed()
				.setColor(ee.color)
				.setFooter(ee.footertext + " | Dev Avinash#6364", ee.footericon)
				.setTimestamp()
				.setThumbnail("https://cdn.discordapp.com/avatars/442355791412854784/17ccf170d62e5e0040660d003b075528.webp")
				.setTitle("ABOUT MY DEV")
				.setURL("https://discord.gg/9SHFZcEmpA")
				.setDescription(`> Hello I am Avi I was Rewrited This Bot code by Tomato#6966`)
			).catch(error => console.log(error));
		} catch (e) {
			console.log(String(e.stack).bgRed)
			return message.channel.send(new MessageEmbed()
				.setColor(ee.wrongcolor)
				.setFooter(ee.footertext, ee.footericon)
				.setTitle(`${emoji.msg.ERROR} ERROR | An error occurred`)
				.setDescription(`\`\`\`${e.message}\`\`\``)
			);
		}
	}
}
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Milrato Development | https://milrato.eu
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
