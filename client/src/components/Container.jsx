import React from 'react';

export default function Container({ children, className = '', ...otherProps }) {
  return (
    <div className={`container ${className}`} {...otherProps}>
      {children}
    </div>
  );
}
