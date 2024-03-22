import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../../../../../../context';
import DoneItemUI from './DoneItemUI';

const StyledDoneContentArea = styled.div`
  flex-grow: 9;
  flex-shrink: 0;
  max-height: 90%;
  overflow-y: scroll;
  overflow-wrap: break-word;
  height: 10%;
`;

export default function DoneContentArea() {
  const { selectedDayDoneList } = useContext(ThemeContext);

  return (
    <StyledDoneContentArea className="scroll-box">
      {selectedDayDoneList &&
        selectedDayDoneList.map((done) => {
          return <DoneItemUI text={done} key={done} />;
        })}
    </StyledDoneContentArea>
  );
}
