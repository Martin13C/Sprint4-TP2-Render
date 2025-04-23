import express from 'express';
import {
    // obtenerSuperheroePorIdController,
    // obtenerTodosLosSuperheroesController,
    // buscarSuperheroesPorAtributoController,
    // obtenerSuperheroesMayoresDe30Controller,
    // colocarNuevoSuperheroeController,
    // actualizarSuperheroePorNombreController,
    // eliminarSuperheroePorIdController,
    // eliminarSuperheroPorNombreController,
    // nuevos controller 
    obtenerTodosLosSuperheroesEJSController,
    agregarSuperheroeEJSController,
    editarSuperheroeEJSController,
    eliminarSuperheroeEJSController,
    obtenerSuperheroePorIdControllerEJS,
} from '../controllers/superheroesController.mjs';
import { validacionDeDatosSuperheroes } from '../validationsrules.mjs';
import { validacionErrores } from '../errorMiddleware.mjs';

const router = express.Router();

// editar superhero desde editSuperheroes.ejs 
router.put('/:id/editar', validacionDeDatosSuperheroes(), validacionErrores, editarSuperheroeEJSController);
router.get('/:id/editar', obtenerSuperheroePorIdControllerEJS); // Nueva ruta para el formulario
// eliminar superheroes desde dashboard.ejs
router.delete('/:id/eliminar', eliminarSuperheroeEJSController);
// agregar un nuevo superheroe de addSuperhero.ejs 
router.get('/agregar', (req, res) => res.render("addSuperheroe", {title: 'Agregar Superheroe'})); // Nueva ruta para el formulario
router.post('/agregar', validacionDeDatosSuperheroes(), validacionErrores, agregarSuperheroeEJSController);
// todos los superheroes para el dashboard.ejs 
router.get('/heroes', obtenerTodosLosSuperheroesEJSController, (req, res) => {
});
router.get('/', (req, res) => {
    res.render('index', {title: 'Index'})
});
// // eliminar por id 
// router.delete('/heroes/eliminar-por-nombre/:nombre', eliminarSuperheroPorNombreController)
// // actualizar por nombre 
// router.put('/heroes/buscar-y-actualizar-por-nombre/:nombre', validacionDeDatosSuperheroes(), validacionErrores, actualizarSuperheroePorNombreController);
// // agregar nuevo superheroes 
// router.post('/heroes/nuevo', validacionDeDatosSuperheroes(), validacionErrores, colocarNuevoSuperheroeController)
// // mayores de 30
// router.get('/heroes/mayores-30',obtenerSuperheroesMayoresDe30Controller);
// // todos los superheroes 
// router.get('/heroes', obtenerTodosLosSuperheroesController);
// // buscar por atributo 
// router.get('/heroes/buscar/:atributo/:valor',buscarSuperheroesPorAtributoController);
// // peticiones con id al final para evitar conflictos 
// router.get('/heroes/:id', obtenerSuperheroePorIdController);
// // Eliminar por id 
// router.delete('/heroes/eliminar-por-id/:id', eliminarSuperheroePorIdController);



export default router;