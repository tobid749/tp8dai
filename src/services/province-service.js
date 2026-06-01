//importa el provincerepository
import ProvinceRepository from "../repositories/province-repository.js";
export default class ProvinceService {
    //instancia repository
    repository = new ProvinceRepository();

    //obtiene todas las provinciasa
    getAllAsync = async () => {
        return await this.repository.getAllAsync();
    }

    //obtiene por id
    getByIdAsync = async (id) => {
        return await this.repository.getByIdAsync(id);
    }

    //crea provincia
    createAsync = async (entity) => {

        //valida si tiene menios de 3 letras y sino crea
        if (!entity.name || entity.name.trim().length < 3) {
            return "El nombre debe tener mínimo 3 letras";
        }
        return await this.repository.createAsync(entity);
    }

    //modifica provincia
    updateAsync = async (entity) => {
        //valida que tenga mas de 3 letras
        if (!entity.name || entity.name.trim().length < 3) {
            return "El nombre debe tener mínimo 3 letras";
        }
        return await this.repository.updateAsync(entity);
    }

    //elimina provincia
    deleteByIdAsync = async (id) => {
        return await this.repository.deleteByIdAsync(id);
    }
}