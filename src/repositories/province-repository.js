import DBConfig from "../configs/dbconfig.js";
import pkg from "pg";
import LogHelper from "../helpers/log-helper.js";

const { Client } = pkg;

export default class ProvinceRepository {

    getAllAsync = async () => {

        let returnArray = [];

        const client = new Client(DBConfig);

        try {

            await client.connect();

            const sql = `SELECT * FROM provinces`;

            const result = await client.query(sql);

            returnArray = result.rows;

        }
        catch (error) {

            LogHelper.logError(error);

        }
        finally {

            await client.end();
        }

        return returnArray;
    }

    getByIdAsync = async (id) => {

        let returnEntity = null;

        const client = new Client(DBConfig);

        try {

            await client.connect();

            const sql = `SELECT * FROM provinces WHERE id = $1`;

            const values = [id];

            const result = await client.query(sql, values);

            if (result.rows.length > 0) {

                returnEntity = result.rows[0];
            }

        }
        catch (error) {

            LogHelper.logError(error);

        }
        finally {

            await client.end();
        }

        return returnEntity;
    }

    createAsync = async (entity) => {

        let filasAfectadas = 0;

        const client = new Client(DBConfig);

        try {

            await client.connect();

            const sql = `
            INSERT INTO provinces
            (name, full_name, latitude, longitude, display_order)
            VALUES ($1, $2, $3, $4, $5)
            `;

            const values = [
                entity.name,
                entity.full_name,
                entity.latitude,
                entity.longitude,
                entity.display_order
            ];

            const result = await client.query(sql, values);

            filasAfectadas = result.rowCount;

        }
        catch (error) {

            LogHelper.logError(error);

        }
        finally {

            await client.end();
        }

        return filasAfectadas;
    }

    updateAsync = async (entity) => {

        let filasAfectadas = 0;

        const client = new Client(DBConfig);

        try {

            await client.connect();

            const sql = `
            UPDATE provinces
            SET
                name = $1,
                full_name = $2,
                latitude = $3,
                longitude = $4,
                display_order = $5
            WHERE id = $6
            `;

            const values = [
                entity.name,
                entity.full_name,
                entity.latitude,
                entity.longitude,
                entity.display_order,
                entity.id
            ];

            const result = await client.query(sql, values);

            filasAfectadas = result.rowCount;

        }
        catch (error) {

            LogHelper.logError(error);

        }
        finally {

            await client.end();
        }

        return filasAfectadas;
    }

    deleteByIdAsync = async (id) => {

        let filasAfectadas = 0;

        const client = new Client(DBConfig);

        try {

            await client.connect();

            const sql = `DELETE FROM provinces WHERE id = $1`;

            const values = [id];

            const result = await client.query(sql, values);

            filasAfectadas = result.rowCount;

        }
        catch (error) {

            LogHelper.logError(error);

        }
        finally {

            await client.end();
        }

        return filasAfectadas;
    }
}