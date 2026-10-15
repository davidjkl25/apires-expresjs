import { Router } from 'express';
import { EquipmentController } from '../controllers/equipments.controller';

const router = Router();
router.get ('/search', EquipmentController.GetEquipmentsByFilter);
router.post('/',EquipmentController.CreateEquipment);
router.patch('/:id',EquipmentController.UpdateEquipment);

export default router;  