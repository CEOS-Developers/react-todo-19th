import styled from 'styled-components';
import { flexCenter } from 'styles/commonStyle';

function TodoCreate() {
  return (
    <InputForm>
      <InputContainer>
        <InputWrapper className="input-wrapper">
          <input className="input" placeholder="할 일 입력" />
          <button className="input-button">입력</button>
        </InputWrapper>
        <p className="error"></p>
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
  display: flex;
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
