import express from 'express';
import { connectDB } from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';
import superHeroRoutesValiadator from './routes/superHeroRoutesValidator.mjs';
import superHeroRoutesFront from './routes/superHeroRoutesFront.mjs'


const app = express();
const PORT = process.env.PORT || 3000;


// setear configuración del motor de vistas EJS
app.set("view engine", "ejs");

// Middleware para parsear JSON
app.use(express.json());


// Conexión a MongoDB
connectDB();

// Configuración de rutas
app.use('/api', superHeroRoutes);  //--> conectado a la BD 
app.use('/validarheroe', superHeroRoutesValiadator); //--> forma directa sin conectar a la BD
app.use("/dashboard", superHeroRoutesFront)

// Manejo de errores para rutas no encontradas
app.use((req, res) => {
  res.status(404).send({ mensaje: "Ruta no encontrada" });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});