import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../../../../../../context';
import TodoItemUI from './TodoItemUI';

const StyledTodoContentArea = styled.div`
  flex-grow: 9;
  flex-shrink: 0;
  max-height: 90%;
  overflow-y: scroll;
  overflow-wrap: break-word;
  height: 10%;
`;

export default function TodoContentArea() {
  const { selectedDayTodoList } = useContext(ThemeContext);

  return (
    <StyledTodoContentArea className="scroll-box">
      {selectedDayTodoList &&
        selectedDayTodoList.map((todo) => {
          return <TodoItemUI text={todo} key={todo} />;
        })}
    </StyledTodoContentArea>
  );
}
