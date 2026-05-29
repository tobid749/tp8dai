// Importa postgres
import postgres from "postgres";

// Importa variables .env
import 'dotenv/config';

// Crea la conexión usando DATABASE_URL
const sql = postgres(process.env.DATABASE_URL, { ssl: 'require' });

// Exporta la conexión
export default sql;