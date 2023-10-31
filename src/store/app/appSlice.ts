import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppSchema {
  roomId: string | null;
  roomName: string | null;
}

const initialState: AppSchema = {
  roomId: null,
  roomName: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    enterRoom: (state, { payload }: PayloadAction<AppSchema>) => {
      state.roomId = payload.roomId;
      state.roomName = payload.roomName;
    },
  },
});

export const { actions: appActions } = appSlice;
export const { reducer: appReducer } = appSlice;
