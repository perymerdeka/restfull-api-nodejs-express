// project configuration config
/* 
mongo db Default Port 27017

*/

import { number } from "yup";

export default {
    port: 1337,
    host: 'localhost',
    dbUri: "mongodb://localhost/rest_api",
    SaltWorkFactor: 10, 
};
