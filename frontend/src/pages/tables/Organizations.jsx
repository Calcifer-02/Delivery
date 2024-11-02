import { CustomSearchTable } from '@/widgets/CustomTable';

import { organizationsColumns } from './columns';

const OrganizationsTable = () => {
  return (
    <CustomSearchTable
      columns={organizationsColumns}
      searchBy="названию"
      searchField="name"
      url="organizations"
    />
  );
};

export const OrganizationsRoute = {
  path: '/organizations',
  element: <OrganizationsTable />,
};
