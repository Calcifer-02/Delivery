import { CustomSearchTable } from '@/widgets/CustomTable';

import { dishesColumns } from './columns';

const DishesTable = () => {
  return <CustomSearchTable columns={dishesColumns} searchBy="названию" searchField="name" url="dishes" />;
};

export const DishesRoute = {
  path: '/dishes',
  element: <DishesTable />,
};
