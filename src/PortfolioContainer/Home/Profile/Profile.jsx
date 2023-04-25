import { FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';
import { AiFillFacebook } from 'react-icons/ai';
import { BsLinkedin, BsMedium } from 'react-icons/bs';
import Typewriter from 'typewriter-effect';
import './Profile.css';

const Profile = () => (
  <div className="profile-container">
    <div className="profile-parent">
      <div className="profile-details">
        <div className="colz">
          <div className="colz-icons">
            <a href="https://github.com/shafiuyushawu">
              <FaGithubSquare className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/shafiuyushawu/">
              <BsLinkedin className="icon" />
            </a>
            <a href="https://twitter.com/shafiuyushawu">
              <FaTwitterSquare className="icon" />
            </a>
            <a href="https://web.facebook.com/ibnyushawu  ">
              <AiFillFacebook className="icon" />
            </a>
            <a href="https://medium.com/@shafiuyushawu">
              <BsMedium className="icon" />
            </a>
          </div>
        </div>
        <div className="profile-details-name">
          <span className="primary-text">
            {' '}
            Hello, I&lsquo;M
            {' '}
            <span className="highlighted-text">Shafiu</span>
          </span>
        </div>
        <div className="profile-details-role">
          <span className="primary">
            {' '}
            <h1>
              <Typewriter
                options={{
                  strings: [
                    'Software Engineer',
                    'React/React Native',
                    'AI Enthusiastic',
                    'Tensorflow',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <span className="profile-role-tagline">
              Knack of building application with front and back end operations.
            </span>
          </span>
        </div>
        <div className="profile-options">
          <button type="button" className="btn primary-btn">
            {' '}
            Hire Me
          </button>
          <a href="resume.pdf" download="Shafiu.pdf">
            <button type="button" className="btn highlighted-btn">
              Get Resume
            </button>
          </a>
        </div>
      </div>
      <div className="profile-picture">
        <div className="profile-picture-background" />
      </div>
    </div>
  </div>
);

export default Profile;
