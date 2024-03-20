import React, { useState } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

const TodoInputFieldWrapper = styled.form`
    height: 2.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-bottom: 0.1rem solid #968E8E;
`
const InputField = styled.input`
    border: none;
   flex-grow: 1;
    color: black;
    font-size: 1.3rem;
    font-weight: normal;
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
`

function TodoInputField() {
//로컬스토리지 기존 값 가져오기
const savedLists = localStorage.getItem("lists")? JSON.parse(localStorage.getItem("lists")):[];
const [lists, setLists] = useState(savedLists);

//inputfield에 값 넣기
const [value, setValue] = useState("");
const handleChange = (e) =>{
    setValue(e.target.value);
}

const onSubmit = (e) => {
    e.preventDefault();
    if(!value.trim()){
        alert('할일을 입력 해 주세요')
    }
    console.log(value);
    getList(value);
    setValue("");
}

//객체 생성
function getList(todo) {
    const newList = {
        id: dayjs(),
        todo: todo,
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