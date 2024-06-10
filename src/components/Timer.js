import React from 'react';

function Timer({ timer, removeTimer }) {
  const { id, createdAt, remainingTime } = timer;
  const formattedTime = createdAt.toLocaleString('en-US', { hour12: false });
  const remaining = remainingTime.toFixed(2);

  return (
    <div className="timer">
      <div>{formattedTime}</div>
      <div>{remaining} seconds</div>
      <button onClick={() => removeTimer(id)}>Delete</button>
    </div>
  );
}

export default Timer;
