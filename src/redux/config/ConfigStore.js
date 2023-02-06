import { configureStore } from '@reduxjs/toolkit';
import dataList from '..//modules/dataSlice';
import codeData from '../modules/codeDataSlice';

export default configureStore({
  reducer: { dataList, codeData },
});
