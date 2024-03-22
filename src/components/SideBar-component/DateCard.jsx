import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const StyledDateCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  font-size: 22px;
  font-weight: 500;
  column-gap: 20px;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: #bcdbad;
  }
`;

export default function DateCard({ date }) {
  const {
    setSelectedDayString,
    setSelectedDayTodoList,
    setSelectedDayDoneList,
  } = useContext(ThemeContext);

  function handleClickDateCard() {
    setSelectedDayString(date);
    const newSelectedDayTodoKey = `${date}todo`;
    const newSelectedDayDoneKey = `${date}done`;
    const prevLocalStorageTodoData =
      localStorage.getItem(newSelectedDayTodoKey) === null
        ? []
        : JSON.parse(localStorage.getItem(newSelectedDayTodoKey));
    const prevLocalStorageDoneData =
      localStorage.getItem(newSelectedDayDoneKey) === null
        ? []
        : JSON.parse(localStorage.getItem(newSelectedDayDoneKey));
    setSelectedDayTodoList(prevLocalStorageTodoData);
    setSelectedDayDoneList(prevLocalStorageDoneData);
  }
  return (
    <StyledDateCard onClick={handleClickDateCard}>
      <FontAwesomeIcon icon={faCalendar} />
      {date}
    </StyledDateCard>
  );
}
