import { Menu } from 'antd';
import { EyeOutlined, PauseOutlined, PlusOutlined } from '@ant-design/icons';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';

import cl from './Layout.module.scss';

const menuItems = [
  {
    key: 'showRecords',
    label: 'Просмотр записей',
    icon: <EyeOutlined />,
    children: [
      {
        key: 'organizations',
        label: <Link to="/organizations">Организации</Link>,
      },
      {
        key: 'restaurants',
        label: <Link to="/restaurants">Рестораны</Link>,
      },
      {
        key: 'deliveries',
        label: <Link to="/deliveries">Службы доставки</Link>,
      },
      {
        key: 'dishes',
        label: <Link to="/dishes">Блюда</Link>,
      },
      {
        key: 'clients',
        label: <Link to="/clients">Клиенты</Link>,
      },
      {
        key: 'orders',
        label: <Link to="/orders">Заказы</Link>,
      },
    ],
  },
  {
    key: 'createRecord',
    label: 'Создание записей',
    icon: <PlusOutlined />,
    children: [
      {
        key: 'organization',
        label: <Link to="/create/organization">Добавить организацию</Link>,
      },
      {
        key: 'restaurant',
        label: <Link to="/create/restaurant">Добавить ресторан</Link>,
      },
      {
        key: 'delivery',
        label: <Link to="/create/delivery">Добавить службу доставки</Link>,
      },
      {
        key: 'dish',
        label: <Link to="/create/dish">Добавить блюдо</Link>,
      },
      {
        key: 'client',
        label: <Link to="/create/client">Добавить клиента</Link>,
      },
      {
        key: 'order',
        label: <Link to="/create/order">Добавить заказ</Link>,
      },
    ],
  },
  {
    key: 'parallelTest',
    label: <Link to="/parallel">Тестирование параллельности</Link>,
    icon: <PauseOutlined />,
  },
];

export const Layout = () => {
  const { pathname } = useLocation();
  const pathnameLength = pathname.split('/').length;

  return (
    <>
      <Header />
      <main className={cl.page}>
        <div className={cl.body}>
          <Menu
            defaultSelectedKeys={[pathname.split('/')[pathnameLength - 1]]}
            items={menuItems}
            mode="inline"
            style={{ flex: '0 0 256px' }}
          />
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
