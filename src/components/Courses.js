import React from 'react';
import beginnerGuitarImage from '../assets/beginner-guitar.jpeg'
import advancedPianoImage from '../assets/dvanced-piano.jpg'
import vocalTrainingImage from '../assets/vocal-training.jpg'
import './Courses.css'

function Courses() {
  return (
    <section className="courses" id='courses'>
      <h2>Our Courses</h2>
      <div className="course-list">
        <div className="course">
          <img src={beginnerGuitarImage} alt="Beginner Guitar" className='course-image' />
          <h3>Beginner Guitar</h3>
          <p>Start your guitar journey with our beginner course.</p>
        </div>
        <div className="course">
          <img src={advancedPianoImage} alt="Advanced Piano" className='course-image'/>
          <h3>Advanced Piano</h3>
          <p>Take your piano skills to the next level with advanced techniques.</p>
        </div>
        <div className="course">
          <img src={vocalTrainingImage} alt="Vocal Training" className='course-image'/>
          <h3>Vocal Training</h3>
          <p>Enhance your vocal abilities with professional training.</p>
        </div>
      </div>
    </section>
  );
}

export default Courses;
