import React from 'react'
import {styled, css} from 'styled-components'
import iconLineCheck from '../../assets/circle-check-regular.svg'
import iconSolidCheck from '../../assets/circle-check-solid.svg'
import iconDelete from '../../assets/circle-minus-solid.svg'



const ItemsWrapper = styled.div`
  background-color: #fff;
  width: 90%;
  margin: 0.9rem auto;
  border: 0.05rem solid #CBC0C0;
  border-radius: 10px;
  box-shadow: 0px 4px 4px #CBC0C0;
  display: flex;
  flex-direction: row;
`
const TodoText = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin: 1.2rem 0;
  padding: 0 1rem;
  font-size: 1.2rem;
  font-weight: normal;
  word-break:break-all;
`
export const button = css`
  width: 1.2rem;
  height: 1.2rem;
  margin: auto 1rem auto 0rem;
  cursor: pointer;
`

const DeleteButton = styled.img`
  ${button}
`
const CheckButton = styled.img`
  ${button}
`

function ListsItems({todo, data, deleteTodo, toggleTodo}) {
  

  return (
    <ItemsWrapper>
      <TodoText>{todo}</TodoText>
      <CheckButton 
        onClick={() => toggleTodo(data.id)}
        src = {data.completed ? iconSolidCheck: iconLineCheck}
      ></CheckButton>
      <DeleteButton 
      onClick={() => deleteTodo(data.id)}
      src = {iconDelete}/>
    </ItemsWrapper>
  )
}

export default ListsItems