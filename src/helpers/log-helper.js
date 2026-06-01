//importa la config del env
import 'dotenv/config';
//importa el fs
import fs from 'fs';
//clase loghelper que guarda los errores
class LogHelper {

    constructor() {
        this.filePath = process.env.LOG_FILE_PATH;
        //nombrearchivo
        this.fileName = process.env.LOG_FILE_NAME;
        //habilita logs
        this.logToFileEnabled =
            process.env.LOG_TO_FILE_ENABLED === 'true';
        //habilita logs enla consola
        this.logToConsoleEnabled =
            process.env.LOG_TO_CONSOLE_ENABLED === 'true';
    }
    // meetodo q guarda errores
    logError = (errorObject) => {
        //mensaje error
        const mensaje = `
${new Date().toISOString()} : ${errorObject.message}

Stack Trace:
${errorObject.stack}

`;
        //mostrar por consola
        if (this.logToConsoleEnabled) {

            console.log(mensaje);
        }

        //guardar en archivo
        if (this.logToFileEnabled) {

            fs.appendFileSync(
                this.filePath + this.fileName,
                mensaje
            );
        }
    }
}

//esxportar loghelpe
export default new LogHelper();