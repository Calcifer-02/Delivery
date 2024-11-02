import { useMemo } from 'react';
import { FetchContext } from './FetchContext';
import { FetchService } from '@/shared/api/FetchService';

export const FetchProvider = ({ children }) => {
  const getAllRecords = async (from, setData) => {
    const res = await FetchService.getAll(from);
    setData(res);
  };

  const getRecordById = async (from, id, setData) => {
    const res = await FetchService.getById(from, id);
    setData(...res);
  };

  const deleteRecord = async (from, recordId, data, setData) => {
    await FetchService.delete(from, recordId);
    setData(data && data.filter((item) => item.id !== recordId));
  };

  const addRecord = async (to, body) => {
    const res = await FetchService.add(to, body);
    return res;
  };

  const updateRecord = async (to, id, body) => {
    const res = await FetchService.edit(to, id, body);
    return res;
  };

  const value = useMemo(() => ({ getAllRecords, getRecordById, deleteRecord, addRecord, updateRecord }), []);

  return <FetchContext.Provider value={value}>{children}</FetchContext.Provider>;
};
