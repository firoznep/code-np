import React, { createRef, useState } from 'react';
import CustomBtn from '../components/CustomBtn';
import Message from '../components/Message';

export default function Todo() {
  const [todoItem, setTodoItem] = useState('');
  const [msg, setMsg] = useState(null);
  const [data, setData] = useState([]);

  const inputField = createRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todoItem.trim()) {
      setMsg('Field is Empty...');
    } else {
      setData((pre) => [...pre, todoItem]);

      setTodoItem('');
    }
    inputField.current.focus();
  };

  function AddTodoItem() {
    return data.map((itm, index) => <li key={index}>{itm}</li>);
  }

  const onChangeHandler = (e) => {
    let v = e.target.value;
    setTodoItem(v);
    if (v.length > 0) {
      setMsg('');
    }
  };

  return (
    <div>
      <h1>Todo</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={todoItem}
          type='text'
          name='todoitem'
          onChange={(e) => onChangeHandler(e)}
          ref={inputField}
          autoComplete='off'
          // onBlur={() => setMsg('')}
        />
        {/* <input type='submit' value='Submit' /> */}
        <CustomBtn type='submit'>Add</CustomBtn>
      </form>

      <Message msg={msg} />
      <div>
        <ul>{AddTodoItem()}</ul>
      </div>
    </div>
  );
}
