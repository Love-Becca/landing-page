import React from 'react';
import logo from '../assets/logo.webp'
import '../App.css'
import arrow from '../assets/icons8-chevron-24.png'
import day from '../assets/icons8-day-24.png'
import night from '../assets/icons8-day-48.png'

const Header = () => {
    return ( 
        <header>
            <img src={logo} alt='logo' className='logo' />
            <nav>
                <ul>
                    <li>
                        About
                    </li>
                    <li>
                        Home
                    </li>
                    <li>
                        Testimonials
                    </li>
                    <li>
                        Resources<img src={arrow} alt='dropdown' />
                    </li>
                </ul>
            </nav>
            <label className='switch'> 
                <img src={night} alt="dark" width="20px" className='mode'/>
                <input type="checkbox"/>
                <span className="slider round"></span>
                <img src={day} alt="light" width="20px" className='mode'/>
            </label>
            <button type='button'>Request code</button>
        </header>
    );
}
 
export default Header;