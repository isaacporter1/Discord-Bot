const { MessageButton } = require("discord.js");

module.exports = {
    name: 'invite',
    description: 'Ping!',
    async execute(message, args, Client){
        let button1 = new MessageButton()
            .setStyle('blurple')
            .setLabel('@someonelse')
            .setCustomId('click_to_function')
           
        let button2 = new MessageButton()
            .setStyle('blurple')
            .setLabel('@Zesty')
            .setCustomId('click_to_function')

        let button3 = new MessageButton()
            .setStyle('blurple')
            .setLabel('@someperson')
            .setCustomId('click_to_function')

         let button4 = new MessageButton()
            .setStyle('blurple')
            .setLabel('@rando')
            .setCustomId('click_to_function')

        message.channel.send("Hey", button1, button2, button3, button4);
    },
}
