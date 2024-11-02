import { useState, useEffect } from 'react';
import { Input, Table, Spin } from 'antd';

import { useFetch, getDataSource } from '@/shared/lib';
import { useFetchService } from '@/shared/lib/contexts/FetchContext';

export const CustomSearchTable = ({ url, columns, searchBy, searchField }) => {
  const [data, setData] = useState(null);
  const { getAllRecords, deleteRecord } = useFetchService();
  const [fetchData, isLoading, isError] = useFetch(() => getAllRecords(url, setData));
  const [searchData, setSearchData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
    setSearchData(dataSource.filter((item) => item[searchField].toLowerCase().includes(value)));
  };

  return (
    <main style={{ flex: '1 1 auto', alignSelf: 'center' }}>
      <Input
        placeholder={`Поиск по ${searchBy}`}
        style={{ marginBottom: '15px', width: '20%' }}
        value={searchQuery}
        onChange={handleChange}
      />
      <Table columns={columns} dataSource={searchData ? searchData : dataSource} />
    </main>
  );
};
