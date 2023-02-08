import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  entryList: [
    {
      id: 1,
      participantId: '1',
      createdTime: 'null',
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
      id: 2,
      participantId: '2',
      createdTime: 'null',
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
      id: 3,
      participantId: '3',
      createdTime: 'null',
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
  lineUpList: [
    {
      id: 1,
      participantId: '1',
      createdTime: 'null',
      participantBIB: '11',
      participantName: '수지',
      participantPosition: 'OH',
      role: 'Player',
      teamId: 'KAL',
      teamName: '대한항공',
      // participantPosition: 'OP',
      // startingReserve: '선발',
    },
  ],
  selectList: [],
};

export const EntryDataThunk = createAsyncThunk(
  'EntryDataThunk/post',
  async (payload, thunkApi) => {
    console.log('엔트리 포스트 post', payload);
    try {
      const response = await axios.post('', payload);
      console.log('엔트리 리스폰스', response);
      return thunkApi.fulfillWithValue(response);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const GetEntryDataThunk = createAsyncThunk(
  'EntryDataThunk/get',
  async (payload, thunkApi) => {
    console.log('엔드리 get', payload);
    try {
      const response = await axios.get('');
      console.log('서버 get data', response);
      return thunkApi.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const DeleteEntryDataThunk = createAsyncThunk(
  'EntryDataThunk/delete',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.delete(`/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const LineUpListDataThunk = createAsyncThunk(
  'LineUpListDataThunk/post',
  async (payload, thunkApi) => {
    console.log('라인업 포스트 post', payload);
    try {
      const response = await axios.post('', payload);
      console.log('라인업 리스폰스', response);
      return thunkApi.fulfillWithValue(response);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const GetLineUpListDataThunk = createAsyncThunk(
  'LineUpListDataThunk/get',
  async (payload, thunkApi) => {
    console.log('라인업 get', payload);
    try {
      const response = await axios.get('');
      console.log('라인업 get data', response);
      return thunkApi.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const DeleteLineUpListDataThunk = createAsyncThunk(
  'LineUpListDataThunk/delete',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.delete(`/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const entrySlice = createSlice({
  name: 'entry',
  initialState,
  reducers: {
    onSelect: (state, action) => {
      //   console.log(state, action);
      state.selectList = action.payload;
    },
    onReset: (state, action) => {
      state.selectList = [];
    },
  },
  extraReducers: {
    [EntryDataThunk.fulfilled]: (state, action) => {
      console.log(action);
      state.codeDataList = [...action.payload, state.codeDataList];
    },
    [EntryDataThunk.rejected]: (state, action) => {
      console.log(action);
    },
    [GetEntryDataThunk.fulfilled]: (state, action) => {
      state.entryList = action.payload;
    },
    [GetEntryDataThunk.rejected]: (state, action) => {
      console.log(action);
    },
    [DeleteEntryDataThunk.fulfilled]: (state, action) => {
      state.entryList = state.entryList.filter(
        (post) => post.id !== action.payload
      );
    },
    [DeleteEntryDataThunk.rejected]: (state, action) => {
      console.log(action);
    },
    [LineUpListDataThunk.fulfilled]: (state, action) => {
      console.log(action);
      state.lineUpList = [...action.payload, state.lineUpList];
    },
    [LineUpListDataThunk.rejected]: (state, action) => {
      console.log(action);
    },
    [GetLineUpListDataThunk.fulfilled]: (state, action) => {
      state.lineUpList = action.payload;
    },
    [GetLineUpListDataThunk.rejected]: (state, action) => {
      console.log(action);
    },
    [DeleteLineUpListDataThunk.fulfilled]: (state, action) => {
      state.lineUpList = state.lineUpList.filter(
        (post) => post.id !== action.payload
      );
    },
    [DeleteLineUpListDataThunk.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export const { onSelect, onReset } = entrySlice.actions;
export default entrySlice.reducer;
