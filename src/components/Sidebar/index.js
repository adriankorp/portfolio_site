/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-a.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudBolt, faCode, faFileCode, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo"></img>
      <img className="sub-logo" src={LogoSubtitle} alt="slobodan"></img>
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="skills-link"
        to="/skills"
      >
        <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="smartcontract-link"
        to="/smartcontract"
      >
        <FontAwesomeIcon icon={faFileCode} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
    <li>
        <a href='https://adriankorp.github.io/weather_app/' target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faCloudBolt} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/adrian-korpowski/' target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a  href='https://github.com/adriankorp' target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
