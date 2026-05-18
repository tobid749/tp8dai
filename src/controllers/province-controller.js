import { Router } from "express";
import ProvinceService from "../services/province-service.js";

const router = Router();

const service = new ProvinceService();

router.get("", async (req, res) => {

    const respuesta = await service.getAllAsync();

    res.status(200).json(respuesta);
});

router.get("/:id", async (req, res) => {

    const id = req.params.id;

    const respuesta = await service.getByIdAsync(id);

    if (respuesta != null) {

        res.status(200).json(respuesta);

    } else {

        res.status(404).send("Provincia no encontrada");
    }
});

router.post("", async (req, res) => {

    const entity = req.body;

    const respuesta = await service.createAsync(entity);

    if (typeof respuesta === "string") {

        res.status(400).send(respuesta);

    } else {

        res.status(201).send("Provincia creada");
    }
});

router.put("", async (req, res) => {

    const entity = req.body;

    const existe = await service.getByIdAsync(entity.id);

    if (existe == null) {

        res.status(404).send("Provincia no encontrada");

        return;
    }

    const respuesta = await service.updateAsync(entity);

    if (typeof respuesta === "string") {

        res.status(400).send(respuesta);

    } else {

        res.status(201).send("Provincia actualizada");
    }
});

router.delete("/:id", async (req, res) => {

    const id = req.params.id;

    const respuesta = await service.deleteByIdAsync(id);

    if (respuesta > 0) {

        res.status(200).send("Provincia eliminada");

    } else {

        res.status(404).send("Provincia no encontrada");
    }
});

export default router;