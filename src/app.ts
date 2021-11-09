import express from 'express';
import http from 'http';
import Debug from 'debug';

import ServerGlobal from './server-global';

import { orderBook } from './orderBook';

const router = express.Router();

const app: express.Application = express();

app.use(router);

router.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(200).send('Server is alive');
});

const server = http.createServer(app);

const debug = Debug('node-react');

const normalizePort = (val: string) => {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return null;
};

const onError = (error: NodeJS.ErrnoException) => {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const addr = server.address();
    const bind = typeof addr === 'string' ? ('pipe ' + addr) : ('port ' + port);

    switch (error.code) {
        case 'EACCES':
            console.error(bind + 'requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === 'string' ? ('pipe ' + addr) : ('port ' + port);

    debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || '3000');

app.set('port', port);

server.on('error', onError);
server.on('listening', onListening);

orderBook(server);

server.listen(port);

// Init global set up
ServerGlobal.getInstance();

ServerGlobal.getInstance().logger.info(`Server is running on port ${port}`);

export default app;