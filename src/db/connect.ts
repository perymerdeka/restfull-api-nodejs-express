import mongoose from "mongoose";
import config from "config";
import log from "../logger";

function connect() {
    const dbUri: string = config.get("dbUri");

    return mongoose
    .connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        log.info("Database Connected Successfully");
    })
    .catch((error) => {
        log.error(`database connection Error:  ${error}`);
        process.exit(1);
    });
};

// export func
export default connect;