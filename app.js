import express, { json } from 'express';
import cors from 'cors';
import { usuarioRouter } from './routes/usuario.js';
import { productoRouter } from './routes/producto.js';
import { provinciaRouter } from './routes/provincia.js';
import { localidadRouter } from './routes/localidad.js';
import { planRouter } from './routes/plan.js';
import { sedeRouter } from './routes/sede.js';
import { inscripcionRouter } from './routes/inscripcion.js';
import { actividadRouter } from './routes/actividad.js';
import { planActividadRouter } from './routes/plan-actividad.js';
import { cuotaRouter } from './routes/cuota.js';
import { sedeActividadRouter } from './routes/sede-actividad.js';
import { horarioRouter } from './routes/horario.js';
import { entrenadorRouter } from './routes/entrenador.js';
import { sedeActEntrenadorRouter } from './routes/sede-act_entrenador.js';
import { checkInRouter } from './routes/check-in.js';

import 'dotenv/config';
import { setupSwagger } from './utils/swagger.js';

const app = express();
app.use(cors());
app.use(json());
app.disable('x-powered-by');

setupSwagger(app);

app.use('/img', express.static('public'));

app.use('/productos', productoRouter);
app.use('/planes', planRouter);
app.use('/plan-actividades', planActividadRouter);
app.use('/usuarios', usuarioRouter);
app.use('/sede-actividades', sedeActividadRouter);
app.use('/entrenadores', entrenadorRouter);
app.use('/sede-act-entrenadores', sedeActEntrenadorRouter);
app.use('/horarios', horarioRouter);
app.use('/sedes', sedeRouter);
app.use('/inscripciones', inscripcionRouter);
app.use('/actividades', actividadRouter);
app.use('/cuotas', cuotaRouter);
app.use('/localidades', localidadRouter);
app.use('/provincias', provinciaRouter);
app.use('/check-in', checkInRouter);

app.use((_, res) => {
  res.status(404).json({ error: 'Not found' });
});

export default app;
