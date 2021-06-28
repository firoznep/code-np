import React from 'react';
import { CSSTransition } from 'react-transition-group';

function Message({
  children,
  show,
  className = '',
  successed = false,
  ...otherProps
}) {
  return (
    <CSSTransition in={show} timeout={300} classNames='message' unmountOnExit>
      <div
        className={`message ${successed ? 'success' : 'warning'} ${className}`}
        {...otherProps}
      >
        {children}
      </div>
    </CSSTransition>
  );
}

export default Message;
