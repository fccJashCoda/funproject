import { useState, useEffect } from 'react';

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setDate(new Date()), 1000);

    return () => clearTimeout(timer);
  });

  return <h2>{`${date.getHours()}:${date.getMinutes()}`}</h2>;
};

export default Clock;
