import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  entryList: [
    {
      participantId: '1',
      createdTime: null,
      participantBIB: '11',
      participantName: '수지',
      participantPosition: 'OH',
      role: 'Player',
      teamId: 'KAL',
      teamName: '대한항공',
      // participantPosition: 'OP',
      // startingReserve: '선발',
    },
    {
      participantId: '2',
      createdTime: null,
      participantBIB: '22',
      participantName: '아이유',
      participantPosition: 'OH',
      role: 'Player',
      teamId: 'KAL',
      teamName: '대한항공',
      // participantPosition: 'OP',
      // startingReserve: '선발',
    },
    {
      participantId: '3',
      createdTime: null,
      participantBIB: '33',
      participantName: '설현',
      participantPosition: 'OH',
      role: 'Player',
      teamId: 'KAL',
      teamName: '대한항공',
      // participantPosition: 'OP',
      // startingReserve: '선발',
    },
  ],
  lineUpList: [],
};

const entrySlice = createSlice({
  name: 'entry',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const entryAction = entrySlice.actions;
export default entrySlice.reducer;
