import styled from 'styled-components'
import dayjs from 'dayjs'

const TodoInputFieldWrapper = styled.form`
    height: 3.5rem;
    width: 90%;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    border-bottom: 0.1rem solid #968E8E;
`
const InputField = styled.input`
    border: none;
    padding: 0;
    flex-grow: 1;
    color: black;
    font-size: 1.3rem;
    font-weight: normal;
    &::placeholder{
    color: black;
    font-size: 1.3rem;
    font-weight: normal;
    }
`
const SubmitButton = styled.button`
    border: none;
    margin-left: auto;
    width: 10%;
    background-color: #fff;
    color: #2F82FE;
    font-size: 3rem;
    font-weight: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

function TodoInputField({ lists, setLists, value, setValue}) {
//inputfield에 값 넣기
const handleChange = (e) =>{
    setValue(e.target.value);
}

const onSubmit = (e) => {
    e.preventDefault();
    if(!value.trim()){
        alert('할일을 입력 해 주세요')
    }
    getList(value);
    setValue("");
}

//객체 생성
function getList(todo) {
    const newList = {
        id: dayjs(),
        title: todo,
        completed: false
    }
    setLists([...lists, newList]);
    localStorage.setItem("lists", JSON.stringify([...lists, newList]))
}

  return (
    <TodoInputFieldWrapper onSubmit={onSubmit}>
        <InputField 
            placeholder='To do'
            onChange={handleChange}
            value={value}
        />
        <SubmitButton type='submit'>+</SubmitButton>
    </TodoInputFieldWrapper>
  )
  
}

export default TodoInputField