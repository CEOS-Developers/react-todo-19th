import { useState } from 'react';
import styled from 'styled-components';
import { flexCenter, flexColumn } from 'styles/commonStyle';
import { v4 as uuidv4 } from 'uuid';

function TodoCreate({ dispatch }) {
  const [inputValue, setInputValue] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue?.trim()) {
      setIsError(true);
      return;
    }

    dispatch({
      type: 'ADD_TODO',
      payload: {
        id: uuidv4(),
        text: inputValue,
      },
    });

    setIsError(false);
    setInputValue('');
  };

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <InputForm onSubmit={handleSubmit}>
      <InputContainer>
        <InputWrapper>
          <input className="input" placeholder="할 일 입력" value={inputValue} onChange={handleInputValueChange} />
          <button className="input-button">입력</button>
        </InputWrapper>
        <ErrorMessage $isError={isError}>할 일을 입력해주세요</ErrorMessage>
      </InputContainer>
    </InputForm>
  );
}

export default TodoCreate;

const InputForm = styled.form`
  display: flex;
  width: 100%;
  height: 6rem;
  ${flexCenter}
`;

const InputContainer = styled.div`
  ${flexColumn}
  height: 100%;
  gap: 1rem;
`;

const InputWrapper = styled.div`
  display: flex;
  height: 100%;
  gap: 1rem;

  & {
    font-size: 2.5rem;
  }

  .input {
    width: 40rem;
    padding: 1rem;
    border-radius: 1rem;
  }

  .input:focus {
    border: 0.1rem solid #6d6afe;
  }

  .input-button {
    width: 8rem;
    padding: 0.2rem;
    background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    color: white;
    font-weight: 200;
    border-radius: 1rem;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1.7rem;
  margin-left: 0.4rem;

  visibility: ${({ isError }) => (isError ? 'visible' : 'hidden')};
`;
