import { Router } from 'express';
import loanRoutes from './loans.routes';

const router = Router();
router.use('/loans', loanRoutes);


export default router;
