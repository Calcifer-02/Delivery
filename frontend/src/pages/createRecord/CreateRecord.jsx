import { CreateForm } from '@/widgets/Forms/CreateForm';

export const CreateOrganizationRoute = {
  path: 'organization',
  element: <CreateForm type="organizations" />,
};

export const CreateRestaurantRoute = {
  path: 'restaurant',
  element: <CreateForm type="restaurants" />,
};

export const CreateDeliveryRoute = {
  path: 'delivery',
  element: <CreateForm type="deliveries" />,
};

export const CreateDishRoute = {
  path: 'dish',
  element: <CreateForm type="dishes" />,
};

export const CreateClientRoute = {
  path: 'client',
  element: <CreateForm type="clients" />,
};

export const CreateOrderRoute = {
  path: 'order',
  element: <CreateForm type="orders" />,
};
