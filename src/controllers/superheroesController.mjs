import {
  /*obtenerSuperheroePorId, obtenerTodosLosSuperheroes, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30, colocarNuevoSuperheroe, actualizarSuperheroPorNombre, eliminarSuperheroPorId, elimarSuperheroePorNombre,*/
  // nuevas imporyaciones para ejs
  obtenerTodosLosSuperheroesEJS,
  colocarNuevoSuperheroeEJS,
  obtenerSuperheroePorIdEJS,
  actualizarSuperheroeRepositoryIdEJS,
  eliminarSuperheroeRepositoryIdEJS
} from "../services/superheroesService.mjs";
import {
  renderizarSuperheroe,
  renderizarListaSuperheroes,
} from "../views/responseView.mjs";

// export async function obtenerSuperheroePorIdController(req, res) {
//     try {
//         const { id } = req.params;
//         const superheroe = await obtenerSuperheroePorId(id);
//         if (!superheroe) {
//             return res.status(404).json({ mensaje: 'Superheroe no encontrado'});
//         }

//         const superheroeFormateado = renderizarSuperheroe (superheroe);
//         res.status(200).json(superheroeFormateado);
//     } catch (error) {
//         res.status(500).json({
//             estado:'Error',
//             mensaje: 'Error al obtener el superheroe',
//             error: error.message});
//     }
// }
// export async function obtenerTodosLosSuperheroesController(req, res) {
//     try {
//         const superheroes = await obtenerTodosLosSuperheroes();

//         const superheroesFormateados = renderizarListaSuperheroes(superheroes);
//         res.status(200).json(superheroesFormateados);
//     } catch (error) {
//         res.status(500).json({
//             estado:'Error',
//             mensaje: 'Error al obtener los superheroes',
//             error: error.message})
//     }
// }
// export async function  buscarSuperheroesPorAtributoController(req, res) {
//     try {
//         const { atributo, valor } = req.params;
//         const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);
//         if (superheroes.length === 0) {
//             return res.status(404).json(
//                 { mensaje: 'No se encontraron superheroes con ese atributo'});
//         }

//         const superheroesFormateados = renderizarListaSuperheroes (superheroes);
//         res.status(200).json(superheroesFormateados);
//     } catch (error) {
//         res.status(500).json({
//             estado:'Error',
//             mensaje: 'Error al buscar superheroes',
//             error: error.message});
//     }
// }
// export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
//     try {
//         const superheroes = await obtenerSuperheroesMayoresDe30();
//             if (superheroes.length === 0) {
//                 return res.status (404).json(
//                     { mensaje: 'No se encontraron superheroes mayores de 30 años'});
//             }
//             const superheroesFormateados = renderizarListaSuperheroes (superheroes);
//             res.status(200).json(superheroesFormateados);
//     }  catch (error) {
//         res.status(500).json({
//             estado:'Error',
//             mensaje: 'Error al obtener superheroes mayores de 30',
//             error: error.message});
//     }
// }
// export async function colocarNuevoSuperheroeController(req, res) {
//     try{
//         const {nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos, creador} = req.body;
//         if (!nombreSuperHeroe || !nombreReal || !edad || !poderes?.length) {
//             return res.status (400).json({mensaje: 'Nombre del Superheroe, Nombre real, Edad y Poderes son obligatorios'})
//         }
//         const  nuevoSuperheroe = await colocarNuevoSuperheroe ({
//             nombreSuperHeroe,
//             nombreReal,
//             edad,
//             planetaOrigen: planetaOrigen || 'Desconocido',
//             debilidad,
//             poderes,
//             aliados: aliados || [],
//             enemigos: enemigos || [],
//             creador
//         });
//         // const superheroeFormateado = renderizarSuperheroe(nuevoSuperheroe); me generaba errores para mostrar los datos o pude mejorarlo
//         const superheroePlain = nuevoSuperheroe.toObject(); // Convertir a objeto para evitar problemas con el tipo de datos que vuelven de la base de datos
//         const superheroeFormateado = renderizarSuperheroe(superheroePlain);
//         return res.status(201).json({
//             estado: "Exitoso",
//             mensaje: "Superhéroe creado exitosamente",
//             data: superheroeFormateado}); //mejoras para mostrar msj en el return y evitar error de continuacion del codigo
//         // res.send(`Aqui esta el nuevo superheroe creado con los datos ${JSON.stringify(nuevoSuperheroe)}`) correccion de error de ejucion luego del ingreso y falta de return
//     } catch (error) {
//         res.status(500).json({
//             estado: "Error",
//             mensaje: 'Error interno, Error al colocar nuevo superheroe',
//             error: error.message
//         });
//     }
// }
// export async function actualizarSuperheroePorNombreController(req, res) {
//     try {
//         const { nombre } = req.params;
//         const { nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos, creador } = req.body;

//         if (!nombreSuperHeroe || !nombreReal || !edad || !poderes?.length) {
//             return res.status(400).json({
//                 mensaje: 'Nombre del superhéroe, nombre real, edad y poderes son obligatorios'
//             });
//         }

//         const superheroeActualizado = await actualizarSuperheroPorNombre(nombre, {
//             nombreSuperHeroe,
//             nombreReal,
//             edad,
//             planetaOrigen: planetaOrigen || 'Desconocido',
//             debilidad,
//             poderes,
//             aliados: aliados || [],
//             enemigos: enemigos || [],
//             creador
//         });

//         if (!superheroeActualizado) {
//             return res.status(404).json({
//                 mensaje: 'Superhéroe no encontrado'
//             });
//         }

//         const superheroeFormateado = renderizarSuperheroe(superheroeActualizado);
//         return res.status(200).json(superheroeFormateado);
//     } catch (error) {
//         res.status(500).json({
//             estado: 'Error',
//             mensaje: 'Error al actualizar el superhéroe',
//             error: error.message
//         });
//     }

// }
// export async function eliminarSuperheroePorIdController(req, res) {
//     try {
//         const { id } = req.params;

//         const superheroeEliminado = await eliminarSuperheroPorId (id);

//         if (!superheroeEliminado) {
//             return res.status(404).json({
//                 mensaje: 'Superhéroe no encontrado'
//             });
//         }

//         const superheroeFormateado = renderizarSuperheroe(superheroeEliminado);
//         return res.status(200).json({
//             estado: 'Exito',
//             mensaje: 'Superhéroe eliminado correctamente',
//             data: superheroeFormateado
//         });
//     } catch (error) {
//         res.status(500).json({
//             estado:'Error',
//             mensaje: 'Error al eliminar el superhéroe',
//             error: error.message
//         });
//     }
// }
// export async function eliminarSuperheroPorNombreController(req, res) {
//     try {
//         const { nombre } = req.params;

//         // Validación básica
//         if (!nombre || typeof nombre !== 'string') {
//             return res.status(400).json({
//                 mensaje: 'El nombre del superhéroe es obligatorio'
//             });
//         }

//         // Eliminar el superhéroe
//         const superheroeEliminado = await elimarSuperheroePorNombre(nombre);

//         if (!superheroeEliminado) {
//             return res.status(404).json({
//                 mensaje: 'Superhéroe no encontrado'
//             });
//         }

//         // Formatear respuesta
//         const superheroeFormateado = renderizarSuperheroe(superheroeEliminado);
//         return res.status(200).json({
//             estado:'Exito',
//             mensaje: 'Superhéroe eliminado',
//             data: superheroeFormateado
//         });

//     } catch (error) {
//         return res.status(500).json({
//             estado:'Error',
//             mensaje: 'Error al eliminar el superhéroe',
//             error: error.message
//         });
//     }
// }

// controladores para formularios y manejo ejs

export async function obtenerTodosLosSuperheroesEJSController(req, res) {
  try {
    const superheroes = await obtenerTodosLosSuperheroesEJS();
    const superheroesFormateados = superheroes.map((superheroe) => ({
      ...renderizarSuperheroe(superheroe),
    }));
    res.render("dashboard", { title:'Dashboard', superheroes: superheroesFormateados });
  } catch (error) {
    res.status(500).render("error", {
      mensaje: "Error al obtener los superheroes (Dashboard)",
      error: error.message,
    });
  }
}
export async function obtenerSuperheroePorIdControllerEJS(req, res) {
  try {
    const { id } = req.params;
    const superheroe = await obtenerSuperheroePorIdEJS(id);
    if (!superheroe) {
      return res
        .status(404)
        .render("error", { mensaje: "Superheroe no encontrado" });
    }

    const superheroeFormateado = renderizarSuperheroe(superheroe);
    // console.log(superheroeFormateado)
    console.log({ superheroe: superheroeFormateado });
    res.render("editSuperheroes", { title: 'Editar Superheroe', superheroe: superheroeFormateado });
    // res.status(200).render(superheroeFormateado);
  } catch (error) {
    console.error("error al obtener datos del superheroe:", error);
    res.status(500).render("error", {
      mensaje: "Error al obtener el superheroe",
    });
  }
}
export async function agregarSuperheroeEJSController(req, res) {
  try {
    const {
      nombreSuperHeroe,
      nombreReal,
      edad,
      planetaOrigen,
      debilidad,
      poderes,
      aliados,
      enemigos,
      creador,
    } = req.body;
    // Convertir cadenas a arrays
    const poderesArray = poderes ? poderes.split(",").map((p) => p.trim()) : [];
    const aliadosArray = aliados ? aliados.split(",").map((a) => a.trim()) : [];
    const enemigosArray = enemigos ? enemigos.split(",").map((e) => e.trim()) : [];

    if (
      !nombreSuperHeroe ||
      !nombreReal ||
      !edad ||
      poderesArray.length === 0
    ) {
      return res.status(400).render("addSuperheroe", {
        error:
          "Nombre del Superheroe, Nombre real, Edad y Poderes son obligatorios",
        datos: req.body,
      });
    }
    const nuevoSuperheroe = await colocarNuevoSuperheroeEJS({
      nombreSuperHeroe,
      nombreReal,
      edad,
      planetaOrigen: planetaOrigen || "Desconocido",
      debilidad,
      poderes: poderesArray,
      aliados: aliadosArray,
      enemigos: enemigosArray,
      creador,
    });
     const superheroePlain = nuevoSuperheroe.toObject();// Convertir a objeto para evitar problemas con el tipo de datos que vuelven de la base de datos
    const superheroeFormateado = renderizarSuperheroe(superheroePlain);
    // res.render("editSuperheroes", {
    //   title: "Editar Superhéroe",
    //   superheroe: superheroeFormateado
    // });
    res.redirect("/api/heroes");
  } catch (error) {
    res.status(500).render("addSuperheroes", {
      estado: "Error",
      mensaje: "Error interno, Error al colocar nuevo superheroe",
      error: error.message,
      datos: req.body,
    });
  }
}
export async function editarSuperheroeEJSController(req, res) {
  try {
    const { id } = req.params;
    const {
      nombreSuperHeroe,
      nombreReal,
      edad,
      planetaOrigen,
      debilidad,
      poderes,
      aliados,
      enemigos,
      creador,
    } = req.body;

    const poderesArray = poderes ? poderes.split(",").map((p) => p.trim()) : [];
    const aliadosArray = aliados ? aliados.split(",").map((a) => a.trim()) : [];
    const enemigosArray = enemigos
      ? enemigos.split(",").map((e) => e.trim())
      : [];

    if (
      !nombreSuperHeroe ||
      !nombreReal ||
      !edad ||
      poderesArray.length === 0
    ) {
      return res.status(400).render("editSuperheroe", {
        error: "Faltan campos obligatorios.",
        datos: req.body,
      });
    }

    const datosActualizados = {
      nombreSuperHeroe,
      nombreReal,
      edad /*parseInt(edad), // importante*/,
      planetaOrigen: planetaOrigen || "Desconocido",
      debilidad,
      poderes: poderesArray,
      aliados: aliadosArray,
      enemigos: enemigosArray,
      creador,
    };

    const superheroeActualizado = await actualizarSuperheroeRepositoryIdEJS(
      id,
      datosActualizados
    );

    if (!superheroeActualizado) {
      return res.status(404).render("error", {
        mensaje: "Superhéroe no encontrado para editar",
      });
    }

    const superheroeFormateado = renderizarSuperheroe(
      superheroeActualizado.toObject()
    );

    res.redirect("/api/heroes");
  } catch (error) {
    console.error("Error al actualizar el superhéroe:", error);
    res.status(500).render("error", {
      mensaje: "Error interno al actualizar el superhéroe",
    });
  }
}
export async function eliminarSuperheroeEJSController(req, res) {
    try {
                const { id } = req.params;
        
                const superheroeEliminado = await eliminarSuperheroeRepositoryIdEJS (id);
        
                if (!superheroeEliminado) {
                    return res.status(404).render("error",{
                        mensaje: 'Superhéroe no encontrado para eliminar'
                    });
                }
                console.log(superheroeEliminado) /*para ver superheroEliminado*/
                const superheroeFormateado = renderizarSuperheroe(superheroeEliminado);
                console.log(superheroeFormateado)/*para ver superheroe Eliminado Formateado*/
                res.redirect("/api/heroes");
            } catch (error) {
                res.status(500).json({
                    estado:'Error',
                    mensaje: 'Error al eliminar el superhéroe',
                    error: error.message
                });
            }
}
