import React from 'react';
import Timer from './Timer';

function TimerList({ timers, removeTimer }) {
  return (
    <div>
      {timers.map(timer => (
        <Timer key={timer.id} timer={timer} removeTimer={removeTimer} />
      ))}
    </div>
  );
}

export default TimerList;
