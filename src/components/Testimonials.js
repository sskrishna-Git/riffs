import React from 'react';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';


function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Students Say</h2>
      <div className="testimonial-list">
        <div className="testimonial">
          <img src={person1} alt="Person 1" />
          <p>"This music school has transformed my playing!"</p>
          <p>- Alex</p>
        </div>
        <div className="testimonial">
        < img src={person2} alt="Person 2" />
          <p>"The instructors are so supportive and skilled."</p>
          <p>- Jamie</p>
        </div>
        <div className="testimonial">
          <img src={person3} alt="Person 3" />
          <p>"I love the community and the learning environment."</p>
          <p>- Taylor</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
