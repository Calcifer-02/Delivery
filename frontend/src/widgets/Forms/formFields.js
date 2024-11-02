export const formFields = {
  organizations: [
    ['Название', 'name'],
    ['Адрес', 'address'],
    ['Контактные данные', 'contacts'],
  ],
  restaurants: [
    ['Название', 'name'],
    ['Адрес', 'address'],
    ['Меню', 'menu'],
    ['ID Организации', 'organization_id', 'number'],
  ],
  deliveries: [
    ['Номер телефона', 'contacts'],
    ['Количество курьеров', 'couriers', 'number'],
    ['ID Организации', 'organization_id', 'number'],
  ],
  dishes: [
    ['Название', 'name'],
    ['Описание', 'description'],
    ['Цена', 'price'],
    ['ID Ресторана', 'restaurant_id', 'number'],
  ],
  clients: [
    ['Контактные данные (имя, номер телефона)', 'contacts'],
    ['Адрес', 'address'],
  ],
  orders: [
    ['Дата', 'date', 'date'],
    ['Адрес', 'address'],
    ['Блюда', 'dishes'],
    ['ID Организации', 'organization_id', 'number'],
    ['ID Доставки', 'delivery_id', 'number'],
    ['ID Клиента', 'client_id', 'number'],
  ],
};
