import React from 'react';
import Project from './project';
import './app.css';

function App() {
  return (
    <>
      <div className='header-section'>
        <h1>JOON KANG</h1>
        <h2>Full Stack Developer</h2>
      </div>
      <div className='about-section'>
        <img className='profile-picture' src={require('./img/joon.png')} alt='Joon Kang'/>
        <div className='about-description'>
          <h2>WHO AM I?</h2>
          <p>
            Hello, my name is Joon Kang. I enjoy programming and creating responsive and fun projects 
            ranging from a simple clicker game to a complex webpage. I never thought I’d enjoy programming 
            until I just happened to stumble a book on C++ and got very interested in how you can just type 
            a few codes and see it on the web browser. Ever since then, I haven’t looked back.  
          </p>
        </div>
      </div>
      <Project />
      <div className='contact-section'>
        <h2>Contact</h2>
        <form>
          <label for='name'>Name:</label><br/>
          <input type='text' id='name' name='name'/><br/>
          <label for='email'>Email:</label><br/>
          <input type='email' id='email' name='email'/><br/>
          <label for='message'>Message:</label><br/>
          <textarea name='message'></textarea><br/>
          <input type='submit' name='submit' value='SUBMIT' />
        </form>
      </div>
    </>
  );
}

export default App;
