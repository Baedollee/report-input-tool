import { debounce } from 'lodash';
import React from 'react';
import { useCallback } from 'react';

const useDebounce = () => {
  const handleSearch = useCallback(
    debounce(async (params) => {
      try {
        const res = await api({ parmas });
        console.log(res);
      } catch (e) {
        console.log('api 호출 실패');
      }
    }, 500),
    []
  );
  return handleSearch;
};
