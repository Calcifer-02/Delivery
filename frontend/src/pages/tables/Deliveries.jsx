import { CustomTable } from '@/widgets/CustomTable';

import { deliveriesColumns } from './columns';

const DeliveriesTable = () => {
  return <CustomTable columns={deliveriesColumns} url="deliveries" />;
};

export const DeliveriesRoute = {
  path: '/deliveries',
  element: <DeliveriesTable />,
};
