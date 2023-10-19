import React from 'react';
import './About.css';

function About() {
  return (
    <div className='quote'>
      <h1>"Coffee Chronicles: A Cup for Every Occasion"</h1>
      <div className='about-container'>
        <p>
          In the world of coffee, there's a brew for every mood and occasion. It's like having that perfect friend who always knows how to fit in. For early risers, coffee is the comforting hug that kickstarts their day with promises of productivity. To the night owls, it's the muse that fuels creativity in the silent hours. At the office, it's the reliable coworker that offers a brief escape from the daily grind. Creative souls see coffee as an artistic muse, with each sip igniting the imagination. It's the social connector, bringing people together over cappuccinos, and an adventurous exploration for those seeking exotic flavors and brews. During tough times, it becomes the comforting companion, providing warmth and solace. For fitness enthusiasts, it's the workout partner, boosting energy and motivation. In this coffee world, each cup is a unique love story, a flavorful and fun addition to life's diverse moments.
        </p>
      </div>
      <div className='contact'>
        <h2>Contact Me</h2>
        <p>If you have any questions or would like to collaborate, feel free to reach out to me:</p>
        <ul>
          <li>Email: <a href='mailto:tasteofcoffee@email.com'>tasteofcoffee@email.com</a></li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Social Media: <a href='https://www.instagram.com/yourcoffeehandle' target='_blank'>Instagram</a> <a href='https://www.facebook.com/yourcoffeehandle' target='_blank'>Facebook</a> <a href='https://twitter.com/yourcoffeehandle' target='_blank'>Twitter</a></li>
        </ul>
        <footer>
          &copy; 2023 Taste of Coffee
        </footer>
      </div>
    </div>
  )
}

export default About;
