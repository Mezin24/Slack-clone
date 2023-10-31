import { Timestamp } from 'firebase/firestore';

export interface IMessage {
  text: string;
  timestamp: Timestamp;
  user: string;
  userUrl: string;
}
