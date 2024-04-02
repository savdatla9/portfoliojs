import React from 'react';

import { UserState } from '../dataContext';

import '../App.css';

const Header = () => {
    const {theme, setTheme} = UserState();

    return (
        <header className='header' style={theme===true ? { backgroundColor: '#242424' } : { backgroundColor: '#b0c4de' }}>
          <div style={{display: 'flex', position: 'fixed'}}>
            <div>
              {/* <img /> */}
              <h2 style={{marginLeft: '2.5vw', color: 'tomato', fontWeight: 'bold', textDecorationLine: 'underline'}}>S.A.V.D <span>♠</span></h2>
            </div>

            <div style={{position: 'fixed', right: '18vw'}}> 
              {/* {theme===true? <img src={'/sunlogo.png'} style={{width: '25px', height: 'auto'}} /> : <img src={'/moonlogo.png'} style={{width: '25px', height: 'auto'}} />} */}
              
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
              <div className="pi pi-user" style={{fontSize: '20px', color: '#fff'}}></div>
            </div>
          </div>
        </header>
    );
};

export default Header;