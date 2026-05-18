import ProvinceRepository from "../repositories/province-repository.js";

export default class ProvinceService {

    repository = new ProvinceRepository();

    getAllAsync = async () => {

        return await this.repository.getAllAsync();
    }

    getByIdAsync = async (id) => {

        return await this.repository.getByIdAsync(id);
    }

    createAsync = async (entity) => {

        if (entity.name.length < 3) {

            return "El nombre debe tener mínimo 3 letras";
        }

        return await this.repository.createAsync(entity);
    }

    updateAsync = async (entity) => {

        if (entity.name.length < 3) {

            return "El nombre debe tener mínimo 3 letras";
        }

        return await this.repository.updateAsync(entity);
    }

    deleteByIdAsync = async (id) => {

        return await this.repository.deleteByIdAsync(id);
    }
}