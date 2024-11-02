import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/pages/layout';
import { HomePageRoute } from '@/pages/home';
import {
  OrganizationsRoute,
  RestaurantsRoute,
  DeliveriesRoute,
  DishesRoute,
  ClientsRoute,
  OrdersRoute,
} from '@/pages/tables';
import {
  CreateOrganizationRoute,
  CreateRestaurantRoute,
  CreateDeliveryRoute,
  CreateDishRoute,
  CreateClientRoute,
  CreateOrderRoute,
} from '@/pages/createRecord';
import {
  UpdateOrganizationRoute,
  UpdateRestaurantRoute,
  UpdateDeliveryRoute,
  UpdateDishRoute,
  UpdateClientRoute,
  UpdateOrderRoute,
} from '@/pages/updateRecord';
import { ParallelTestRoute } from '@/pages/parallelTest/ParallelTest.route';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      HomePageRoute,
      OrganizationsRoute,
      RestaurantsRoute,
      DeliveriesRoute,
      DishesRoute,
      ClientsRoute,
      OrdersRoute,
      ParallelTestRoute,
    ],
  },
  {
    path: '/create',
    element: <Layout />,
    children: [
      CreateOrganizationRoute,
      CreateRestaurantRoute,
      CreateDeliveryRoute,
      CreateDishRoute,
      CreateClientRoute,
      CreateOrderRoute,
    ],
  },
  {
    path: '/update',
    element: <Layout />,
    children: [
      UpdateOrganizationRoute,
      UpdateRestaurantRoute,
      UpdateDeliveryRoute,
      UpdateDishRoute,
      UpdateClientRoute,
      UpdateOrderRoute,
    ],
  },
  // {path: '/parallel', element <La}
]);

export const ReactRouterProvider = () => <RouterProvider router={router} />;
