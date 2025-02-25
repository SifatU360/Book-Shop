import { Router } from 'express';
import { UserValidation } from './user.validation';
import validateRequest from '../../middlewares/validateRequest';
import { UserControllers } from './user.controller';
import authGurd from '../../middlewares/authGurd';

const router = Router();

router.post(
  '/create-new-user',
  validateRequest(UserValidation.createUserValidationSchema),
  UserControllers.createNewUser,
);
router.get('/get-all-users', authGurd('admin'), UserControllers.RetriveUsers);
router.patch(
  '/deactivate-user/:id',
  authGurd('admin'),
  UserControllers.deactivateUser,
);
router.patch(
  '/activate-user/:id',
  authGurd('admin'),
  UserControllers.activateUser,
);

export const UserRoutes = router;