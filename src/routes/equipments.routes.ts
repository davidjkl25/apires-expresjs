import { Router } from 'express';
import { EquipmentController } from '../controllers/equipments.controller';
import {
  validateCreateEquipmentPayload,
  validateUpdateEquipmentPayload
} from '../middlewares/validateEquipment.middleware';

const router = Router();
router.get ('/search', EquipmentController.GetEquipmentsByFilter);
router.post('/', validateCreateEquipmentPayload, EquipmentController.CreateEquipment);
router.patch('/:id', validateUpdateEquipmentPayload, EquipmentController.UpdateEquipment);

export default router;  