import styled from 'styled-components';
import { SidebarOptionType } from '../Sidebar/sidebarOptiopns';
import { useCallback } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase.config.ts';
import { useDispatch } from 'react-redux';
import { appActions } from '../../store/app/appSlice.ts';
import { AppDispatch } from '../../store/index.ts';

export interface SidebarOptionProps {
  option: SidebarOptionType;
  addChanelOption?: boolean;
  id?: string;
}

const SidebarOption = ({ option, addChanelOption, id }: SidebarOptionProps) => {
  const { Icon, title } = option;
  const dispatch: AppDispatch = useDispatch();

  const addChanel = useCallback(async () => {
    const channelName = prompt('Please enter a new channel name');
    if (channelName) {
      await addDoc(collection(db, 'channels'), {
        name: channelName,
      });
    }
  }, []);

  const selectChannel = useCallback(() => {
    if (id) {
      dispatch(appActions.enterRoom({ roomId: id }));
    }
  }, [dispatch, id]);

  return (
    <SidebarOptionContainer
      onClick={addChanelOption ? addChanel : selectChannel}
    >
      {Icon && <Icon fontSize='small' />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span>
          {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
};
export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  padding: 10px;
  padding-left: 2px;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  h3 {
    font-weight: 500;
  }
`;

const SidebarOptionChannel = styled.div`
  padding: 6px;
  font-weight: 300;
  font-size: 14px;

  span {
    margin-right: 10px;
  }
`;
