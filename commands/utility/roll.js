const { SlashCommandBuilder } = require('discord.js');

function getRandomInt(max) {
    return (1 + Math.floor(Math.random() * max));
  }

function isInteger(param) {
    const num = +param;
    return Number.isInteger(num);
}

function getInt(param) {
    const num = +param;
    return num;
}


module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Rolling')
        .addStringOption(dice => 
        dice.setName('dice').setDescription('rolling dice')),
	async execute(interaction) {
        const dice = interaction.options.getString('dice') ?? '';
        if (dice == '')
            await interaction.reply(getRandomInt(100));
        else
            if (isInteger(dice) ) {
                const n = getInt(dice);
                if (n > 0)
		            await interaction.reply(getRandomInt(n).toString());
                else 
                    await interaction.reply({content: ':rolling_eyes:    '+dice+' is not a valid input string for roll.', ephemeral: true });
                }
            else 
                await interaction.reply({content: ':rolling_eyes:    '+dice+' is not a valid input string for roll.', ephemeral: true });
        }
}
