import { configureStore } from '@reduxjs/toolkit';
import dataList from '..//modules/dataSlice';
import codeData from '../modules/codeDataSlice';
import gameInformSlice from 'redux/modules/gameInformSlice';

export default configureStore({
  reducer: { dataList, codeData, gameInformSlice },
});
