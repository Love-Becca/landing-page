import React from 'react';
import logo from '../assets/logo.webp'
import arrow from '../assets/icons8-chevron-24.png'
import day from '../assets/icons8-day-24.png'
import night from '../assets/icons8-day-48.png'
import './Header.scss'
import Button from './Button'

const Header = () => {
    return ( 
        <header>
            <div className='image'>
                <img src={logo} alt='logo' className='logo' width='45px' height='45px' />
            </div>
            <nav>
                <ul>
                    <li>
                        About
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        Testimonials
                    </li>
                    <li className='dropdown'>
                        <button className='resource_btn'>Resources
                            <img src={arrow} alt='dropdown' />
                        </button>
                        <div className='content'>
                            <a href='#'>Help center</a>
                            <a href='#'>404</a>
                        </div>
                    </li>
                </ul>
            </nav>
            <div className='switch_request'>
                <label className='switch'> 
                    <img src={day} alt="dark" width="18px" className='night_mode'/>
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                    <img src={night} alt="light" width="18px" className='mode'/>
                </label>
                <Button />
            </div>
        </header>
    );
}
 
export default Header;