import { createContext } from 'react';

export const FetchContext = createContext({
  getAllRecords: () => {},
  getRecordById: () => {},
  deleteRecord: () => {},
  addRecord: () => {},
  updateRecord: () => {},
});
