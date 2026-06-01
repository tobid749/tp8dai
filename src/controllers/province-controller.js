//importa router de express y service
import { Router } from "express";
import ProvinceService from "../services/province-service.js";
//crea ruter
const router = Router();
// crea instancia service
const service = new ProvinceService();


//get all, agarra todo
router.get("", async (req, res) => {

    const respuesta =
        await service.getAllAsync();

    res.status(200).json(respuesta);
});


// get by id busca por id y si no hay ,mamda error
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


//post afarra los datos y crea provincia
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


//put agarra los datos, verifica si existe y en caso de que si actualiza la provincia
router.put("", async (req, res) => {

    const entity = req.body;

    //verifica si existe el id
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


//delete, busca por id y en caso duq exista la elimina
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

//exporta router
export default router;