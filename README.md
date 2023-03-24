# Create Custom Apple Wallet Passes with React Native and Fastify

## Installation

Since this example will only work on an iPhone, it's highly recommended to use MacOS to run it.

### React Native App

Clone the repository and run `npm i` from the root folder, then start the app with `npx expo run:ios`.
It should open a simulator and load our React Native app.

### Passkit Generation Server

In a separate instance of command line, run `cd ./server && node index.js`. It will start a
Fastify server that will be listening on port 3000.

## Demonstration

With both the server and the app running, enter a name in the text input within the main app screen
and press the button saying `Get your pass now!`. After a while you should see a newly generated pass
with the entered name on it and a button to add that pass to Apple Wallet.
