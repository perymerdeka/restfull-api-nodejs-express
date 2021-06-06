import express from 'express';
import config from 'config';
import log from './logger'

// import db 
import connect from './db/connect';

// route import
import routes from './routes';

// set port and host config
const port: number = config.get("port");
const host: string = config.get("host");

// init app
const app = express();


// json parse
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// run app
app.listen(port, host, () => {
    log.info(`Server Listing at http://${host}:${port}`);

    // connect to db
    connect();

    // route import
    routes(app);
})