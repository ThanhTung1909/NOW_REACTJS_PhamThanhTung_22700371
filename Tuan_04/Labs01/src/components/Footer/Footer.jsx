import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className="about">
            <h3>About Us</h3>
            <p>Welcome to our website, a wonderful place to explore
                and learn how to cook like a pro
            </p>
            <div>
                <input type="text" placeholder='Enter your email' />
                <button>Send</button>
            </div>
            <div className='img'>
                <img src="/public/images/chefifywhite.png" alt="" />
                <span>2023 Chefify Company</span>
                <span>Terms of Servicel Privacy Policy</span>
            </div>
        </div>
        <div className='more'>
            <div className='learn'>
                <h3>Learn More</h3>
                <ul>
                    <li>Our Cooks</li>
                    <li>See Our Features</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className='shop'>
                <h3>Shop</h3>
                <ul>
                    <li>Gift Subscription</li>
                    <li>Send Us Feedback</li>
                </ul>
            </div>
        </div>
        <div className='recipes'>
            <h3>Recipes</h3>
            <ul>
                <li>What to Cook This Week</li>
                <li>Pasta</li>
                <li>Dinner</li>
                <li>Healthy</li>
                <li>Vegetarian</li>
                <li>Vegan</li>
                <li>Christmas</li>
            </ul>

        </div>
    </div>
  )
}

export default Footer