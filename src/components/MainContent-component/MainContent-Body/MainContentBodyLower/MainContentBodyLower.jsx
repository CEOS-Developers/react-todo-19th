import styled from 'styled-components';
import OneDayContainer from './OneDayConatiner/OneDayContainer';

const StyledMainContentBodyLower = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export default function MainContentBodyLower() {
  return (
    <StyledMainContentBodyLower>
      <OneDayContainer />
    </StyledMainContentBodyLower>
  );
}
