import { CustomSearchTable } from '@/widgets/CustomTable';

import { restaurantsColumns } from './columns';

const RestaurantsTable = () => {
  return (
    <CustomSearchTable
      columns={restaurantsColumns}
      searchBy="названию"
      searchField="name"
      url="restaurants"
    />
  );
};

export const RestaurantsRoute = {
  path: '/restaurants',
  element: <RestaurantsTable />,
};
