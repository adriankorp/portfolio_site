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
            I'm very ambitious junior blockchain developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>###</p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faLinux} color="#333" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faFileCode} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faPython} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faEthereum} color="#3c3c3d" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#333" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

export default About
