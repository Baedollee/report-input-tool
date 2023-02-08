import { configureStore } from '@reduxjs/toolkit';
import dataList from '..//modules/dataSlice';
import codeData from '../modules/codeDataSlice';
import entrySlice from 'redux/modules/EntrySlice';

export default configureStore({
  reducer: { dataList, codeData, entrySlice },
});
