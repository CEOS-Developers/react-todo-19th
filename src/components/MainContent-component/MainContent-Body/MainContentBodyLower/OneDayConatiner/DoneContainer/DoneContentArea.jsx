import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../../../../../../context';
import DoneItemUI from './DoneItemUI';

const StyledDoneContentArea = styled.div`
  flex-grow: 9;
  flex-shrink: 0;
`;

export default function DoneContentArea() {
  const {
    selectedDayString,
    setSelectedDayString,
    selectedDayTodoList,
    setSelectedDayTodoList,
    selectedDayDoneList,
    setSelectedDayDoneList,
  } = useContext(ThemeContext);

  return (
    <StyledDoneContentArea>
      {selectedDayDoneList &&
        selectedDayDoneList.map((done) => {
          return <DoneItemUI text={done} key={done} />;
        })}
    </StyledDoneContentArea>
  );
}
