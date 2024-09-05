import React from 'react';

const evenWeekSchedule = [
  { 
    day: 'Понедельник', 
    subjects: [
      { time: '08:00 - 09:35', subject: '', room: '' },
      { time: '09:50 - 11:25', subject: '', room: '' },
      { time: '11:40 - 13:15', subject: '', room: '' },
      { time: '14:00 - 15:35', subject: '', room: '' },
      { time: '15:50 - 17:25', subject: '', room: '' },
      { time: '17:40 - 19:15', subject: '', room: '' },
    ] 
  },
  { 
    day: 'Вторник', 
    subjects: [
      { time: '08:00 - 09:35', subject: '', room: '' },
      { time: '09:50 - 11:25', subject: 'Блокчейн', room: '519' },
      { time: '11:40 - 13:15', subject: 'Мат моделирование', room: '519' },
      { time: '14:00 - 15:35', subject: '', room: '' },
      { time: '15:50 - 17:25', subject: '', room: '' },
      { time: '17:40 - 19:15', subject: 'Основы безопасности IT', room: 'дист' },
    ] 
  },
  { 
    day: 'Среда', 
    subjects: [
      { time: '08:00 - 09:35', subject: '', room: '' },
      { time: '09:50 - 11:25', subject: '', room: '' },
      { time: '11:40 - 13:15', subject: 'Анализ данных', room: '519' },
      { time: '14:00 - 15:35', subject: '', room: '' },
      { time: '15:50 - 17:25', subject: '', room: '' },
      { time: '17:40 - 19:15', subject: '', room: '' },
    ] 
  },
  { 
    day: 'Четверг', 
    subjects: [
      { time: '08:00 - 09:35', subject: '', room: '' },
      { time: '09:50 - 11:25', subject: '', room: '' },
      { time: '11:40 - 13:15', subject: '', room: '' },
      { time: '14:00 - 15:35', subject: '', room: ''},
      { time: '15:50 - 17:25', subject: 'Методы тестирования', room: '424' },
      { time: '19:20 - 20:30', subject: 'Разработка мобильных приложений', room: 'дист' },
    ] 
  },
  { 
    day: 'Пятница', 
    subjects: [
      { time: '08:00 - 09:35', subject: '', room: '' },
      { time: '09:50 - 11:25', subject: '', room: '' },
      { time: '11:40 - 13:15', subject: '', room: '' },
      { time: '14:00 - 15:35', subject: 'Блокчейн', room: '449' },
      { time: '15:50 - 17:25', subject: 'Системный анализ', room: '436' },
      { time: '17:40 - 19:15', subject: '', room: '' },
    ] 
  },
  { 
    day: 'Суббота', 
    subjects: [
      { time: '08:00 - 09:35', subject: '', room: '' },
      { time: '09:50 - 11:25', subject: 'Основы безопасности IT', room: '533' },
      { time: '11:40 - 13:15', subject: 'Проектная деятельность', room: '533' },
      { time: '14:00 - 15:35', subject: 'Блокчейн', room: '' },
      { time: '15:50 - 17:25', subject: '', room: '' },
      { time: '17:40 - 19:15', subject: '', room: '' },
    ] 
  },
];

const oddWeekSchedule = [
  { 
    day: 'Понедельник', 
    subjects: [
      { time: '08:00 - 09:35', subject: '', room: '' },
      { time: '09:50 - 11:25', subject: '', room: '' },
      { time: '11:40 - 13:15', subject: '', room: '' },
      { time: '14:00 - 15:35', subject: '', room: '' },
      { time: '15:50 - 17:25', subject: '', room: '' },
      { time: '17:40 - 19:15', subject: '', room: '' },
    ] 
  },
  { 
    day: 'Вторник', 
    subjects: [
      { time: '08:00 - 09:35', subject: '', room: '' },
      { time: '09:50 - 11:25', subject: 'Блокчейн', room: '519' },
      { time: '11:40 - 13:15', subject: 'Мат моделирование', room: '519' },
      { time: '14:00 - 15:35', subject: 'Мат моделирование', room: '324' },
      { time: '15:50 - 17:25', subject: '', room: '' },
      { time: '17:40 - 19:15', subject: 'Основы безопасности IT', room: 'дист' },
    ] 
  },
  { 
    day: 'Среда', 
    subjects: [
      { time: '08:00 - 09:35', subject: '', room: '' },
      { time: '09:50 - 11:25', subject: '', room: '' },
      { time: '11:40 - 13:15', subject: 'Анализ данных', room: '519' },
      { time: '14:00 - 15:35', subject: 'Анализ данных', room: '445' },
      { time: '15:50 - 17:25', subject: '', room: '' },
      { time: '17:40 - 19:15', subject: '', room: '' },
    ] 
  },
  { 
    day: 'Четверг', 
    subjects: [
      { time: '08:00 - 09:35', subject: '', room: '' },
      { time: '09:50 - 11:25', subject: '', room: '' },
      { time: '11:40 - 13:15', subject: '', room: '' },
      { time: '14:00 - 15:35', subject: 'Методы тестирования', room: '324'},
      { time: '15:50 - 17:25', subject: 'Методы тестирования', room: '424' },
      { time: '19:20 - 20:30', subject: 'Разработка мобильных приложений', room: 'дист' },
    ] 
  },
  { 
    day: 'Пятница', 
    subjects: [
      { time: '08:00 - 09:35', subject: '', room: '' },
      { time: '09:50 - 11:25', subject: '', room: '' },
      { time: '11:40 - 13:15', subject: '', room: '' },
      { time: '14:00 - 15:35', subject: 'Системный анализ', room: '449' },
      { time: '15:50 - 17:25', subject: 'Системный анализ', room: '436' },
      { time: '17:40 - 19:15', subject: '', room: '' },
    ] 
  },
  { 
    day: 'Суббота', 
    subjects: [
      { time: '08:00 - 09:35', subject: '', room: '' },
      { time: '09:50 - 11:25', subject: 'Основы безопасности IT', room: '533' },
      { time: '11:40 - 13:15', subject: 'Проектная деятельность', room: '533' },
      { time: '14:00 - 15:35', subject: 'Блокчейн', room: '' },
      { time: '15:50 - 17:25', subject: '', room: '' },
      { time: '17:40 - 19:15', subject: '', room: '' },
    ] 
  },
];

const Schedule = ({ isEvenWeek }) => {
  const schedule = isEvenWeek ? evenWeekSchedule : oddWeekSchedule;

  return (
    <div className="schedule-container">
      <table className="schedule-table">
        <thead>
          <tr>
            <th>День недели</th>
            <th>Время</th>
            <th>Предмет</th>
            <th>Кабинет</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <React.Fragment key={index}>
              {item.subjects.map((subject, subIndex) => (
                <React.Fragment key={subIndex}>
                  {/* Столбец между днями недели */}
                  {subIndex === 0 && index > 0 && (
                    <tr>
                      <td colSpan="4" style={{ backgroundColor: '#ddd', height: '15px' }}></td>
                    </tr>
                  )}
                  <tr>
                    {subIndex === 0 && <td rowSpan={item.subjects.length}>{item.day}</td>}
                    <td>{subject.time}</td>
                    <td>{subject.subject || '-'}</td>
                    <td>{subject.room || '-'}</td>
                  </tr>
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
