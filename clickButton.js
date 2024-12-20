const { Client, Message, MessageEmbed} = require("discord.js");
const  {MessageButton } = require("discord-buttons");

module.exports = {
    name: "clickButton",
    async execute(button, client) {
        if(button.id === "click_to_function") {
            button.channel.send("Button Works.");
        }
    }
   
       

}