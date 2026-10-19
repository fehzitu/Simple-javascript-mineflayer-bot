// import mineflayer after install it
const mineflayer = require('mineflayer');

// create our bot
const bot = mineflayer.createBot({
    host: '1DcBell.aternos.me', // host is a server ip
    port: 25565, // port is to use a port (if have a one)
    username: 'fehzitu', // in game name
    version: '1.21.11', // defines an version (if you wanna use an specific version)
    auth: 'offline' // use 'microsoft' if you will use original minecraft account
});

// add some action to our bot
bot.on('login', () => console.log('Login successful!')); // an log entry when the bot manages to log in
bot.on('end', reason => console.log('Login ended!', reason)); // an log entry when the bot disconnects