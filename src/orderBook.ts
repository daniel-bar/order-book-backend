import Binance from "node-binance-api";
import http from 'http';

import ServerGlobal from './server-global';

import { Server } from "socket.io";

import { IApiData } from "./models/orderBook";


const orderBook = (server: http.Server) => {
  // Initializing socket.io
  const io = new Server(server, { cors: { origin: '*' } });

  // Initializing binance API
  const binance = new Binance().options({
    APIKEY: process.env.BINANCE_API_KEY,
    APISECRET: process.env.BINANCE_API_SECRET_KEY,
  });
  
  // Retrieving data from binance API and emit to client
  binance.futuresBookTickerStream('BTCUSDT', (data: IApiData) => io.emit('orderBook', data));

  ServerGlobal.getInstance().logger.info('Socket is live');
}; 

export { orderBook };