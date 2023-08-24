import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import profileImage from './images/profile pic.jfif';

function Hi() {
  return (
    <div>
      <div className='container'>
        <div className='left-side'>
          <div className='profile'>
            <div className='img-Logo'>
              <img src={profileImage} alt='profile pic' />
            </div>
            <h2>Shafy Ali</h2>
            <span>Web developer</span>
          </div>

          <div className='contact-info'>
            <h3 className='title'>Contact Info</h3>
            <ul>
              <li>
                <span className='icons'><FontAwesomeIcon icon={faThumbsUp} /></span>
                <span className='text'>+92 282 8283</span>
              </li>
              <li>
                <span className='icons'><FontAwesomeIcon icon={faThumbsUp} /></span>
                <span className='text'>shafyali433@gmail.com</span>
              </li>
              <li>
                <span className='icons'><FontAwesomeIcon icon={faThumbsUp} /></span>
                <span className='text'>www.github.com</span>
              </li>
              <li>
                <span className='icons'><FontAwesomeIcon icon={faThumbsUp} /></span>
                <span className='text'>www.linkedIn.com</span>
              </li>
              <li>
                <span className='icons'><FontAwesomeIcon icon={faThumbsUp} /></span>
                <span className='text'>Karachi</span>
              </li>
            </ul>
          </div>

          <div className='contact-info education'>
            <h3 className='title'>Education</h3>
            <ul>
              <li>
                <h5>2016 - 2018</h5>
                <h4>Matriculaton</h4>
                <h4>New Earth School</h4>
              </li>
              <li>
                <h5>2018 - 2020</h5>
                <h4>Intermediate</h4>
                <h4>PECHS College Foundation</h4>
              </li>
              <li>
                <h5>2021 - 2025</h5>
                <h4>Undergraguate</h4>
                <h4>Smi University</h4>
              </li>
            </ul>
          </div>


          <div className='contact-info education'>
            <h3 className='title'>languages</h3>
            <ul>
              <li>
                <span className='text'>English</span>
              </li>
              <li>
                <span className='text'>Urdu</span>
              </li>
            </ul>
          </div>

        </div>
        <div className='right-side'>
          <div className='about'>
            <h2 className='title2'>Profile</h2>
            <p>Web and app developer with a passion for crafting exceptional digital experiences. Proficient in front-end and back-end technologies, I create dynamic and user-centered applications that bridge the gap between creativity and functionality. Skilled in HTML, CSS, JavaScript, React, and React Native, I bring ideas to life across both web and mobile platforms. With a keen eye for detail and a commitment to clean, efficient code, I am dedicated to delivering software solutions that make a lasting impact.
            </p>
          </div>

        </div>
      </div>


    </div>
  );
}
ReactDOM.render(<Hi />, document.querySelector('#root'));