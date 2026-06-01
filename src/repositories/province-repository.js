//importa conexión a la bd
import sql from "../configs/dbconfig.js";
//importa logs
import LogHelper from "../helpers/log-helper.js";
export default class ProvinceRepository {
    //obtiene todas las provincias (getall)
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

    //obtiene la provincia por su id
    getByIdAsync = async (id) => {

        let returnEntity = null;

        try {
            //consulta el sql
            const result = await sql`
                SELECT * FROM provinces
                WHERE id = ${id}
            `;
            //verifica si encontró algo
            if (result.length > 0) {

                returnEntity = result[0];
            }
        }
        catch (error) {

            LogHelper.logError(error);
        }

        return returnEntity;
    }

    //inserta provincia agarra los datos y devuelve las filas
    createAsync = async (entity) => {
        let filasAfectadas = 0;
        try {
            //consulta el sql
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

    //modifica 1 provincia
    updateAsync = async (entity) => {
        let filasAfectadas = 0;
        try {

            // consulta ssql
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

    //elimina provincia
    deleteByIdAsync = async (id) => {

        let filasAfectadas = 0;

        try {

            //consulta SQL
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