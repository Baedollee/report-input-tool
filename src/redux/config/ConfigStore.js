import { configureStore } from '@reduxjs/toolkit';
import dataList from '..//modules/dataSlice';

export default configureStore({
  reducer: { dataList },
});
