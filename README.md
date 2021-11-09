# Run on your machine - 

> npm i

> npm run build

> npm run start

# My explanation/view on the small project -

First of all I'll mention that I enjoyed the task.
I might build a full project and expand it.

## Frameworks: 
Server - Node.js using TypeScript.
Client - React.js using TypeScript.

## Steps: 
1. Retrieving order book from binance API with npm package called `node-binance-api`.
2. Emitting order book to client side with `socket.io`.
3. Retrieving order book in client side with `socket.io-client` and storing it in `useState`.
4. Passing order book to UI with `props.orderBook`.

## Time Approx.:
40m until I found the right API. Tried Shrimpy API but it was much cleaner and easier with binance API + `node-binance-api` package.

90m for server side.

90m for client side.

30m to look at all the code and make sure everything is clean and tidy.


# MORE -
I know this is not customary to initialize socket.io in a separate file but in the case of a the test project in my opinion it's cleaner.
In order to provide you with the fastest and most convenient installation for the small project I've added my API_KEY/API_SECRET_KEY for binance API and all unwanted files to git.
