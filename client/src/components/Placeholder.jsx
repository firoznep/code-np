import React from 'react';

export default function Placeholder({ ...otherProps }) {
  return <div {...otherProps} className='placeholder'></div>;
}
