import React, { useRef, useState } from 'react';
import Container from '../components/Container';
import CustomBtn from '../components/CustomBtn';
import Message from '../components/Message';

export default function Todo() {
  const [todoItem, setTodoItem] = useState('');
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const inputField = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoItem.trim()) {
      setShow(true);
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
    if (v.length) {
      setShow(false);
    }
  };

  return (
    <Container>
      <h1>Todo App</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={todoItem}
            type='text'
            name='todoitem'
            onChange={(e) => onChangeHandler(e)}
            ref={inputField}
            autoComplete='off'
          />
          <Message show={show}> Field is empty!</Message>
        </div>

        <CustomBtn type='submit'>Add</CustomBtn>
      </form>

      <div>
        <ul>{AddTodoItem()}</ul>
      </div>
    </Container>
  );
}
