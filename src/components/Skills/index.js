import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container skills-page">
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
              idx={23}
            />
          </h1>
          <p>
          I have been interested in the cryptocurrency market for over 2 years and that is why I started my adventure with programming.
          </p>
          <p>
          At the very beginning, I learned to program in Python with the intention of writing a bot for playing the stock market. It wasn't easy, but I finished the bot script that is currently earning money. Unfortunately, I can't share the code on github.
          </p>
          <p>
          I am currently learning JS syntax and looking for exploits in smart contract. I write, test and deploy, Smartcontracts in the brownie framework
          </p>
        </div>
        <div className="skills-zone">
            <div className='chart'>
                <span>Python</span>
                <footer>
                    <div data-width="50%" style={{'width': '50%'}}></div>
                </footer>
            </div>
        </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

export default Skills
