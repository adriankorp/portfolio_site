import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [widthTest, setWidthTest] = useState([
    '0%',
    '0%',
    '0%',
    '0%',
    '0%',
    '0%',
  ])

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
      setWidthTest(['45%', '40%', '25%', '35%', '40%', '25%'])
    }, 4000)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', ' s', ' ', '&']}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'x', 'p', 'i', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
              idx={24}
            />
          </h1>
          <p>
            I have been interested in the cryptocurrency market for over 2 years
            and that is why I started my adventure with programming.
          </p>
          <p align="LEFT">
            At the very beginning, I learned to program in Python with the
            intention of writing a bot for playing the stock market. It wasn't
            easy, but I finished the bot script that is currently earning money.
            Unfortunately, I can't share the code on github.
          </p>
          <p>
            I am currently learning React. Recently I created a weather app. You
            can find a link to it at the bottom of the sidebar.
          </p>
        </div>
        <div className="skills-zone">
          <div className="chart">
            <span>Python</span>
            <footer>
              <div style={{ width: widthTest[0] }}></div>
            </footer>
          </div>
          <div className="chart">
            <span>JavaScript</span>
            <footer>
              <div
                style={{ width: widthTest[1], backgroundColor: '#0070ff' }}
              ></div>
            </footer>
          </div>
          <div className="chart">
            <span>Solidity</span>
            <footer>
              <div
                style={{ width: widthTest[2], backgroundColor: '#0eff77' }}
              ></div>
            </footer>
          </div>
          <div className="chart">
            <span>React</span>
            <footer>
              <div
                style={{ width: widthTest[3], backgroundColor: '#a710bd' }}
              ></div>
            </footer>
          </div>
          <div className="chart">
            <span>brownie</span>
            <footer>
              <div
                style={{ width: widthTest[4], backgroundColor: '#bd1020' }}
              ></div>
            </footer>
          </div>
          <div className="chart">
            <span>Linux</span>
            <footer>
              <div
                style={{ width: widthTest[5], backgroundColor: '#ffdb17' }}
              ></div>
            </footer>
          </div>
        </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

export default Skills
