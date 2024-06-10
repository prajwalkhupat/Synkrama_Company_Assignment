import React, { useState } from 'react';

function TimerForm({ addTimer }) {
  const [seconds, setSeconds] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (seconds > 0) {
      addTimer(Number(seconds));
      setSeconds('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
        placeholder="Enter seconds"
      />
      <button type="submit">Add Timer</button>
    </form>
  );
}

export default TimerForm;
