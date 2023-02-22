import { configureStore } from '@reduxjs/toolkit';
import dataList from '..//modules/dataSlice';
import codeManagementSlice from '../modules/codeManagementDataSlice';
import gameInformSlice from 'redux/modules/gameInformSlice';

export default configureStore({
  reducer: { dataList, codeManagementSlice, gameInformSlice },
});
