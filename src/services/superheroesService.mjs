import superHeroRepository from '../repositories/SuperHeroRepository.mjs';

// export async function obtenerSuperheroePorId(id) {      
//     return await superHeroRepository.obtenerPorId(id);
// }

// export async function obtenerTodosLosSuperheroes() {
//     return await superHeroRepository.obtenerTodos();
// }

// export async function buscarSuperheroesPorAtributo(atributo, valor) {
//     return await superHeroRepository.buscarPorAtributo(atributo, valor);
// }

// export async function obtenerSuperheroesMayoresDe30() {
//     return await superHeroRepository.obtenerMayoresDe30();
// }
// export async function colocarNuevoSuperheroe(superheroeData){
//     return await superHeroRepository.nuevoSuperheroe(superheroeData);
// }
// export async function actualizarSuperheroPorNombre(nombre,superheroeData) {
//     return await superHeroRepository.actualizarSuperheroe(nombre,superheroeData)
// }
// export async function eliminarSuperheroPorId(id) {
//     return await superHeroRepository.eliminarSuperheroe(id)
// }

// export async function elimarSuperheroePorNombre(nombre) {
//     return await superHeroRepository.eliminarSuperheroePorNom (nombre)
// }

// nuevos services para ejs 

export async function obtenerTodosLosSuperheroesEJS() {
    return await superHeroRepository.obtenerTodosEJS();
}
export async function colocarNuevoSuperheroeEJS(superheroeData){
    return await superHeroRepository.nuevoSuperheroeEJS(superheroeData);
}
export async function obtenerSuperheroePorIdEJS(id){
    return await superHeroRepository.superheroeIdEJS(id);
}
export async function actualizarSuperheroeRepositoryIdEJS(id, superheroeData){
    return await superHeroRepository.actualizarSuperheroeIdEJS(id,superheroeData);
}
export async function eliminarSuperheroeRepositoryIdEJS(id){
    return await superHeroRepository.eliminarSuperheroeEJS(id);
}