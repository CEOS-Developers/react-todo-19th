import styled from "styled-components";

const Header = () => {
  const getTodayDate = () => {
    const today = new Date();
    const week = ["일", "월", "화", "수", "목", "금", "토"];

    const year = today.getFullYear();
    const month = ("0" + (today.getMonth() + 1)).slice(-2);
    const day = ("0" + today.getDate()).slice(-2);
    const dayOfWeek = week[today.getDay()];

    return `${year}.${month}.${day} ${dayOfWeek}요일`;
  };

  return (
    <Wrapper>
      <Title>아기자기 TODO</Title>
      <TodayDate>{getTodayDate()}</TodayDate>
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

const TodayDate = styled.span`
  font-size: 25px;
`;
