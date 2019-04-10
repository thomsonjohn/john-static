import React, { Component } from "react";
import hero from "./assets/img/profile-pic.jpg";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={hero} className="hero-shot" alt="hero" />
        </header>
        <h1 className="App-title">Hey,</h1>
        <div className="body-text">
          <p>
            I'm John, a digital developer based in Edinburgh, bonnie Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿
          </p>
          <p>
            I'm also a football fanatic, love to keep fit, play games and eat good food!
          </p>
          <p className="emoji-string">🎨 👨🏻‍💻 ⚽️ 🏋🏻‍♂️ ☕️ 🍻 🥑 </p>
          <p>
            If you've got a project and you think it's cool, or if you just want
            to say hello, get in touch.
          </p>
        </div>
        <div className="social-media">
          <ul>
            <li>
              <a
                href="https://twitter.com/JohnThomson_"
                class="fa fa-twitter"
              />
            </li>
            <li>
              <a href="https://github.com/thomsonjohn" class="fa fa-github" />
            </li>
            <li>
              <a
                href="https://www.instagram.com/johnthomson_/"
                class="fa fa-instagram"
              />
            </li>
            <li>
              <a
                href="https://dribbble.com/JohnThomson_"
                class="fa fa-dribbble"
              />
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/john-thomson/"
                class="fa fa-linkedin"
              />
            </li>
          </ul>
        </div>
        <p className="copyright">© John Thomson</p>
      </div>
    );
  }
}

export default App;
