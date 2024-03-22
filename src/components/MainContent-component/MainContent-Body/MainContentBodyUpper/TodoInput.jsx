import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useContext, useRef } from 'react';
import { ThemeContext } from '../../../../context';
import makeUniqueTodoDateString from '../../../../utils/makeTimeString';

const StyledInputFormContainer = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  width: 100%;
  position: relative;
`;

const StyledInputForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 15px;
  @media screen and (max-width: 768px) {
    justify-content: space-evenly;
    justify-content: center;
    column-gap: 10px;
  }
`;

const StyledTodoTextInput = styled.input`
  border: none;
  outline: none;
  height: 35px;
  text-indent: 15px;
  min-width: 300px;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    width: 250px;
    min-width: 250px;
  }
`;

const StyledTodoSubmitButton = styled(FontAwesomeIcon)`
  width: 30px;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledTasksDone = styled.div`
  position: absolute;
  bottom: 15px;
  right: 25px;
  font-size: 20px;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    bottom: 5px;
    right: 8px;
  }
`;

export default function TodoInput() {
  const {
    selectedDayString,
    selectedDayTodoList,
    setSelectedDayTodoList,
    selectedDayDoneList,
  } = useContext(ThemeContext);
  const todoInputRef = useRef();

  function handleClickPlusLogoButton() {
    const localStorageKey = `${selectedDayString}todo`;
    const prevLocalStorageData =
      localStorage.getItem(localStorageKey) === null
        ? []
        : JSON.parse(localStorage.getItem(localStorageKey));
    const currentTimeUniqueString = makeUniqueTodoDateString();
    prevLocalStorageData.push(
      `${todoInputRef.current.value}${currentTimeUniqueString}`
    );
    localStorage.setItem(localStorageKey, JSON.stringify(prevLocalStorageData));
    setSelectedDayTodoList(prevLocalStorageData);
    todoInputRef.current.value = '';
  }

  function handleSubmitTodoInputForm(event) {
    event.preventDefault();
    handleClickPlusLogoButton();
  }

  const todoNum = selectedDayTodoList ? selectedDayTodoList.length : 0;
  const doneNum = selectedDayDoneList ? selectedDayDoneList.length : 0;

  return (
    <StyledInputFormContainer onSubmit={handleSubmitTodoInputForm}>
      <StyledInputForm>
        <StyledTodoTextInput
          type="text"
          placeholder="Add your new Todo List!"
          ref={todoInputRef}
        />
        <StyledTodoSubmitButton
          icon={faCirclePlus}
          onClick={handleClickPlusLogoButton}
        />
      </StyledInputForm>
      <StyledTasksDone>
        Tasks Done : {doneNum} / {doneNum + todoNum}{' '}
      </StyledTasksDone>
    </StyledInputFormContainer>
  );
}
