import React, { useState, useEffect } from 'react';
import WeekSwitcher from './components/WeekSwitcher';
import Schedule from './components/Schedule';
import './App.css';

function App() {
  const [isEvenWeek, setIsEvenWeek] = useState(true);

  // Функция для определения четной/нечетной недели
  const getWeekNumber = (date) => {
    const startDate = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
    const weekNumber = Math.ceil((days + startDate.getDay() + 1) / 7);
    return weekNumber;
  };

  const determineEvenWeek = () => {
    const currentWeek = getWeekNumber(new Date());
    return currentWeek % 2 === 0;
  };

  // Используем useEffect для автоматического определения при загрузке
  useEffect(() => {
    setIsEvenWeek(determineEvenWeek());
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">ФИИТ-21</div>
        <WeekSwitcher setIsEvenWeek={setIsEvenWeek} />
      </nav>
      <Schedule isEvenWeek={isEvenWeek} />
    </div>
  );
}

export default App;
