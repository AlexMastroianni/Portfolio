import React from 'react';
import logo from '../Home/images/AvatarMaker.svg';
import './homepage.css';

import { Typewriter } from 'react-simple-typewriter';

function Heroimage() {
  return (
    <div className="HeroImg">
      <div className="row align-items-center p-4 m-3">
        <div className="col ms-5 ps-5">
          <div className="Typewriter">
            <h1
              className="Typewriter"
              style={{
                paddingTop: '5rem',
                margin: 'auto 0',
                fontWeight: 'bold',
              }}
            >
              My names Alex and here is what I do {''}
              <span style={{ color: 'Purple', fontWeight: 'normal' }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    'Front-end',
                    'Back-end',
                    'Development',
                    'Software Engineering',
                  ]}
                  loop={8}
                  cursor
                  cursorStyle="_"
                  typeSpeed={110}
                  deleteSpeed={70}
                  delaySpeed={1000}
                />
              </span>
            </h1>
          </div>
        </div>
        <div class="col"></div>
        <div class="col">
          <img src={logo} alt="HeroImg" />
        </div>
      </div>
    </div>
  );
}

export default Heroimage;
