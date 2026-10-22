import { Router } from 'express';
import { IncidentController } from '../controllers/incidents.controller';

const router = Router();

router.post('/', IncidentController.CreateIncident);
router.get('/', IncidentController.GetIncidentHistory);
router.patch('/:id', IncidentController.UpdateIncidentStatus);

export default router;
