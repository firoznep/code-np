import React, { useState } from 'react';
import CustomBtn from '../components/CustomBtn';

export default function LockScreen() {
  const [lock, setLock] = useState(false);

  return (
    <div className={`lock-screen ${lock ? 'lock-screen-active' : ''}`}>
      <div className='lock-screen-child'>
        <CustomBtn onClick={() => setLock(true)}>Unlock Screen</CustomBtn>
      </div>
    </div>
  );
}
