import React, { useState, useEffect } from 'react';
import './App.css';
import TimerList from './components/TimerList';
import TimerForm from './components/TimerForm';

function App() {
  const [timers, setTimers] = useState([]);

  const addTimer = (seconds) => {
    const now = new Date();
    setTimers([...timers, { id: Date.now(), createdAt: now, remainingTime: seconds }]);
  };

  const removeTimer = (id) => {
    setTimers(timers.filter(timer => timer.id !== id));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers(prevTimers =>
        prevTimers.map(timer => {
          const updatedTime = timer.remainingTime - 0.01;
          if (updatedTime <= 0) {
            return null;
          }
          return { ...timer, remainingTime: updatedTime };
        }).filter(Boolean)
      );
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="left">
        <TimerList timers={timers} removeTimer={removeTimer} />
      </div>
      <div className="right">
        <TimerForm addTimer={addTimer} />
      </div>
    </div>
  );
}

export default App;
