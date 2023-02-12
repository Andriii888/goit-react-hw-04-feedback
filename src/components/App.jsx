import React, { useState } from 'react';
import { FeedBackList } from './feedback/FeedBack/FeedBack';

export function App() {
  const [good] = useState(0);
  const [neutral] = useState(0);
  const [bad] = useState(0);

  return (
    <div>
      <FeedBackList g={good} n={neutral} b={bad} />
    </div>
  );
}
