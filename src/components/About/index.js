import { useEffect, useState } from 'react'
import {
  faEthereum,
  faGithub,
  faLinux,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faFileCode } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm ambitious junior developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I would like to develop my skills under the watchful eye of more
            experienced programmers who would help me spread my wings in the IT
            world.
          </p>
          <p>
            My main hobby has been cryptocurrencies for 2 years, thanks to them
            I have achieved a lot and I would like to continue developing in this direction.
          </p>
        </div>
        <div className='stage-cube-cont'>
        <div className="container-cube">
          <div className="cube">
            <div className="front">
              <FontAwesomeIcon icon={faLinux} color="#333" />
            </div>
            <div className="back">
              <FontAwesomeIcon icon={faFileCode} color="#F06529" />
            </div>
            <div className="right">
              <FontAwesomeIcon icon={faPython} color="#28A4D9" />
            </div>
            <div className="left">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="top">
              <FontAwesomeIcon icon={faEthereum} color="#3c3c3d" />
            </div>
            <div className="bottom">
              <FontAwesomeIcon icon={faGithub} color="#333" />
            </div>
          </div>
        </div>
        </div>

      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

export default About
