export const organizationsColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Адрес',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Контактные данные',
    dataIndex: 'contacts',
    key: 'contacts',
  },
  {
    title: 'Действия',
    dataIndex: 'action',
    key: 'action',
  },
];

export const restaurantsColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Адрес',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Меню',
    dataIndex: 'menu',
    key: 'menu',
  },
  {
    title: 'ID организации',
    dataIndex: 'organization_id',
    key: 'organization_id',
  },
  {
    title: 'Действия',
    dataIndex: 'action',
    key: 'action',
  },
];

export const deliveriesColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Номер телефона',
    dataIndex: 'contacts',
    key: 'contacts',
  },
  {
    title: 'Количество курьеров',
    dataIndex: 'couriers',
    key: 'couriers',
  },
  {
    title: 'ID организации',
    dataIndex: 'organization_id',
    key: 'organization_id',
  },
  {
    title: 'Действия',
    dataIndex: 'action',
    key: 'action',
  },
];

export const dishesColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Описание',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Цена',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'ID Ресторана',
    dataIndex: 'restaurant_id',
    key: 'restaurant_id',
  },
  {
    title: 'Действия',
    dataIndex: 'action',
    key: 'action',
  },
];

export const clientsColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Контактные данные',
    dataIndex: 'contacts',
    key: 'contacts',
    sorter: (a, b) => a.contacts.localeCompare(b.contacts),
  },
  {
    title: 'Адрес',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Действия',
    dataIndex: 'action',
    key: 'action',
  },
];

export const ordersColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Дата',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Адрес',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Блюда',
    dataIndex: 'dishes',
    key: 'dishes',
  },
  {
    title: 'ID Организации',
    dataIndex: 'organization_id',
    key: 'organization_id',
  },
  {
    title: 'ID Доставки',
    dataIndex: 'delivery_id',
    key: 'delivery_id',
  },
  {
    title: 'ID Клиента',
    dataIndex: 'client_id',
    key: 'client_id',
  },
  {
    title: 'Действия',
    dataIndex: 'action',
    key: 'action',
  },
];
