import { CustomTable } from '@/widgets/CustomTable';

import { ordersColumns } from './columns';

const OrdersTable = () => {
  return <CustomTable columns={ordersColumns} url="orders" />;
};

export const OrdersRoute = {
  path: '/orders',
  element: <OrdersTable />,
};
