import main from '../assets/main-image.png'
import nick from '../assets/nick_headshot_linkedin_051522.jpg'
import cassandra from '../assets/Professional Photo 2023.jpeg'

function AboutUs(props) {


    return (
        <div className="about-us-wrapper">
          <h1>About Us</h1>

          <div className='about-us-h4'>
            <h4>Blue Tarp Solutions was founded by a husband and wife team with over 16 years of combined web development experience. Why hire a company to build your website, when you could hire family?</h4>
          </div>
          
          <div className='about-us-card'>
            <img src={nick} alt='Headshot of Nick Scelsi' height={'200px'}/>
            <div className='about-us-description'>
              <h2>Nick Scelsi</h2>
              <p>Nick spent the early part of his career as a software engineer specializing in C# .NET on webforms, MVC, then REST web applications. Nick has worked on software in the Marketing and Advertising, Banking, E-Learning, Hospital & Health Care, and Nonprofit Underground Utility location spaces.</p>
            </div>
          </div>

          <div className='about-us-card'>
          <img src={cassandra} alt='Headshot of Cassandra Scelsi' height={'200px'}/>
            <div className='about-us-description'>
              <h2>Cassandra Scelsi</h2>
              <p>Cassandra graduated from Rutgers University Coding Bootcamp. Prior to her web development career, she worked at the University of South Florida for 14 years where she revitalized operations and streamlined procedures for the center that provides university exam accommodations to students with disabilities. She also holds a Bachelor's Degree in Psychology and a Master's Degree in School Counseling.</p>
            </div>

          </div>

        </div>
    )

};

export default AboutUs;