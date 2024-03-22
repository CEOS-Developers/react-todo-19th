import styled from 'styled-components';

const StyledMainContentFooter = styled.footer`
  height: 10%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  color: rgba(85, 85, 85, 0.8);
  @media screen and (max-width: 768px) {
    background-color: #bcdbad;
  }
`;

export default function MainContentFooter() {
  return (
    <StyledMainContentFooter>
      <p>All rights reserved © Seungwan, Kim 2024</p>
    </StyledMainContentFooter>
  );
}
