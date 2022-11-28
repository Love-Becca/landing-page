import React from 'react';
import './Hero.scss'
import Button from './Button'
import phone from '../assets/iphone-mockup.png'
import sing from '../assets/mockup-image-01.jpg'

const Hero = () => {
    return (
        <>
            <div>
                <h1>Your website, reimagined</h1>
                <p>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
                <input type='text'/>
                <Button />
                <div>
                    <li>
                        <svg className='text' viewBox="0 0 12 12" fill= "rgb(79 209 197 /1)" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                        </svg>
                        <span>Lorem ipsum is placeholder text commonly.</span>
                    </li>
                    <li>
                        <svg className='text' viewBox="0 0 12 12" fill= "rgb(79 209 197 /1)" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                        </svg>
                        <span>Excepteur sint occaecat cupidatat.</span>
                    </li>
                    <li>
                        <svg className='text' viewBox="0 0 12 12" fill= "rgb(79 209 197 /1)" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                        </svg>
                        <span>Lorem ipsum is placeholder text commonly.</span>
                    </li>
                </div>
            </div>
            <div>
                <img src={phone} alt='phone' />
                <img src={sing} alt='sing' />
            </div>
            
        </>
    );
}
 
export default Hero;