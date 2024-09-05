import React from 'react';

const WeekSwitcher = ({ setIsEvenWeek }) => {
  return (
    <div className="week-switcher">
      <a href="#!" onClick={() => setIsEvenWeek(true)}>Чётная неделя</a>
      <a href="#!" onClick={() => setIsEvenWeek(false)}>Нечётная неделя</a>
    </div>
  );
};

export default WeekSwitcher;
