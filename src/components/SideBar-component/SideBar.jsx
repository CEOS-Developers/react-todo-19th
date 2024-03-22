import styled from 'styled-components';
import SideBarExplanation from './SideBarExplanation';
import DateCard from './DateCard';
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const StyledSideBarDateOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  margin-bottom: 20px;
`;

const StyledSideBar = styled.aside`
  width: 20%;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledDateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  flex-grow: 1;
`;

function getDateString(dateString, calculateDay) {
  const [year, month, day] = dateString.split('-').map(Number);

  const date = new Date(year, month - 1, day);

  const yesterdayDate = new Date(date);
  yesterdayDate.setDate(date.getDate() - calculateDay);

  const yesterdayYear = yesterdayDate.getFullYear();
  const yesterdayMonth = String(yesterdayDate.getMonth() + 1).padStart(2, '0');
  const yesterdayDay = String(yesterdayDate.getDate()).padStart(2, '0');

  return `${yesterdayYear}-${yesterdayMonth}-${yesterdayDay}`;
}

export default function SideBar() {
  const { selectedDayString } = useContext(ThemeContext);

  const dateArray = [];
  for (let i = -2; i <= 2; i++) {
    dateArray.push(getDateString(selectedDayString, i));
  }

  return (
    <StyledSideBar>
      <SideBarExplanation />
      <StyledSideBarDateOuterContainer>
        <StyledDateContainer>
          <DateCard date={dateArray[4]} />
          <DateCard date={dateArray[3]} />
          <DateCard date={dateArray[2]} />
          <DateCard date={dateArray[1]} />
          <DateCard date={dateArray[0]} />
        </StyledDateContainer>
      </StyledSideBarDateOuterContainer>
    </StyledSideBar>
  );
}
