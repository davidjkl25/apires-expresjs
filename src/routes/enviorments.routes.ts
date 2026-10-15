import { Router } from 'express';
import { EnviormentController } from '../controllers/enviorments.controller';

const router = Router();
router.get ('/search', EnviormentController.GetEnviormentsByFilter);
router.post('/',EnviormentController.CreateEnviorment);
router.patch('/:id',EnviormentController.UpdateEnviorment);

export default router;