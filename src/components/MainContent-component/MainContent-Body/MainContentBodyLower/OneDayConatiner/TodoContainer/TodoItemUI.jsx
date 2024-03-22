import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ThemeContext } from '../../../../../../context';

const StyledTodoItemUI = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20%;
  min-height: 20%;
  padding-left: 20px;
  font-size: 20px;
  font-weight: 500;
  margin: 0 5px;
  border-radius: 10px;
  margin-bottom: 5px;
  &:hover {
    background-color: #d5e9cb;
  }
`;

const StyledTodoItemText = styled.p`
  width: 65%;
`;

const StyledIconsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
  justify-content: center;
  column-gap: 13px;
`;

const StyledCheckIcon = styled(FontAwesomeIcon)`
  &:hover {
    cursor: pointer;
  }
`;
const StyledTrashCanIcon = styled(FontAwesomeIcon)`
  &:hover {
    cursor: pointer;
  }
`;

export default function TodoItemUI({ text }) {
  const { selectedDayString, setSelectedDayTodoList, setSelectedDayDoneList } =
    useContext(ThemeContext);

  const localStorageTodoKey = `${selectedDayString}todo`;
  const localStorageDoneKey = `${selectedDayString}done`;

  function handleClickCheckIcon() {
    const prevLocalStorageData = JSON.parse(
      localStorage.getItem(localStorageTodoKey)
    );
    const prevItemLocalStorageIndex = prevLocalStorageData.indexOf(text);
    prevLocalStorageData.splice(prevItemLocalStorageIndex, 1);
    localStorage.setItem(
      localStorageTodoKey,
      JSON.stringify(prevLocalStorageData)
    );

    const prevLocalStorageDoneData =
      localStorage.getItem(localStorageDoneKey) === null
        ? []
        : JSON.parse(localStorage.getItem(localStorageDoneKey));
    prevLocalStorageDoneData.push(text);
    localStorage.setItem(
      localStorageDoneKey,
      JSON.stringify(prevLocalStorageDoneData)
    );

    setSelectedDayTodoList(prevLocalStorageData);
    setSelectedDayDoneList(prevLocalStorageDoneData);
  }

  // 로컬 스토리지에서 삭제하고 UI에서도 삭제를 해야함
  function handleClickTrashIcon() {
    const prevLocalStorageData = JSON.parse(
      localStorage.getItem(localStorageTodoKey)
    );

    const prevLocalStorageIndex = prevLocalStorageData.indexOf(text);
    prevLocalStorageData.splice(prevLocalStorageIndex, 1);
    localStorage.setItem(
      localStorageTodoKey,
      JSON.stringify(prevLocalStorageData)
    );
    setSelectedDayTodoList(prevLocalStorageData);
  }
  return (
    <StyledTodoItemUI>
      <StyledTodoItemText>{text.slice(0, text.length - 13)}</StyledTodoItemText>
      <StyledIconsContainer>
        <StyledCheckIcon icon={faCheck} onClick={handleClickCheckIcon} />
        <StyledTrashCanIcon icon={faTrashCan} onClick={handleClickTrashIcon} />
      </StyledIconsContainer>
    </StyledTodoItemUI>
  );
}
