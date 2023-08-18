const { Command } = require('@sapphire/framework');
const { ApplicationCommandType } = require('discord.js');

class ReactCommand extends Command {
	constructor(context, options) {
		super(context, {
			...options,
			name: 'react',
			aliases: [],
			description: 'reacts to a message',
		});
	}

	registerApplicationCommands(registry) {
		registry.registerContextMenuCommand((builder) =>
			builder
				.setName('react')
				.setType(ApplicationCommandType.Message),
		);
	}

	async contextMenuRun(interaction) {
		return interaction.reply('Heya!');
	}
}


module.exports = {
	ReactCommand,
};
