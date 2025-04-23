import { query } from "express";
import SuperHero from "../models/SuperHero.mjs";
import IRepository from "./IRepository.mjs";

class SuperHeroRepository extends IRepository {
  // async obtenerPorId(id) {
  //     return await SuperHero.findById (id);
  // }

  // async obtenerTodos() {
  //     return await SuperHero.find({});
  // }

  // async buscarPorAtributo(atributo, valor) {
  //     const query = { [atributo]: valor };
  //     return await SuperHero.find(query);
  // }
  // async obtenerMayoresDe30() {
  //     return await SuperHero.find({
  //         edad: { $gt: 30 },
  //         planetaOrigen: 'Tierra',
  //         $expr: { $gt: [{ $size: "$poderes" }, 1] } // Más de un poder
  //     });

  // }
  // async nuevoSuperheroe(superheroeData){
  //     return await SuperHero.create(superheroeData);
  // }

  // async actualizarSuperheroe(nombre,superheroeData) {
  //     return await SuperHero.findOneAndUpdate(
  //         { nombreSuperHeroe: { $regex: nombre, $options: 'i' } },
  //         { $set: superheroeData },
  //         { new: true } // Devuelve el documento actualizado
  //     );
  // }

  // async eliminarSuperheroe(id) {
  //     return await SuperHero.findByIdAndDelete(id);
  // }

  // async eliminarSuperheroePorNom(nombre) {
  //     return await SuperHero.findOneAndDelete({
  //         nombreSuperHeroe: { $regex: nombre, $options: 'i' } // Búsqueda insensible a mayúsculas
  //     });
  // }

  // nuevos respository para ejs
  async obtenerTodosEJS() {
    return await SuperHero.find({});
  }
  async nuevoSuperheroeEJS(superheroeData) {
    return await SuperHero.create(superheroeData);
  }
  async superheroeIdEJS(id) {
    return await SuperHero.findById(id);
  }
  async actualizarSuperheroeIdEJS(id, superheroeData) {
    return await SuperHero.findByIdAndUpdate(id,
      { $set: superheroeData },
      { new: true }
    );
  }
  async eliminarSuperheroeEJS(id) {
        return await SuperHero.findByIdAndDelete(id);
    }
}
export default new SuperHeroRepository();
