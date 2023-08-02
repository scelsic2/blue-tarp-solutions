import main from "../assets/main-image.png";
import azure from "../assets/Microsoft_Azure.svg";
import microsoftsql from "../assets/Microsoft-SQL-Server-logo-icon.png";
import mysql from "../assets/MySQL_logo.svg.png";
import dotnet from "../assets/Microsoft_.NET_logo.svg";
import ruby from "../assets/Ruby_On_Rails_Logo.svg";

import axios from "axios";
import { useEffect, useState } from "react";

function Home(props) {

  const [contactState, setContactState] = useState({
    firstname:'',
    lastname:'',
    email:'',
    company: '',
    message:''
  })

  const contactForm = async (e) => {
    // e.preventDefault();    
    //todo: this isn't the react way to access the form elements but that's what the problem was.
    let form = {
      firstname: e.currentTarget.elements.firstname.value,
      lastname: e.currentTarget.elements.lastname.value,
      email: e.currentTarget.elements.email.value,
      company: e.currentTarget.elements.company.value,
      message: e.currentTarget.elements.message.value
    };    
    //form elements are found in e.currentTarget.elements
    //console.log(e.currentTarget.elements);
    //I tried setting state here and that didn't work
    //setContactState(e.currentTarget.elements);
    console.log('Contact Form Submitted!')
    console.log('-----Contact State-----')
    console.log(contactState)
    let domain = 'localhost:3001'
    let protocol = 'http://';

    try {
      //const res = await axios.post(domain + '/api/contact', contactState)
      //using form until we figure out why setState is broken
      const res = await axios.post(protocol + domain + '/api/contact', form)

      setContactState({
        firstname:'',
        lastname:'',
        email:'',
        company: '',
        message:''
      })
      return false;
    } catch (err) {
      if (err.code === 500) {
        console.error(err)
      }
    }
    
  }

  return (
    <>
      <div className="main">
        <div className="main-h1-h4">
          <h1 className="main-h1">Customer-First Web Development</h1>
          <h4 className="main-h4">
          Discover the art of seamless web development at Blue Tarp Solutions. Whether you're starting from scratch or need a rescue mission for a struggling site, our mission is to exceed your expectations and provide personalized solutions for all your website needs.
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

          <div className="one-technology-wrapper">
            <div className="one-technology-icon">
              <box-icon
                type="logo"
                name="wordpress"
                color="var(--logo-blue)"
                size="lg"
              ></box-icon>
            </div>
            <div className="one-technology-description">
              <p>WordPress</p>
            </div>
          </div>

        </div>
      </div>

      <div id="contact-wrapper">
        <h2>Contact Us</h2>
        <form onSubmit={contactForm} method="POST">
          <div className="first-last-name">
            <div className="firstname">
              <label htmlFor="firstname">First Name * </label>
              <input
                type="text"
                id="firstname"
                className="contact-input"
                name="firstname"
                required
              ></input>
            </div>

            <div className="lastname">
              <label htmlFor="lastname">Last Name * </label>
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
              <label htmlFor="email">Email * </label>
              <input
                type="email"
                id="email"
                className="contact-input"
                name="email"
                required
              ></input>
            </div>

            <div className="company">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                className="contact-input"
                name="company"
              ></input>
            </div>

          </div>
          <div className="message">
            <label htmlFor="message">Message *</label>
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
          <div className="g-recaptcha" id="html_element" data-sitekey="6LcpzjknAAAAALGM_qTknG7VfRwjE9aeZ2ptE6w6"></div>
          <br/>
          <button type="submit" className="main-button" value={"Submit"}>Submit</button>
        </div>
        </form>
      </div>
    </>
  );
}

export default Home;
