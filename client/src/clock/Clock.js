import { useState, useEffect } from 'react';
import './Clock.css';

const Clock = ({ user }) => {
  const [date, setDate] = useState(new Date());

  const greetings = ['Good Morning', 'Good Afternoon', 'Good Evening'];
  const pm = date.toLocaleTimeString().includes('PM');
  const evening = date.getHours() > 19;
  let message;

  if (pm && evening) {
    message = `${greetings[2]}`;
  } else if (pm) {
    message = `${greetings[1]}`;
  } else {
    message = `${greetings[0]}`;
  }

  if (user) {
    message += `, ${user.name}`;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      console.log(now.toLocaleTimeString());
      if (now.getMinutes() !== date.getMinutes()) {
        console.log('date changed');
        setDate(now);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <>
      <h2 className='reactClock'>{`${date.getHours()}:${date.getMinutes()} ${
        pm ? 'PM' : 'AM'
      }`}</h2>
      <p className='motd'>{message}</p>
    </>
  );
};

export default Clock;
