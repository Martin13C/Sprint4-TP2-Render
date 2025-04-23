import { body } from 'express-validator'

export const validacionDeDatosSuperheroes = ()=> [
    body('nombreSuperHeroe')
    .trim()
    .notEmpty()
    .withMessage('El Nombre del Superheroe es obligatorio')
    .isLength({min:3,max:60})
    .withMessage('Este campo debe tener un minimo de 3 digitos y un maximo de 60'),

    body('nombreReal')
    .trim()
    .notEmpty()
    .withMessage('El Nombre Real es obligatorio')
    .isLength({min:3,max:60})
    .withMessage('Este campo debe tener un minimo de 3 digitos y un maximo de 60'),

    body('edad')
    .trim()
    .notEmpty()
    .withMessage('La Edad del Superheroe es obligatoria')
    .isNumeric()
    .withMessage('La edad debe ser un numero')
    .toInt()
    .isInt({min:0})
    .withMessage('La edad no puede ser negativa'),

    body('poderes')
    .trim()
    .notEmpty()
    .withMessage('Los poderes son obligatorios')
    .custom((value) => {
        const poderesArray = value.split(',').map(p => p.trim());
        if (poderesArray.length === 0) {
            throw new Error("Debe ingresar al menos un poder");
        }
        for (const poder of poderesArray) {
            if (poder.length < 3 || poder.length > 60) {
                throw new Error("Cada poder debe tener entre 3 y 60 caracteres");
            }
        }
        return true;
    })
    .withMessage('Formato inválido para los poderes')
]