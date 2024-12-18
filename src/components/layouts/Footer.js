import React from 'react';
import { Link } from 'react-router-dom';
import '../layouts/Footer.css'
import LogoImg from '../../img/Navbar/Navbar1.png'

const Footer = () => {
  return (
    <footer>
      <div class='footer'>
        <div>
          <div>
            <div class='logo'>
              <img class='logo1' src={LogoImg}/>
            </div>
            <div class='minbar'>
              <ul class='tag1'>
                <h5 className='white-text'>Who we are</h5>
                <li>
                  <Link class='whoweare' to='/about' onClick={() => window.scrollTo(0, 0)}y>
                    About
                  </Link>
                </li>
                <li>
                  <Link class='whoweare' to='/message'onClick={() => window.scrollTo(0, 0)}>
                    Message
                  </Link>
                </li>
                <li>
                  <Link
                    class='whoweare'to='/contact' onClick={() => window.scrollTo(0, 0)}>
                    Contact us
                  </Link>
                </li>
              </ul>
              <ul class='tag2'>
              <h5 className='white-text'>Suport us </h5>
                <li>
                  <Link class='supportus' to='/education' onClick={() => window.scrollTo(0, 0)}>
                    Education
                  </Link>
                </li>
                <li>
                  <Link
                   class='supportus' to='/foodbank' onClick={() => window.scrollTo(0, 0)}>
                    Food Bank
                  </Link>
                </li>
                <li>
                  <Link class='supportus' to='/socialwelfare' onClick={() => window.scrollTo(0, 0)}>
                    Social Welfare
                  </Link>
                </li>
                <li>
                  <Link
                    class='supportus' to='/volunteer' onClick={() => window.scrollTo(0, 0)}>
                    Volunteer
                  </Link>
                </li>
              </ul>
              <ul class='tag3'>
              <h5 className='white-text'>Our Team</h5>
              <li>
                  <Link
                    class='ourteam'to='#' onClick={() => window.scrollTo(0, 0)}>
                    Akash Verma
                  </Link>
                </li>
                <li>
                  <Link
                    class='ourteam' to='#' onClick={() => window.scrollTo(0, 0)}>
                    Anchal Priya
                  </Link>
                </li>
                <li>
                  <Link
                    class='ourteam' to='#' onClick={() => window.scrollTo(0, 0)}>
                    Shashwat Mani Tripathi
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <div class='footer-copyright'>
          <div className='container'>
            <div className='row'>
              <div className='col s12'>
                <br />© 2024 The Pure Care Charity Foundation Inc. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
