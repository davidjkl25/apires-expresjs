import { Router } from 'express';
import loanRoutes from './loans.routes';
import userRoutes from './users.routes'; // Ajusta la ruta del archivo según corresponda
import enviormentRoutes from './enviorments.routes';
import equipmentsRoutes from './equipments.routes';
const router = Router();

router.use('/loans', loanRoutes);
router.use('/users', userRoutes);
router.use('/enviorments', enviormentRoutes);
router.use('/equipments', equipmentsRoutes);


export default router;