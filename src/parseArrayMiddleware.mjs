export function convertirCadenasAArray(req, res, next) {
  if (req.body.poderes) {
    req.body.poderes = req.body.poderes.split(",").map((p) => p.trim());
  }
  if (req.body.aliados) {
    req.body.aliados = req.body.aliados.split(",").map((a) => a.trim());
  }
  if (req.body.enemigos) {
    req.body.enemigos = req.body.enemigos.split(",").map((e) => e.trim());
  }
  next();
}

// podria utilizar este archivo para convertir los campos en arrays antes de ingresar en la validacion de datos!
