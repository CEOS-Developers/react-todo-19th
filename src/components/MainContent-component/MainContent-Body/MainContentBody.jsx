import styled from 'styled-components';
import MainContentBodyUpper from './MainContentBodyUpper/MainContentBodyUpper';
import MainContentBodyLower from './MainContentBodyLower/MainContentBodyLower';

const StyledMainContentBody = styled.div`
  height: 80%;
  margin-top: 80px;
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    background-color: #bcdbad;
  }
`;

export default function MainContentBody() {
  return (
    <StyledMainContentBody>
      <MainContentBodyUpper />
      <MainContentBodyLower />
    </StyledMainContentBody>
  );
}
