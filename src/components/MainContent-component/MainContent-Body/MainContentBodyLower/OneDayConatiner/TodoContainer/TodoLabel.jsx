import styled from 'styled-components';

const StyledTodoLabel = styled.div`
  width: 100%;
  height: 10%;
  flex-grow: 1;
  flex-shrink: 0;
  min-height: 10%;
`;

export default function TodoLabel() {
  return <StyledTodoLabel>Todo</StyledTodoLabel>;
}
