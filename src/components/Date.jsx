import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
dayjs.locale('ko')

//styles
const DateWrapper = styled.div`
  background-color: bisque;
`
const Title = styled.div`
  
`
const GetDate = styled.h1`
  
`
const GetWeek = styled.h3`
  
`


function Date() {
const date = dayjs();
const dateFormat = date.format('YYYY년 MM월 DD일');
const weekFormat = date.format('dddd')


  return (
    <DateWrapper>
      <Title>To do List</Title>
      <GetDate>{dateFormat}</GetDate>
      <GetWeek>{weekFormat}</GetWeek>
    </DateWrapper>
  )
}

export default Date