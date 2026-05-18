import 'dotenv/config';
import fs from 'fs';

class LogHelper {

    constructor() {

        this.filePath = process.env.LOG_FILE_PATH;
        this.fileName = process.env.LOG_FILE_NAME;
        this.logToFileEnabled = process.env.LOG_TO_FILE_ENABLED === 'true';
        this.logToConsoleEnabled = process.env.LOG_TO_CONSOLE_ENABLED === 'true';
    }

    logError = (errorObject) => {

        const mensaje = `
${new Date().toISOString()} : ${errorObject.message}

Stack Trace:
${errorObject.stack}

`;

        if (this.logToConsoleEnabled) {
            console.log(mensaje);
        }

        if (this.logToFileEnabled) {
            fs.appendFileSync(this.filePath + this.fileName, mensaje);
        }
    }
}

export default new LogHelper();