import React from 'react';
import '../About/about.css';

function About() {
  return (
    <section className="container text-center">
      <div class="row aboutMeContaine">
        <div class="col"></div>
        <div class="col">
          {' '}
          <article className="aboutMe">
            <h3>About Me</h3>
            <p>
              lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </article>
        </div>
        <div class="col"></div>
      </div>
    </section>
  );
}

export default About;
