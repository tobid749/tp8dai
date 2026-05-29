// Importa configuración .env
import 'dotenv/config';

// Importa filesystem
import fs from 'fs';

// Clase helper para guardar errores
class LogHelper {

    constructor() {

        // Ruta del archivo
        this.filePath = process.env.LOG_FILE_PATH;

        // Nombre del archivo
        this.fileName = process.env.LOG_FILE_NAME;

        // Habilita logs en archivo
        this.logToFileEnabled =
            process.env.LOG_TO_FILE_ENABLED === 'true';

        // Habilita logs en consola
        this.logToConsoleEnabled =
            process.env.LOG_TO_CONSOLE_ENABLED === 'true';
    }

    // Método para guardar errores
    logError = (errorObject) => {

        // Mensaje del error
        const mensaje = `
${new Date().toISOString()} : ${errorObject.message}

Stack Trace:
${errorObject.stack}

`;

        // Mostrar por consola
        if (this.logToConsoleEnabled) {

            console.log(mensaje);
        }

        // Guardar en archivo
        if (this.logToFileEnabled) {

            fs.appendFileSync(
                this.filePath + this.fileName,
                mensaje
            );
        }
    }
}

// Exporta instancia
export default new LogHelper();