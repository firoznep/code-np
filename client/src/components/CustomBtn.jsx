import React from 'react';

export default function CustomBtn({ children, ...otherProps }) {
  return (
    <button {...otherProps} className='custom-btn'>
      {children}
    </button>
  );
}
