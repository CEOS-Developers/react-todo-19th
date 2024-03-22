import styled from 'styled-components';

const StyledSideBarExplanation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 600;
  height: 80px;
`;

export default function SideBarExplanation() {
  return <StyledSideBarExplanation>Easy Date pick</StyledSideBarExplanation>;
}
