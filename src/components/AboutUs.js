import main from '../assets/main-image.png'
import nick from '../assets/nick_headshot_linkedin_051522.jpg'
import cassandra from '../assets/Professional Photo 2023.jpeg'

function AboutUs(props) {


    return (
        <div className="about-us-wrapper">
          <h1>About Us</h1>

          <div className='about-us-h4'>
            <h4>Blue Tarp Solutions was founded by a husband and wife team with over 15 years of combined web development experience. Why hire a company to build your website, when you could hire family?</h4>
          </div>
          
          <div className='about-us-card'>
            <img src={nick} alt='headshot of nick scelsi' height={'200px'}/>
            <div className='about-us-description'>
              <h2>Nick Scelsi</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
            </div>
          </div>

          <div className='about-us-card'>
            <img src={cassandra} alt='headshot of cassandra scelsi' height={'200px'}/> 
            <div className='about-us-description'>
              <h2>Cassandra Scelsi</h2>
              <p>Cassandra graduated from Rutgers University Coding Bootcamp. Prior to her web development career, she accummulated 14 years of experience working in higher education.</p>
            </div>

          </div>

        </div>
    )

};

export default AboutUs;