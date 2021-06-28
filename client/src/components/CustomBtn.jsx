import React from 'react';

export default function CustomBtn({ children, className = '', ...otherProps }) {
  return (
    <button className={`custom-btn ${className}`} {...otherProps}>
      {children}
    </button>
  );
}
