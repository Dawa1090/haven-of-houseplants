import React from 'react'



function About() {
  return (
    <div className='quote'>
      <h1>"Serving Up Delicious Adventures!"</h1>
      <p className='about-container'>
        <p>
          Nepali cuisine is a delightful blend of diverse flavors inspired by its Himalayan landscapes and multicultural heritage. From the comforting staple "Dal Bhat" to the savory "Momo" dumplings, Nepal's food reflects the country's rich culinary traditions. Join me on a journey to savor the unique ingredients, aromatic spices, and authentic recipes that define the taste of Nepal. Whether you're a seasoned food enthusiast or just starting your culinary adventure, Nepali cuisine promises a delicious experience you won't forget.
        </p>
        <p>
          I believe that food is not just about eating; it's about learning, sharing, and creating.
        </p>
      </p>
      <div className='contact'>
        <h2>Contact Me</h2>
        <p>If you have any questions or would like to collaborate, feel free to reach out to me:</p>
        <ul>
          <li>Email: tasteofnepal@email.com</li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Social Media: <a>Instagram</a> <a>Facebook</a><a>Twitter</a></li>
        </ul>
        <footer>
        &copy; 2023 Taste of Nepal
      </footer>
      </div>
    </div>
  )
}

export default About
