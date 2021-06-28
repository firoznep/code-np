import React, { useState } from 'react';
import Message from '../components/Message';

export default function LockScreen() {
  const [lock, setLock] = useState(false);
  const [field, setField] = useState('');
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (field === 'secret') {
      setLock(true);
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div className={`lock-screen ${lock ? 'lock-screen-active' : ''}`}>
      <div className='lock-screen-child'>
        <form onSubmit={handleSubmit}>
          <label>
            Password:{' '}
            <input
              type='password'
              name='password'
              onChange={(val) => setField(val.target.value)}
            />
          </label>
        </form>
      </div>
      <Message show={show}>Wrong Password</Message>
    </div>
  );
}
