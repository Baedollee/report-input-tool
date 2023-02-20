import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rosterList: [],
  lineUpList: [],
  lineUpSelectList: [],
  rosterSelectList: [],
  tableRosterSelectList: [],
  tableLineUpSelectList: [],
  gameData: [
    // {
    //   awayScore: 0,
    //   awayScoreSum: 0,
    //   awaySetScore: 0,
    //   awayTeam: 'KEP',
    //   awayWL: null,
    //   broadcaster: null,
    //   competitionCode: '22-23V',
    //   createdTime: '2023-02-06T09:19:42.459+00:11',
    //   gameCode: '22-23VMENR3-123',
    //   gameDate: '2023-02-02',
    //   gameDay: null,
    //   gameLocation: null,
    //   gameNum: 123,
    //   gameStatus: null,
    //   gameTime: null,
    //   gender: 'M',
    //   homeScore: 0,
    //   homeScoreSum: 0,
    //   homeSetScore: 1,
    //   homeTeam: 'KAL',
    //   homeWL: null,
    //   roundSeq: 4,
    //   setNum: 0,
    //   setTime: 0,
    //   spectatorNumber: null,
    //   totalSetTime: 0,
    // },
  ],
  Select: true,
};

export const GameDataThunk = createAsyncThunk(
  'GameDataThunk/get',
  async (payload, thunkApi) => {
    try {
      const response = await axios.get(payload);
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
      const response = await axios.post('/api/team/updateTeamroster', payload);
      // console.log('선수명단 리스폰스', response);
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
    console.log('라인업 포스트 post');
    try {
      const response = await axios.post(
        '/api/startlist/insertStartlist',
        payload
      );
      // return thunkApi.fulfillWithValue(response);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const GetLineUpListDataThunk = createAsyncThunk(
  'LineUpListDataThunk/get',
  async (payload, thunkApi) => {
    try {
      const response = await axios.get('/api/startlist/selectPlayerList');
      // console.log('라인업 get data', response.data);
      return thunkApi.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const DeleteLineUpListDataThunk = createAsyncThunk(
  'LineUpListDataThunk/delete',
  async (payload, thunkAPI) => {
    console.log('삭제삭제', payload);
    try {
      const response = await axios.put(
        '/api/startlist/deleteStartlist',
        payload
      );
      console.log('삭제요청 리스폰스', response);
      return thunkAPI.fulfillWithValue([...payload]);
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
      state.rosterSelectList = action.payload;
      state.lineUpSelectList = action.payload;
      state.tableRosterSelectList = action.payload;
      state.tableLineUpSelectList = action.payload;
    },
    onChange: (state, action) => {
      state.rosterList = action.payload;
    },
    isSelect: (state, action) => {
      state.Select = action.payload;
    },
    ontableRosterSelect: (state, action) => {
      state.tableRosterSelectList = action.payload;
    },
    ontableLineUpSelect: (state, action) => {
      state.tableLineUpSelectList = action.payload;
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
      console.log('페이로드', action.payload);
      // state.lineUpList = [...action.payload, state.lineUpList];
    },
    [PostLineUpListDataThunk.rejected]: (state, action) => {
      console.log(action);
    },
    [GetLineUpListDataThunk.fulfilled]: (state, action) => {
      // state.lineUpList.filter((get) => get.participation === 'Y');
      state.lineUpList = action.payload;
    },
    [GetLineUpListDataThunk.rejected]: (state, action) => {
      console.log(action);
    },
    [DeleteLineUpListDataThunk.fulfilled]: (state, action) => {
      // state.lineUpList = state.lineUpList.filter(
      //   (post) => post.participantOrder !== action.payload
      // );
    },
    [DeleteLineUpListDataThunk.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export const {
  onLineUpSelect,
  onRosterSelect,
  onReset,
  onChange,
  isSelect,
  ontableRosterSelect,
  ontableLineUpSelect,
} = gameInformSlice.actions;
export default gameInformSlice.reducer;
