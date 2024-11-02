import { UpdateForm } from '@/widgets/Forms/UpdateForm';

export const UpdateOrganizationRoute = {
  path: 'organizations/:id',
  element: <UpdateForm type="organizations" />,
};

export const UpdateRestaurantRoute = {
  path: 'restaurants/:id',
  element: <UpdateForm type="restaurants" />,
};

export const UpdateDeliveryRoute = {
  path: 'deliveries/:id',
  element: <UpdateForm type="deliveries" />,
};

export const UpdateDishRoute = {
  path: 'dishes/:id',
  element: <UpdateForm type="dishes" />,
};

export const UpdateClientRoute = {
  path: 'clients/:id',
  element: <UpdateForm type="clients" />,
};

export const UpdateOrderRoute = {
  path: 'orders/:id',
  element: <UpdateForm type="orders" />,
};
