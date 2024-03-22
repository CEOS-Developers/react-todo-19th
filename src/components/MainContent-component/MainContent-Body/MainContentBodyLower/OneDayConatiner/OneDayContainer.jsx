import styled from 'styled-components';
import TodoContainer from './TodoContainer/TodoContainer';
import DoneContainer from './DoneContainer/DoneContainer';

const StyledOneDayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    row-gap: 20px;
  }
`;

export default function OneDayContainer() {
  return (
    <StyledOneDayContainer>
      <TodoContainer />
      <DoneContainer />
    </StyledOneDayContainer>
  );
}
