import { Router } from 'express';
import { provinciasController } from '../controllers/provincias.js';
import { authAdmin } from '../middleware/auth.js';

export const provinciaRouter = Router();

provinciaRouter.get('/', provinciasController.getAll);

provinciaRouter.get('/:id', provinciasController.getById);

provinciaRouter.post('/', authAdmin, provinciasController.create);

provinciaRouter.patch('/:id', authAdmin, provinciasController.update);

provinciaRouter.delete('/:id', authAdmin, provinciasController.delete);
