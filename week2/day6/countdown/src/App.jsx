import { useState } from 'react'
import FacebookLogo from './assets/icon-facebook.svg'
import PinterestLogo from './assets/icon-pinterest.svg'
import InstagramLogo from './assets/icon-instagram.svg'
import PatternHills from "./assets/pattern-hills.svg";
import './style.css'

function App() {


  return (
    <>
      <div className='backgroundColor'>
        <div className='backgroundStars'>
          <img className='backgroundHills' src={PatternHills} alt="" />
          <div className='countDown-page'>
            <div className='countDown'>
              <h1>
                WE'RE LAUNCHING SOON
              </h1>

              {/* <div className='countDown-timer'>
                <div className='days'>
                  <p>
                    DAYS
                  </p>
                </div>
                <div className='hours'>
                  <p>
                    HOURS
                  </p>
                </div>
                <div className='mintues'>
                  <p>
                    MINUTES
                  </p>
                </div>
                <div className='seconds'>
                  <p>
                    SECONDS
                  </p>
                </div>
              </div> */}
            </div>

            {/* <div className='socialmedia'>
              <img className='facebook' src={FacebookLogo} alt="Facebook Logo" />
              <img className='pinterest' src={PinterestLogo} alt="Pinterest Logo" />
              <img className='instagram' src={InstagramLogo} alt="Instagram Logo" />
            </div> */}
          </div>

        </div>
      </div>
    </>
  )
}

export default App
