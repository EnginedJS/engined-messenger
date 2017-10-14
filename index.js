const { Service } = require('engined');

module.exports = (opts = {}) => class extends Service {

	constructor(context) {
		super(context);
	}

	async start() {
		this.getContext().assert('Messenger');
	}

	async stop() {
		this.getContext().remove('Messenger');
	}
}
