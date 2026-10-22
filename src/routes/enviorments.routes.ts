import { Router } from 'express';
import { EnviormentController } from '../controllers/enviorments.controller';
import { validateCreateEnviormentPayload, validateUpdateEnviormentPayload } from '../middlewares/validateEnviorment.middleware';

const router = Router();
router.get('/search', EnviormentController.GetEnviormentsByFilter);
router.post('/', validateCreateEnviormentPayload, EnviormentController.CreateEnviorment);
router.patch('/:id', validateUpdateEnviormentPayload, EnviormentController.UpdateEnviorment);

export default router;