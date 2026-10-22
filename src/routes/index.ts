import { Router } from 'express';
import loanRoutes from './loans.routes';
import userRoutes from './users.routes'; // Ajusta la ruta del archivo según corresponda
import enviormentRoutes from './enviorments.routes';
import equipmentsRoutes from './equipments.routes';
import incidentsRoutes from './incidents.routes';
import dashboardRoutes from './dashboard.routes';
const router = Router();

router.use('/loans', loanRoutes);
router.use('/users', userRoutes);
router.use('/enviorments', enviormentRoutes);
router.use('/equipments', equipmentsRoutes);
router.use('/incidents', incidentsRoutes);
router.use('/dashboard', dashboardRoutes);


export default router;