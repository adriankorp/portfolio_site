import Web3 from 'web3'
import { Component } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

class SmartContract extends Component {
  // Constructor
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      rapid: 0,
      fast: 0,
      standard: 0,
      slow: 0,
      priceUSD: 0,
      LetterClass: 'text-animate'
    }
    this.getGasData()
  }

  async componentDidMount() {
    setTimeout(() => {
      this.state.LetterClass = 'text-animate-hover'
    }, 1000)
    console.log('Testllllllllll')
    this.timer = setInterval(() => {
      this.getGasData()
    }, 10000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  toGasPriceUsd(number, gasUsed, price) {
    number = (number / 1e18) * price * gasUsed
    return number.toFixed(2)
  }

  async getGasData() {
    fetch('https://etherchain.org/api/gasnow')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          data: json.data,
          rapid: parseFloat(
            Web3.utils.fromWei(json.data.rapid.toString(), 'gwei')
          ).toFixed(0),
          fast: parseFloat(
            Web3.utils.fromWei(json.data.fast.toString(), 'gwei')
          ).toFixed(0),
          standard: parseFloat(
            Web3.utils.fromWei(json.data.standard.toString(), 'gwei')
          ).toFixed(0),
          slow: parseFloat(
            Web3.utils.fromWei(json.data.slow.toString(), 'gwei')
          ).toFixed(0),
          priceUSD: json.data.priceUSD,
        })
        console.log(this.state.rapid)
        console.log(this.state.fast)
        console.log(this.state.standard)
        console.log(this.state.slow)
        //   this.timer = setInterval(() => {
        //     this.getGasData();
        //   }, 3000);
      })
  }
  render() {
    return (
      <>
        <div className="container smartcontract-page">
          <h1>
            <AnimatedLetters
              letterClass={this.state.LetterClass}
              strArray={['G', 'A', 'S', ' ', 'T', 'R', 'A', 'C', 'K', 'E', 'R']}
              idx={15}
            />
          </h1>
          <div className="contract-data">
            <div className="speed-box">
              <div className="text-speed ">
                <p>SLOW 🐢</p>
              </div>
              <div className="gas-view-zone">
                <p>GAS PRICE</p>
                <p>{this.state.slow}</p>
                <p>
                  $
                  {this.toGasPriceUsd(
                    21000,
                    this.state.priceUSD,
                    Web3.utils.toWei(this.state.slow.toString(), 'gwei')
                  )}
                </p>
              </div>
            </div>

            <div className="speed-box">
              <div className="text-speed ">
                <p>NORMAL 🚗</p>
              </div>
              <div className="gas-view-zone">
                <p>GAS PRICE</p>
                <p>{this.state.standard}</p>
                <p>
                  $
                  {this.toGasPriceUsd(
                    21000,
                    this.state.priceUSD,
                    Web3.utils.toWei(this.state.standard.toString(), 'gwei')
                  )}
                </p>
              </div>
            </div>
            <div className="speed-box">
              <div className="text-speed ">
                <p>FAST ✈️</p>
              </div>
              <div className="gas-view-zone">
                <p>GAS PRICE</p>
                <p>{this.state.fast}</p>
                <p>
                  $
                  {this.toGasPriceUsd(
                    21000,
                    this.state.priceUSD,
                    Web3.utils.toWei(this.state.fast.toString(), 'gwei')
                  )}
                </p>
              </div>
            </div>
            <div className="speed-box">
              <div className="text-speed ">
                <p>INSTANT 🚀</p>
              </div>
              <div className="gas-view-zone">
                <p>GAS PRICE</p>
                <p>{this.state.rapid}</p>
                <p>
                  $
                  {this.toGasPriceUsd(
                    21000,
                    this.state.priceUSD,
                    Web3.utils.toWei(this.state.rapid.toString(), 'gwei')
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="swaps-data">
            <div className='contract-container'>
              <div className='contract-name'>
                   <p>UNISWAP ETH/USDT</p>
              </div>
              <div className='contract-info'>
                    <p>Contract balance:</p>
                    <p>ETH price:</p>
                    <p>USDT price:</p>
                    <p>Last action:</p>
              </div>
            </div>
            <div className='contract-container'>
              <div className='contract-name'>
                   <p> UNISWAP ETH/USDC</p>
              </div>
              <div className='contract-info'>
                    <p>Contract balance:</p>
                    <p>ETH price:</p>
                    <p>USDC price:</p>
                    <p>Last action:</p>
              </div>
            </div>
            <div className='contract-container'>
              <div className='contract-name'>
                   <p> UNISWAP USDT/USDC</p>
              </div>
              <div className='contract-info'>
                    <p>Contract balance:</p>
                    <p>USDT price:</p>
                    <p>USDC price:</p>
                    <p>Last action:</p>
              </div>
            </div>
          </div>
        </div>

        <Loader type="ball-clip-rotate-multiple" />
      </>
    )
  }
}

export default SmartContract
