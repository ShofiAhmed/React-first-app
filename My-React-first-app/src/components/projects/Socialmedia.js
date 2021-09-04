
import React from 'react';

import {
    faYoutube,
    faFacebook,
    faLinkedinIn,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Socialmedia() {
    return (
      <>
      <a href="https://www.linkedin.com/in/shofi-ahmed-rocky-076733156" className="linkedin social">
  <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
</a>
<a href="https://www.facebook.com/shofiahmed.rocky"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>

<a href="https://github.com/ShofiAhmed"
  className="github social">
  <FontAwesomeIcon icon={faGithub} size="2x" />
</a>
      <a href="https://youtube.com/channel/UC2FtThJ78uIjdliNrFPvwpg"
  className="youtube social">
  <FontAwesomeIcon icon={faYoutube} size="2x" />
</a>

        
      </>
         
    );
  }
export default Socialmedia;