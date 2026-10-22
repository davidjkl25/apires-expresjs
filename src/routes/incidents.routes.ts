import { Router } from 'express';
import { IncidentController } from '../controllers/incidents.controller';
import {
  validateCreateIncidentPayload,
  validateUpdateIncidentPayload
} from '../middlewares/validateIncident.middleware';

const router = Router();

router.post('/', validateCreateIncidentPayload, IncidentController.CreateIncident);
router.get('/', IncidentController.GetIncidentHistory);
router.patch('/:id', validateUpdateIncidentPayload, IncidentController.UpdateIncidentStatus);

export default router;
