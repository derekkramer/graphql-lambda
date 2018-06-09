const app = require('./src/app');

// let's set the port on which the server will run
app.set('port', 1337);

const portListening = port => console.log(`GraphQL Server Running at http://127.0.0.1:${port}`);

// start the server
app.listen(app.get('port'), portListening(app.get('port')));
