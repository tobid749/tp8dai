// Importa conexión a la base
import sql from "../configs/dbconfig.js";

// Importa helper de logs
import LogHelper from "../helpers/log-helper.js";

// Clase repository
export default class ProvinceRepository {

    // Obtiene todas las provincias
getAllAsync = async () => {

    try {

        const provincias = await sql`
            SELECT * FROM provinces
            ORDER BY id
        `;

        return provincias;
    }
    catch (error) {

        console.log(error);

        LogHelper.logError(error);

        return [];
    }
}

    // Obtiene provincia por id
    getByIdAsync = async (id) => {

        let returnEntity = null;

        try {

            // Consulta SQL
            const result = await sql`
                SELECT * FROM provinces
                WHERE id = ${id}
            `;

            // Verifica si encontró algo
            if (result.length > 0) {

                returnEntity = result[0];
            }
        }
        catch (error) {

            LogHelper.logError(error);
        }

        return returnEntity;
    }

    // Inserta provincia
    createAsync = async (entity) => {

        let filasAfectadas = 0;

        try {

            // Consulta SQL
            const result = await sql`
                INSERT INTO provinces
                (
                    name,
                    full_name,
                    latitude,
                    longitude,
                    display_order
                )
                VALUES
                (
                    ${entity.name},
                    ${entity.full_name},
                    ${entity.latitude},
                    ${entity.longitude},
                    ${entity.display_order}
                )
            `;

            filasAfectadas = result.count;
        }
        catch (error) {

            LogHelper.logError(error);
        }

        return filasAfectadas;
    }

    // Modifica provincia
    updateAsync = async (entity) => {

        let filasAfectadas = 0;

        try {

            // Consulta SQL
            const result = await sql`
                UPDATE provinces
                SET
                    name = ${entity.name},
                    full_name = ${entity.full_name},
                    latitude = ${entity.latitude},
                    longitude = ${entity.longitude},
                    display_order = ${entity.display_order}
                WHERE id = ${entity.id}
            `;

            filasAfectadas = result.count;
        }
        catch (error) {

            LogHelper.logError(error);
        }

        return filasAfectadas;
    }

    // Elimina provincia
    deleteByIdAsync = async (id) => {

        let filasAfectadas = 0;

        try {

            // Consulta SQL
            const result = await sql`
                DELETE FROM provinces
                WHERE id = ${id}
            `;

            filasAfectadas = result.count;
        }
        catch (error) {

            LogHelper.logError(error);
        }

        return filasAfectadas;
    }
}