import { Router } from 'express';
import { DashboardController } from '../controllers/dashboard.controller';
import { validateDashboardSummaryQuery } from '../middlewares/validateDashboard.middleware';

const router = Router();

router.get('/summary', validateDashboardSummaryQuery, DashboardController.GetSummary);

export default router;
