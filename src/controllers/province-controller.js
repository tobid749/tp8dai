// Importa Router de express
import { Router } from "express";

// Importa service
import ProvinceService from "../services/province-service.js";

// Crea router
const router = Router();

// Instancia service
const service = new ProvinceService();


// GET ALL
router.get("", async (req, res) => {

    const respuesta =
        await service.getAllAsync();

    res.status(200).json(respuesta);
});


// GET BY ID
router.get("/:id", async (req, res) => {

    const id = req.params.id;

    const respuesta =
        await service.getByIdAsync(id);

    if (respuesta != null) {

        res.status(200).json(respuesta);

    }
    else {

        res.status(404)
            .send("Provincia no encontrada");
    }
});


// POST
router.post("", async (req, res) => {

    const entity = req.body;

    const respuesta =
        await service.createAsync(entity);

    if (typeof respuesta === "string") {

        res.status(400).send(respuesta);

    }
    else {

        res.status(201)
            .send("Provincia creada");
    }
});


// PUT
router.put("", async (req, res) => {

    const entity = req.body;

    // Verifica si existe
    const existe =
        await service.getByIdAsync(entity.id);

    if (existe == null) {

        res.status(404)
            .send("Provincia no encontrada");

        return;
    }

    const respuesta =
        await service.updateAsync(entity);

    if (typeof respuesta === "string") {

        res.status(400).send(respuesta);

    }
    else {

        res.status(201)
            .send("Provincia actualizada");
    }
});


// DELETE
router.delete("/:id", async (req, res) => {

    const id = req.params.id;

    const respuesta =
        await service.deleteByIdAsync(id);

    if (respuesta > 0) {

        res.status(200)
            .send("Provincia eliminada");

    }
    else {

        res.status(404)
            .send("Provincia no encontrada");
    }
});

// Exporta router
export default router;