// Importa express
import express from "express";

// Importa cors
import cors from "cors";

// Importa las rutas de provincias
import ProvinceRouter from "./src/controllers/province-controller.js";

// Crea la aplicación
const app = express();

// Puerto del servidor
const port = 3000;

// Middleware de CORS
app.use(cors());

// Middleware para entender JSON
app.use(express.json());

// Endpoint principal
app.use("/api/province", ProvinceRouter);

// Inicia el servidor
app.listen(port, () => {

    console.log(`Servidor corriendo en puerto ${port}`);
});