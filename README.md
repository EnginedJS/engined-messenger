# engined-messenger

Messenger service for engined, used to send message in backend.


## Installation

Install via NPM:

```shell
npm install engined-messenger
```

## Usage

Start engined-messenger service in engined, see example below:

```javascript
const { Manager } = require('engined');
const MessengerService = require('engined-messenger');

const messenger = MessengerService();

const main = async () => {

	// Create manager
	let serviceManager = new Manager({ verbose: true });

	// Adding service to manager
	serviceManager.add('Messenger', messenger);

	// Start all services
	await serviceManager.startAll();
};

main();
```

## Using specific messenger backend

Here is example to get agent for specific backend to save file:

```javascript

// Using local messenger backend
let localAgent = this.getContext('Messenger').getAgent('local');

```

## Register messenger backend

```javascript

// Register messenger backend
this.getContext('Messenger').registerAgent('local', agent);
```

## License
Licensed under the MIT License

## Authors
Copyright(c) 2017 Leon Lin（林為志） <<leonlin14@gmail.com>>
