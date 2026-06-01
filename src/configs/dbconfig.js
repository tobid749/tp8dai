//importa postgres
import postgres from "postgres";

//importa las  variables delenv
import 'dotenv/config';

//crea la conexion con la bd
const sql = postgres(process.env.DATABASE_URL, { ssl: 'require' });

//exporta la conexon al sql
export default sql;