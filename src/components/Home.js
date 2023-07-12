import main from "../assets/main-image.png";
import azure from "../assets/Microsoft_Azure.svg";
import microsoftsql from "../assets/Microsoft-SQL-Server-logo-icon.png";
import mysql from "../assets/MySQL_logo.svg.png";
import dotnet from "../assets/Microsoft_.NET_logo.svg";
import ruby from "../assets/Ruby_On_Rails_Logo.svg";

function Home(props) {
  return (
    <>
      <div className="main">
        <div className="main-h1-h4">
          <h1 className="main-h1">Catchy Title</h1>
          <h4 className="main-h4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Mattis
            pellentesque id nibh tortor.
          </h4>
        </div>
        <div className="main-button-image-div">
          <a href='#contact-wrapper'>
            <button className="main-button" >Get your free consultation!</button>
          </a>
          <img
            src={main}
            alt="computer monitors"
            className="main-image"
            width={"300px"}
          ></img>
        </div>
      </div>

      <div className="technologies-wrapper">
        <h2>Our Specalities</h2>
        <div className="technologies">
          <div className="one-technology-wrapper">
            <div className="one-technology-icon">
              <box-icon
                type="logo"
                name="aws"
                color="var(--logo-blue)"
                size="lg"
              ></box-icon>
            </div>
            <div className="one-technology-description">
              <p>Amazon Web Services</p>
            </div>
          </div>

          <div className="one-technology-wrapper">
            <div className="one-technology-icon">
              <img src={azure} height={"48px"} />
            </div>
            <div className="one-technology-description">
              <p>Azure</p>
            </div>
          </div>

          <div className="one-technology-wrapper">
            <div className="one-technology-icon">
              <box-icon
                type="logo"
                name="google-cloud"
                color="var(--logo-blue)"
                size="lg"
              ></box-icon>
            </div>
            <div className="one-technology-description">
              <p>Google Cloud</p>
            </div>
          </div>

          <div className="one-technology-wrapper">
            <div className="one-technology-icon">
              <img src={microsoftsql} height={"48px"} />
            </div>
            <div className="one-technology-description">
              <p>Microsoft SQL</p>
            </div>
          </div>

          <div className="one-technology-wrapper">
            <div className="one-technology-icon">
              <img src={mysql} height={"48px"} />
            </div>
            <div className="one-technology-description">
              <p>My SQL</p>
            </div>
          </div>

          <div className="one-technology-wrapper">
            <div className="one-technology-icon">
              <box-icon
                type="logo"
                name="postgresql"
                color="var(--logo-blue)"
                size="lg"
              ></box-icon>
            </div>
            <div className="one-technology-description">
              <p>PosgreSql</p>
            </div>
          </div>

          <div className="one-technology-wrapper">
            <div className="one-technology-icon">
              <img src={dotnet} height={"48px"} />
            </div>
            <div className="one-technology-description">
              <p>.NET</p>
            </div>
          </div>

          <div className="one-technology-wrapper">
            <div className="one-technology-icon">
              <box-icon
                type="logo"
                name="php"
                color="var(--logo-blue)"
                size="lg"
              ></box-icon>
            </div>
            <div className="one-technology-description">
              <p>PHP</p>
            </div>
          </div>

          <div className="one-technology-wrapper">
            <div className="one-technology-icon">
              <box-icon
                type="logo"
                name="javascript"
                color="var(--logo-blue)"
                size="lg"
              ></box-icon>
            </div>
            <div className="one-technology-description">
              <p>JavaScript</p>
            </div>
          </div>

          <div className="one-technology-wrapper">
            <div className="one-technology-icon">
              <box-icon
                type="logo"
                name="typescript"
                color="var(--logo-blue)"
                size="lg"
              ></box-icon>
            </div>
            <div className="one-technology-description">
              <p>TypeScript</p>
            </div>
          </div>

          <div className="one-technology-wrapper">
            <div className="one-technology-icon">
              <img src={ruby} height={"48px"} />
            </div>
            <div className="one-technology-description">
              <p>Ruby on Rails</p>
            </div>
          </div>

          <div className="one-technology-wrapper">
            <div className="one-technology-icon">
              <box-icon
                type="logo"
                name="python"
                color="var(--logo-blue)"
                size="lg"
              ></box-icon>
            </div>
            <div className="one-technology-description">
              <p>Python</p>
            </div>
          </div>

          <div className="one-technology-wrapper">
            <div className="one-technology-icon">
              <box-icon
                type="logo"
                name="angular"
                color="var(--logo-blue)"
                size="lg"
              ></box-icon>
            </div>
            <div className="one-technology-description">
              <p>Angular</p>
            </div>
          </div>

          <div className="one-technology-wrapper">
            <div className="one-technology-icon">
              <box-icon
                type="logo"
                name="react"
                color="var(--logo-blue)"
                size="lg"
              ></box-icon>
            </div>
            <div className="one-technology-description">
              <p>React</p>
            </div>
          </div>

          <div className="one-technology-wrapper">
            <div className="one-technology-icon">
              <box-icon
                type="logo"
                name="vuejs"
                color="var(--logo-blue)"
                size="lg"
              ></box-icon>
            </div>
            <div className="one-technology-description">
              <p>Vue.js</p>
            </div>
          </div>

          <div className="one-technology-wrapper">
            <div className="one-technology-icon">
              <box-icon
                type="logo"
                name="nodejs"
                color="var(--logo-blue)"
                size="lg"
              ></box-icon>
            </div>
            <div className="one-technology-description">
              <p>Node.js</p>
            </div>
          </div>
        </div>
      </div>
      <div id="contact-wrapper">
        <h2>Contact Us</h2>
        <form>
          <div className="first-last-name">
            <div className="firstname">
              <label for="firstname">First Name * </label>
              <input
                type="text"
                id="firstname"
                className="contact-input"
                name="firstname"
                required
              ></input>
            </div>

            <div className="lastname">
              <label for="lastname">Last Name * </label>
              <input
                type="text"
                id="lastname"
                className="contact-input"
                name="lastname"
                required
              ></input>
            </div>
          </div>
          <div className="email-company">
            <div className="email">
              <label for="email">Email * </label>
              <input
                type="email"
                id="email"
                className="contact-input"
                name="email"
                required
              ></input>
            </div>

            <div className="company">
              <label for="company">Company * </label>
              <input
                type="text"
                id="company"
                className="contact-input"
                name="company"
                required
              ></input>
            </div>

          </div>
          <div className="message">
            <label for="message">Message *</label>
            <textarea
              type="text"
              id="message"
              name="message"
              className="contact-input"
              rows={'10'}
              required
            ></textarea>
          </div>
        <div className="submit-btn-div">
          <button type="submit" className="main-button">Submit</button>
        </div>
        </form>
      </div>
    </>
  );
}

export default Home;
