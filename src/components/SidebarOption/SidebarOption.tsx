import styled from 'styled-components';
import { SidebarOptionType } from '../Sidebar/sidebarOptiopns';
import { useCallback } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase.config.ts';

export interface SidebarOptionProps {
  option: SidebarOptionType;
  addChanelOption?: boolean;
}

const SidebarOption = ({ option, addChanelOption }: SidebarOptionProps) => {
  const { Icon, title } = option;

  const addChanel = useCallback(async () => {
    const channelName = prompt('Please enter a new channel name');
    if (channelName) {
      await addDoc(collection(db, 'channels'), {
        name: channelName,
      });
    }
  }, []);

  const select = useCallback(() => {}, []);

  return (
    <SidebarOptionContainer onClick={addChanelOption ? addChanel : select}>
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
  h3 > span {
    padding: 15pxs;
  }
`;
