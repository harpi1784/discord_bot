const { Events } = require('discord.js');
const {message1, message2, message3} = require("../config.json");


module.exports = {
	name: Events.MessageCreate,
	execute(message) {
        if (message.author.id == "472714545723342848") {
            if (message.content == message1 ||
             message.content == message2 ||
            message.content == message3) {   
                message.delete();
            }
            console.log(message.content)
        }  
	},
};