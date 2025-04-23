import { validationResult } from "express-validator";

export const validacionErrores = (req, res, next) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({
      status: "error",
      message: "Validacion fallida",
      errores: errores.array().map((error) => ({
        campo: error.path,
        mensaje: error.msg,
      })),
    });
  }
  next();
};
