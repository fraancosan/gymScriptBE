import { Router } from 'express';
import { checkInController } from '../controllers/check-in.js';
import { authAdmin } from '../middleware/auth.js';

export const checkInRouter = Router();

checkInRouter.get('/', authAdmin, checkInController.getAll);

checkInRouter.get('/:id', authAdmin, checkInController.getById);

checkInRouter.post('/', authAdmin, checkInController.create);

checkInRouter.patch('/:id', authAdmin, checkInController.update);

checkInRouter.delete('/:id', authAdmin, checkInController.delete);

checkInRouter.get(
  '/accessControl/:id',
  authAdmin,
  checkInController.accessControl
);
