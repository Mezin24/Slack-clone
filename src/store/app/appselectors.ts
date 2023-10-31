import { StateSchema } from '../StateSchema';

export const getAppRoomId = (state: StateSchema) => state.app.roomId;
export const getAppRoomName = (state: StateSchema) => state.app.roomName;
