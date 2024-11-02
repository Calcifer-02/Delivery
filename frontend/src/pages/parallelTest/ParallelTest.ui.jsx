import { useState, useEffect } from 'react';
import { FetchService } from '../../shared/api/FetchService';
import cl from './ParallelTest.module.scss';

export const ParallelTest = () => {
  useEffect(() => {
    const getParallelResult = async () => {
      const res = await FetchService.parallelTest();
    };

    getParallelResult();
  }, []);

  return (
    <main className={cl.page}>
      <h1>Тестирование обработки параллельных запросов</h1>
    </main>
  );
};
