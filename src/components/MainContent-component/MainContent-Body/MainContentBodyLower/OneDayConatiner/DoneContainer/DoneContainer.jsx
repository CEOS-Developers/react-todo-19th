import styled from 'styled-components';
import DoneLabel from './DoneLabel';
import DoneContentArea from './DoneContentArea';

const StyledDoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 49%;
  background-color: #bcdbad;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    background-color: white;
    flex-grow: 1;
    flex-shrink: 0;
    width: 100%;
    height: 45%;
    min-height: 45%;
    border-radius: 20px;
  }
`;

export default function DoneContainer() {
  return (
    <StyledDoneContainer>
      <DoneLabel />
      <DoneContentArea />
    </StyledDoneContainer>
  );
}
