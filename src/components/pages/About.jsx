
import { Link } from 'react-router-dom';
import './About.css'

function About() {
  return (
    
    <div className="about-page">
    <Link to={`/About`}></Link>
      <h1>About This Project</h1>
      <p>
        Welcome to our Recipe Book app! This application helps users manage and explore different recipes. Users can view a list of recipes, see details for each recipe, and get information such as calories, servings, and healthy recommendations.
      </p>

      <h2>Team Members</h2>
      <div className="team-member">
        <h3>FRANCESCO TORCHIA</h3>
        <p>
          IronHack Student
        </p>
        <div className="social-links">
          <a href="https://github.com/FraT97" >
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/francesco-torchia-wd" >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="team-member">
        <h3>VICTOR MARCHESI</h3>
        <p>
          IronHack Student
        </p>
        <div className="social-links">
          <a href="https://github.com/vicmarchesi" >
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/Victor-Marchesi/">
            LinkedIn
          </a>
        </div>
      </div>

      <h2>Project Details</h2>
      <p>
        This project was developed using React.js and React Router.
      </p>
    </div>
  );
}

export default About;
