import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { db } from '../../../firebase.config';
import { getAppRoomId, getAppRoomName } from '../../store/app/appselectors';
import ChatInput from '../ChatInput/ChatInput';
import { orderBy, query } from 'firebase/firestore';
import Message from '../Message/Message';
import { IMessage } from '../../types/message';
import { useEffect, useRef } from 'react';

const Chat = () => {
  const roomId = useSelector(getAppRoomId);
  const roomName = useSelector(getAppRoomName);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [messages, loading] = useCollection(
    query(
      collection(db, `channels/${roomId}/messages`),
      orderBy('timestamp', 'asc')
    )
  );

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  return (
    <ChatContainer>
      <div className='header'>
        <div className='left'>
          <h3>
            <strong># {roomName}</strong>
          </h3>
          <StarBorderIcon />
        </div>
        <div className='right'>
          <p>
            <HelpOutlineIcon style={{ fontSize: '22px' }} />
            Details
          </p>
        </div>
      </div>
      <div className='messages'>
        {messages?.docs.map((message) => (
          <Message message={message.data() as IMessage} key={message.id} />
        ))}
      </div>
      <ChatBottom ref={bottomRef} />
      <ChatInput roomId={roomId} roomName={roomName} />
    </ChatContainer>
  );
};
export default Chat;

const ChatContainer = styled.div`
  padding: 55px;
  flex: 0.7;
  overflow-y: scroll;
  padding: 15px;
  height: 100vh;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    padding: 10px;

    .left {
      display: flex;
      align-items: center;
      gap: 10px;
      h3 {
        text-transform: lowercase;
        font-size: 14px;
      }
    }

    .right p {
      display: flex;
      gap: 5px;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }
  }
`;

const ChatBottom = styled.div`
  padding-bottom: 100px;
`;
