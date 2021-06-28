import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Container from './Container';
import CustomBtn from './CustomBtn';

export default function Header() {
  const [dropToggle, setDropToggle] = useState(false);

  return (
    <header>
      <Container className='navbar'>
        <Link to='/'>
          <CustomBtn>Home</CustomBtn>
        </Link>
        <Link to='/contact'>
          <CustomBtn>Contact</CustomBtn>
        </Link>
        <Link to='/todo'>
          <CustomBtn>Todo App</CustomBtn>
        </Link>

        <div
          id='dropToggle'
          // className={`nav-container ${dropToggle && 'nav-container--active'}`}
          onClick={() => setDropToggle(!dropToggle)}
        >
          <CustomBtn className={`nav-container--${dropToggle && 'active'}`}>
            Dropdown
          </CustomBtn>
          <CSSTransition
            in={dropToggle}
            timeout={1000}
            classNames='drop-trans'
            unmountOnExit
          >
            <div className='dropdown'>
              <Link to='/calculator' className='dropItem'>
                Calculator
              </Link>
              <Link to='/' className='dropItem'>
                link 2 sdf
              </Link>
              <Link to='/' className='dropItem'>
                link 2
              </Link>
              <Link to='/' className='dropItem'>
                link 2
              </Link>
              <Link to='/' className='dropItem'>
                link 2 fdsfds fsdf
              </Link>
            </div>
          </CSSTransition>
        </div>
      </Container>
    </header>
  );
}
