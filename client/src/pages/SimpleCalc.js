import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function SimpleCalc() {
  const onBtnClicked = () => {};
  return (
    <div className='simple-calc--container'>
      <div id='simple-calc'>
        <input type='text' />
        <div id='simple-calc_btns'>
          <button className='simple-calc_btn--highlight' onClick={onBtnClicked}>
            &#67;
          </button>
          <button className='simple-calc_btn--highlight' onClick={onBtnClicked}>
            <FontAwesomeIcon icon={faBackspace} />
          </button>
          <button className='simple-calc_btn--highlight' onClick={onBtnClicked}>
            &#37;
          </button>
          <button className='simple-calc_btn--highlight' onClick={onBtnClicked}>
            &#247;
          </button>
          <button className='simple-calc_btn' onClick={onBtnClicked}>
            7
          </button>
          <button className='simple-calc_btn' onClick={onBtnClicked}>
            8
          </button>
          <button className='simple-calc_btn' onClick={onBtnClicked}>
            9
          </button>
          <button className='simple-calc_btn--highlight' onClick={onBtnClicked}>
            &#215;
          </button>
          <button className='simple-calc_btn' onClick={onBtnClicked}>
            4
          </button>
          <button className='simple-calc_btn' onClick={onBtnClicked}>
            5
          </button>
          <button className='simple-calc_btn' onClick={onBtnClicked}>
            6
          </button>
          <button className='simple-calc_btn--highlight' onClick={onBtnClicked}>
            &#8722;
          </button>
          <button className='simple-calc_btn' onClick={onBtnClicked}>
            1
          </button>
          <button className='simple-calc_btn' onClick={onBtnClicked}>
            2
          </button>
          <button className='simple-calc_btn' onClick={onBtnClicked}>
            3
          </button>
          <button className='simple-calc_btn--highlight' onClick={onBtnClicked}>
            &#43;
          </button>
          <button className='simple-calc_btn' onClick={onBtnClicked}>
            0
          </button>
          <button className='simple-calc_btn' onClick={onBtnClicked}>
            .
          </button>
          <button
            className='simple-calc_btn--highlight simple-calc_btn--enter'
            onClick={onBtnClicked}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
