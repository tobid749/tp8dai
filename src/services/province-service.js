// Importa repository
import ProvinceRepository from "../repositories/province-repository.js";

// Clase service
export default class ProvinceService {

    // Instancia repository
    repository = new ProvinceRepository();

    // Obtiene todas
    getAllAsync = async () => {

        return await this.repository.getAllAsync();
    }

    // Obtiene por id
    getByIdAsync = async (id) => {

        return await this.repository.getByIdAsync(id);
    }

    // Inserta provincia
    createAsync = async (entity) => {

        // Validación
        if (!entity.name || entity.name.trim().length < 3) {

            return "El nombre debe tener mínimo 3 letras";
        }

        return await this.repository.createAsync(entity);
    }

    // Modifica provincia
    updateAsync = async (entity) => {

        // Validación
        if (!entity.name || entity.name.trim().length < 3) {

            return "El nombre debe tener mínimo 3 letras";
        }

        return await this.repository.updateAsync(entity);
    }

    // Elimina provincia
    deleteByIdAsync = async (id) => {

        return await this.repository.deleteByIdAsync(id);
    }
}