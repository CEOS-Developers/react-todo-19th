import React from 'react';

export default function TodayDate() {
  const today = new Date();
  const days = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  const date = `${today.getFullYear()}-${(today.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
  const day = days[today.getDay()];

  return (
    <h3>
      {date} {day}
    </h3>
  );
}
