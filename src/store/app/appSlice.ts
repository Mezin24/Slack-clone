import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppSchema {
  roomId: string | null;
}

const initialState: AppSchema = {
  roomId: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    enterRoom: (state, { payload }: PayloadAction<{ roomId: string }>) => {
      state.roomId = payload.roomId;
    },
  },
});

export const { actions: appActions } = appSlice;
export const { reducer: appReducer } = appSlice;
