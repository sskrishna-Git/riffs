import React from 'react'
import learnMusicImage from '../assets/learn-music.jpg'
import practiceImage from '../assets/practice.jpg'
import performImage from '../assets/perform.jpg'


const Features = () => {
  return (
    <section className="features">
      <div className="feature">
        <img src={learnMusicImage} alt="Learn Music" />
        <h2>Learn Music</h2>
        <p>Join our classes to learn from the best instructors.</p>
      </div>
      <div className="feature">
        <img src={practiceImage} alt="Practice" />
        <h2>Practice</h2>
        <p>Access a variety of practice tools and resources.</p>
      </div>
      <div className="feature">
        <img src={performImage} alt="Perform" />
        <h2>Perform</h2>
        <p>Showcase your talent in our regular performances.</p>
      </div>
    </section>
  )
}

export default Features