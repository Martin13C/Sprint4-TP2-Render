import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import methodOverride from "method-override";
import { connectDB } from "./config/dbConfig.mjs";
import superHeroRoutes from "./routes/superHeroRoutes.mjs";
import expressLayouts from 'express-ejs-layouts';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON y datos de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de Method Override para soportar PUT y DELETE en formularios
app.use(methodOverride("_method"));

// Configuración del motor de vistas EJS
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// configuracion de express-ejs-layouts 
app.use(expressLayouts);
app.set('layout','layout');

// Conexión a MongoDB
connectDB();

app.use((req, res, next) => {
  console.log(`Método recibido: ${req.method} - Ruta: ${req.originalUrl}`);
  console.log("Cuerpo recibido:", req.body);
  next();
});

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, "public")));

// Configuración de rutas
app.use("/api", superHeroRoutes);

// Manejo de errores para rutas no encontradas
app.use((req, res) => {
  res.status(404).render("error", { mensaje: "Ruta no encontrada" });
});

// Iniciar el servidor
// configuracion de puerto para render: Puerto 0.0.0.0
app.listen(PORT,'0.0.0.0', () => {
  console.log(`Servidor escuchando el puerto http://localhost ${PORT}`);
});
