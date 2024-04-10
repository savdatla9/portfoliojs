import React, { useEffect, useState } from 'react';

import { UserState } from '../dataContext';

import '../App.css';

const Header = () => {
    const {theme, setTheme} = UserState();
    const [hClr, setHClr] = useState('transparent');

    const handleScroll = () => {
      if (window.scrollY > 5) {
        if(theme===false) { 
          setHClr("#b0c4de");
        } else { 
          setHClr('#242424');
        }
      } else { 
        setHClr('transparent');
      };
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
    }, [hClr]);

    return (
        <header className='header' style={{ backgroundColor: hClr }}>
          <div style={{display: 'flex', position: 'fixed'}}>
            <div>
              <h2 style={{marginLeft: '2.5vw', color: 'tomato', fontWeight: 'bold', textDecorationLine: 'underline'}}>S.A.V.D <span>♠</span></h2>
            </div>

            <div style={{position: 'fixed', right: '18vw'}}>
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