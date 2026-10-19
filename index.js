// import mineflayer after install it
const mineflayer = require('mineflayer');

// create our bot
const bot = mineflayer.createBot({
    host: 'your ip here', // host is a server ip
    port: 25565, // port is to use a port (if have a one)
    username: 'bot_name', // in game name
    version: '1.21.11', // defines an version (if you wanna use an specific version)
    auth: 'offline' // use 'microsoft' if you will use original minecraft account
});

// DISCLAIMER!
// First of all, check if the server has Microsoft account verification and allows pirated players if you will use offline auth!

// add some action to our bot
bot.on('login', () => console.log('Login successful!')); // an log entry when the bot manages to log in
bot.once('spawn', () => console.log(`${bot.username} joined to the world!`)); // if bot can join to the world
bot.on('end', reason => console.log('Login ended!', reason)); // an log entry when the bot disconnects