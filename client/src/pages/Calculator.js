import React, { useState } from 'react';

export default function Calculator() {
  const [inputNum, setInputNum] = useState('');
  const [spliter, setSpliter] = useState('');

  const operators = ['/', '*', '-', '+'];

  const handleEnter = () => {
    let n = inputNum.split(spliter);

    switch (spliter) {
      case '/':
        setInputNum((n[0] / n[1]).toFixed(2));
        break;
      case '*':
        setInputNum((n[0] * n[1]).toFixed(2));
        break;
      case '-':
        setInputNum((n[0] - n[1]).toFixed(2));
        break;
      case '+':
        setInputNum((Number(n[0]) + Number(n[1])).toFixed(2));
        break;

      default:
        setInputNum('');
    }
  };

  const handleClick = (e) => {
    let contx = e.target.textContent;
    setInputNum((pre) => pre + contx);

    operators.map((opr) => (opr === contx ? setSpliter(opr) : null));
  };

  const delOneCharacter = (e) => {
    setInputNum(inputNum.slice(0, -1));
  };

  return (
    <div className='container-calc'>
      <div className='calc'>
        <div className='calc_display'>{inputNum}</div>
        <div className='calc_btns'>
          <span onClick={handleClick} className='calc_btn calc_btn-1'>
            1
          </span>
          <span onClick={handleClick} className='calc_btn calc_btn-2'>
            2
          </span>
          <span onClick={handleClick} className='calc_btn calc_btn-3'>
            3
          </span>
          <span onClick={handleClick} className='calc_btn calc_btn-divide'>
            /
          </span>
          <span onClick={handleClick} className='calc_btn calc_btn-4'>
            4
          </span>
          <span onClick={handleClick} className='calc_btn calc_btn-5'>
            5
          </span>
          <span onClick={handleClick} className='calc_btn calc_btn-6'>
            6
          </span>
          <span onClick={handleClick} className='calc_btn calc_btn-multi'>
            *
          </span>
          <span onClick={handleClick} className='calc_btn calc_btn-7'>
            7
          </span>
          <span onClick={handleClick} className='calc_btn calc_btn-8'>
            8
          </span>
          <span onClick={handleClick} className='calc_btn calc_btn-9'>
            9
          </span>
          <span onClick={handleClick} className='calc_btn calc_btn-subtract'>
            -
          </span>
          <span onClick={handleClick} className='calc_btn calc_btn-zero'>
            0
          </span>
          <span onClick={handleClick} className='calc_btn calc_btn-period'>
            .
          </span>
          <span onClick={delOneCharacter} className='calc_btn calc_btn-percent'>
            X
          </span>
          <span onClick={handleClick} className='calc_btn calc_btn-plus'>
            +
          </span>

          <span
            onClick={() => setInputNum('')}
            className='calc_btn calc_btn-clear'
          >
            C
          </span>
          <span onClick={handleEnter} className='calc_btn calc_btn-equal'>
            =
          </span>
        </div>
      </div>
    </div>
  );
}
