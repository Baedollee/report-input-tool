import { configureStore } from '@reduxjs/toolkit';
import dataList from '..//modules/dataSlice';
import codeManagementSlice from '../modules/codeManagementDataSlice';
import gameInformSlice from 'redux/modules/gameInformSlice';
import TeamRegisterSlice from 'redux/modules/TeamRegisterSlice';
import PlayerRegisterSlice from 'redux/modules/PlayerRegisterSlice';

export default configureStore({
  reducer: {
    dataList,
    codeManagementSlice,
    gameInformSlice,
    TeamRegisterSlice,
    PlayerRegisterSlice,
  },
});
