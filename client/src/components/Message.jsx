import React from 'react';

function Message({ msg, successed = false }) {
  return (
    <div
      className={`message ${
        successed && msg ? 'success' : msg ? 'warning' : ''
      }`}
    >
      {msg}
    </div>
  );
}

export default Message;
