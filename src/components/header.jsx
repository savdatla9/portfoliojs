import React, { useEffect, useState } from 'react';

import { UserState } from '../dataContext';

import '../App.css';

const Header = () => {
  const {theme, setTheme} = UserState();

  return (
    <header className='header' style={theme===true ? {backgroundColor: '#242424'} : {backgroundColor: '#b0c4de'}}>
      <div style={{display: 'flex', position: 'fixed', zIndex: 50}}>
        <div>
          <h2 style={{marginLeft: '2.5vw', color: 'tomato', fontWeight: 'bold', textDecorationLine: 'underline'}}>S.A.V.D <span>♠</span></h2>
        </div>

        <div style={{position: 'fixed', right: '18vw', top: '1.5vh'}}>
          <div className="checkbox-wrapper-54">
            <label className="switch">
              <input 
                type="checkbox" checked={theme} 
                onChange={(e) => setTheme(e.target.checked)} 
              />
              <span className="slider" />
            </label>
          </div>
        </div>

        <div style={{position: 'fixed', right: '2.5vw'}} className='btn_user'>
          <div className="pi pi-user" style={{fontSize: '18px', color: '#fff'}}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;