import React from "react";
import "../styles/social.css";
import facebook from "../assets/ico-facebook.png";
import twitter from "../assets/ico-twitter.png";
import youtube from "../assets/ico-youtube.png";

class Social extends React.Component{
  render(){
    return(
      <div class="social">
        <div class="col py-2">
          <a href="https://es-la.facebook.com/" target="_blank">
            <img src={facebook} alt="img_facebook" width="12px" height="20px" />
          </a>
        </div>
        <div class="w-100"></div>
        <div class="col py-2">
          <a href="https://twitter.com/?lang=es" target="_blank">
            <img src={twitter} alt="img_twitter" width="22px" height="20px" />
          </a>
        </div>
        <div class="w-100"></div>
        <div class="col py-2">
          <a href="https://www.youtube.com/" target="_blank">
            <img src={youtube} alt="img_youtube" width="22px" height="15px" />
          </a>
        </div>
    </div>
    );
  }
}

export default Social;