import { useContext } from 'react';
import { FetchContext } from './FetchContext';

export const useFetchService = () => useContext(FetchContext);
