import { CustomSearchTable } from '@/widgets/CustomTable';

import { clientsColumns } from './columns';

const ClientsTable = () => {
  return <CustomSearchTable columns={clientsColumns} searchBy="имени" searchField="contacts" url="clients" />;
};

export const ClientsRoute = {
  path: '/clients',
  element: <ClientsTable />,
};
