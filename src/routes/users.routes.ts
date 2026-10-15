import { Router } from "express";
import {UserController} from '../controllers/users.controller';

const router = Router();
 
router.get('/search', UserController.GetUserByFilter);
router.post('/', UserController.CreateUser);
router.get('/:id', UserController.GetUserById);
router.patch('/:id', UserController.UpdateUser);
router.delete('/:id', UserController.DeleteUser);

export default router;
