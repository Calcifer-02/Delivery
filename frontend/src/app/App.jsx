import { ConfigProvider } from 'antd';
import ruRu from 'antd/locale/ru_RU';
import { ReactRouterProvider } from './provider';
import { FetchProvider } from '@/shared/lib/contexts/FetchContext';

export const App = () => (
  <ConfigProvider locale={ruRu}>
    <FetchProvider>
      <ReactRouterProvider />
    </FetchProvider>
  </ConfigProvider>
);
