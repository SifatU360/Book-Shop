import { Router } from 'express';
import { AuthController } from './auth.controller';

const router = Router();

router.post('/login', AuthController.loginUser);
router.put('/update-password', AuthController.updatePassword);
 
export const AuthRoutes = router;