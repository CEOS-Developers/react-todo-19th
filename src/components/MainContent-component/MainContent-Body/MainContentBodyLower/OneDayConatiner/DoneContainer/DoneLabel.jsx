import styled from 'styled-components';

const StyledDoneLabel = styled.div`
  width: 100%;
  height: 10%;
  flex-grow: 1;
  flex-shrink: 0;
  min-height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    height: 50px;
    min-height: 50px;
  }
`;

export default function DoneLabel() {
  return <StyledDoneLabel>Done</StyledDoneLabel>;
}
