import { useState, useEffect } from 'react';
import { Input, Table, Spin } from 'antd';

import { useFetch, getDataSource } from '@/shared/lib';
import { useFetchService } from '@/shared/lib/contexts/FetchContext';

export const CustomTable = ({ url, columns }) => {
  const [data, setData] = useState(null);
  const { getAllRecords, deleteRecord } = useFetchService();
  const [fetchData, isLoading, isError] = useFetch(() => getAllRecords(url, setData));

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <main style={{ flex: '1 1 auto', alignSelf: 'center', display: 'flex', justifyContent: 'center' }}>
        <Spin size="large" />
      </main>
    );
  }
  if (isError) {
    return (
      <main style={{ flex: '1 1 auto', alignSelf: 'center', display: 'flex', justifyContent: 'center' }}>
        <h1>Что-то пошло не так. Попробуйте еще раз.</h1>
      </main>
    );
  }

  const dataSource = getDataSource(data, setData, url, deleteRecord);

  return (
    <main style={{ flex: '1 1 auto', alignSelf: 'center' }}>
      <Table columns={columns} dataSource={dataSource} />
    </main>
  );
};
