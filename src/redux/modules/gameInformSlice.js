import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rosterList: [],
  lineUpList: [
    {
      id: 1,
      participantOrder: 10,
      participantId: '1',
      createdTime: 'null',
      participantBIB: '11',
      participantName: '수지',
      participantPosition: 'OH',
      role: 'Player',
      teamId: 'KAL',
      teamName: '대한항공',
      participation: 'Y',
    },
  ],
  lineUpSelectList: [],
  rosterSelectList: [],
  gameData: [],
  isSelect: true,
};

export const GameDataThunk = createAsyncThunk(
  'GameDataThunk/get',
  async (payload, thunkApi) => {
    try {
      const response = await axios.get('/api/game/selectSet');
      return thunkApi.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const PostRosterDataThunk = createAsyncThunk(
  'RosterDataThunk/post',
  async (payload, thunkApi) => {
    console.log('선수명단 포스트 post', payload);
    try {
      const response = await axios.post('', payload);
      console.log('선수명단 리스폰스', response);
      return thunkApi.fulfillWithValue(response);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const GetRosterDataThunk = createAsyncThunk(
  'RosterDataThunk/get',
  async (payload, thunkApi) => {
    try {
      const response = await axios.get('/api/team/selectTeamroster');
      console.log('서버 get data', response);
      return thunkApi.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const DeleteRosterDataThunk = createAsyncThunk(
  'RosterDataThunk/delete',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.delete(`/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const PostLineUpListDataThunk = createAsyncThunk(
  'LineUpListDataThunk/post',
  async (payload, thunkApi) => {
    console.log('라인업 포스트 post', payload);
    try {
      const response = await axios.post('/api/team/insertTeamroster', payload);
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
      // console.log('라인업 get data', response);
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

const gameInformSlice = createSlice({
  name: 'GameInform',
  initialState,
  reducers: {
    onRosterSelect: (state, action) => {
      state.rosterSelectList = action.payload;
    },
    onLineUpSelect: (state, action) => {
      state.lineUpSelectList = action.payload;
    },
    onReset: (state, action) => {
      state.rosterSelectList = [];
      state.lineUpSelectList = [];
    },
    onChange: (state, action) => {
      state.rosterList = action.payload;
    },
    isSelect: (state, action) => {
      state.isSelect = action.payload;
    },
  },
  extraReducers: {
    [GameDataThunk.fulfilled]: (state, action) => {
      state.gameData = action.payload;
    },
    [GameDataThunk.rejected]: (state, action) => {
      console.log(action);
    },
    [PostRosterDataThunk.fulfilled]: (state, action) => {
      console.log(action);
      state.codeDataList = [...action.payload, state.codeDataList];
    },
    [PostRosterDataThunk.rejected]: (state, action) => {
      console.log(action);
    },
    [GetRosterDataThunk.fulfilled]: (state, action) => {
      state.rosterList = action.payload;
    },
    [GetRosterDataThunk.rejected]: (state, action) => {
      console.log(action);
    },
    [DeleteRosterDataThunk.fulfilled]: (state, action) => {
      state.rosterList = state.rosterList.filter(
        (post) => post.participantOrder !== action.payload
      );
    },
    [DeleteRosterDataThunk.rejected]: (state, action) => {
      console.log(action);
    },
    [PostLineUpListDataThunk.fulfilled]: (state, action) => {
      console.log(action);
      state.lineUpList = [...action.payload, state.lineUpList];
    },
    [PostLineUpListDataThunk.rejected]: (state, action) => {
      console.log(action);
    },
    [GetLineUpListDataThunk.fulfilled]: (state, action) => {
      state.lineUpList.filter((get) => get.participation === true);
    },
    [GetLineUpListDataThunk.rejected]: (state, action) => {
      console.log(action);
    },
    [DeleteLineUpListDataThunk.fulfilled]: (state, action) => {
      state.lineUpList = state.lineUpList.filter(
        (post) => post.participantOrder !== action.payload
      );
    },
    [DeleteLineUpListDataThunk.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export const { onLineUpSelect, onRosterSelect, onReset, onChange, isSelect } =
  gameInformSlice.actions;
export default gameInformSlice.reducer;
