import { Router } from "express";
import {UserController} from '../controllers/users.controller';
import {
  validateCreateUserPayload,
  validateUpdateUserPayload
} from '../middlewares/validateUser.middleware';

const router = Router();
 
router.get('/search', UserController.GetUserByFilter);
router.post('/', validateCreateUserPayload, UserController.CreateUser);
router.get('/:id', UserController.GetUserById);
router.patch('/:id', validateUpdateUserPayload, UserController.UpdateUser);
router.delete('/:id', UserController.DeleteUser);

export default router;
