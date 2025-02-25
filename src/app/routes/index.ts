import { Router } from 'express';
import { UserRoutes } from '../module/user/user.routes';
import { AuthRoutes } from '../module/authentication/auth.routs';
import { BookRoutes } from '../module/product/product.router';
import { OrderRoutes } from '../module/order/order.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/books',
    route: BookRoutes,
  },
  {
    path: '/order',
    route: OrderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;