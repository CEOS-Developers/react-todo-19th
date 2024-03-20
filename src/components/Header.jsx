import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Title>아기자기 TODO</Title>
      <Date>날짜</Date>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #7d7e7e;
  margin-bottom: 30px;
`;

const Title = styled.h2`
  font-size: 30px;
`;

const Date = styled.span`
  font-size: 25px;
`;
