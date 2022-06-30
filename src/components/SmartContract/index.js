import Web3 from 'web3'
import { Component } from 'react'
import Loader from 'react-loaders'
import './index.scss'
//import ProgressBar from '@ramonak/react-progress-bar'
import AnimatedLetters from '../AnimatedLetters'
import {
  getPoolPrices,
  getBalanceofToken,
  usdcEthPairContractAddress,
  ethUsdtPairContractAddress,
  usdcUsdtPairContractAddress,
  ethDecimals,
  usdcDecimals,
  usdtDecimals,
  ethUsdtPairContract,
  usdcEthPairContract,
  usdcUsdtPairContract,
  wethContract,
  usdcContract,
  usdtContract,
} from './utilis'

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
      LetterClass: 'text-animate',
      refresTime: 0,
      progress: 0,
      usdcEthPair: {
        ethUsdcPrice: 0,
        usdcEthPrice: 0,
        usdcBalance: 0,
        wethBalance: 0,
      },
      ethUsdtPair: {
        ethUsdtPrice: 0,
        usdtEthPrice: 0,
        usdtBalance: 0,
        wethBalance: 0,
      },
      usdcUsdtPair: {
        usdtUsdcPrice: 0,
        usdcUsdtPrice: 0,
        usdcBalance: 0,
        usdtBalance: 0,
      },
    }
  }

  async componentDidMount() {
    this.refreshData()
    this.timer = setInterval(() => {
      if (this.state.LetterClass !== 'text-animate-hover') {
        this.state.LetterClass = 'text-animate-hover'
      }

      this.refreshData()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  refreshData() {
    if (this.state.refresTime <= 0) {
      console.log('tatas')
      this.getGasData()
      this.getDataFromContracts()
      this.setState({
        refresTime: 10,
      })
      this.setState({
        progress: 0,
      })
    } else {
      this.state.refresTime--
      // this.setState({
      //   refresTime: this.state.refresTime - 1,
      // })
      this.setState({
        progress: Math.round(((10 - this.state.refresTime) * 100) / 10),
      })
    }
  }

  toGasPriceUsd(number, gasUsed, price) {
    number = (number / 1e18) * price * gasUsed
    return number.toFixed(2)
  }

  async getDataFromContracts() {
    let usdcEthPrices = await getPoolPrices(
      usdcEthPairContract,
      usdcDecimals,
      ethDecimals
    )
    let ethUsdtPrices = await getPoolPrices(
      ethUsdtPairContract,
      ethDecimals,
      usdtDecimals
    )
    let usdcUsdtPrices = await getPoolPrices(
      usdcUsdtPairContract,
      usdcDecimals,
      usdtDecimals
    )
    this.setState({
      usdcEthPair: {
        ethUsdcPrice: usdcEthPrices[1],
        usdcEthPrice: usdcEthPrices[0],
        usdcBalance: await getBalanceofToken(
          usdcContract,
          usdcEthPairContractAddress
        ),
        wethBalance: await getBalanceofToken(
          wethContract,
          usdcEthPairContractAddress
        ),
      },
    })

    this.setState({
      ethUsdtPair: {
        ethUsdtPrice: ethUsdtPrices[0],
        usdtEthPrice: ethUsdtPrices[0],
        usdtBalance: await getBalanceofToken(
          usdtContract,
          ethUsdtPairContractAddress
        ),
        wethBalance: await getBalanceofToken(
          wethContract,
          ethUsdtPairContractAddress
        ),
      },
    })

    this.setState({
      usdcUsdtPair: {
        usdtUsdcPrice: usdcUsdtPrices[1],
        usdcUsdtPrice: usdcUsdtPrices[0],
        usdcBalance: await getBalanceofToken(
          usdcContract,
          usdcUsdtPairContractAddress
        ),
        usdtBalance: await getBalanceofToken(
          usdtContract,
          usdcUsdtPairContractAddress
        ),
      },
    })
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
        // console.log(this.state.rapid)
        // console.log(this.state.fast)
        // console.log(this.state.standard)
        // console.log(this.state.slow)
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
            <div className="gas">
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
            {/* <div className='bar-conteiner'>
            <div className='progress-bar'>
            <ProgressBar
              completed={this.state.progress}
              customLabel={`${this.state.refresTime}`}
              labelAlignment="center"
              isLabelVisible={this.state.progress >= 10 ? true : false}
            />
          </div>
            </div> */}
          </div>

          <div className="swaps-data">
            <div className="contract-container">
              <div className="contract-name">
                <p>UNISWAP ETH/USDT</p>
              </div>
              <div className="contract-info">
                <p>
                  WETH: {this.state.ethUsdtPair.wethBalance} USDT:{' '}
                  {this.state.ethUsdtPair.usdtBalance}
                </p>
                <p>ETH price: {this.state.ethUsdtPair.ethUsdtPrice} $</p>
                <p>USDT price: {this.state.ethUsdtPair.usdtEthPrice} ETH</p>
              </div>
            </div>
            <div className="contract-container">
              <div className="contract-name">
                <p> UNISWAP ETH/USDC</p>
              </div>
              <div className="contract-info">
                <p>
                  WETH: {this.state.usdcEthPair.wethBalance} USDC:{' '}
                  {this.state.usdcEthPair.usdcBalance}
                </p>
                <p>ETH price: {this.state.usdcEthPair.ethUsdcPrice} $:</p>
                <p>USDC price: {this.state.usdcEthPair.usdcEthPrice} ETH</p>
              </div>
            </div>
            <div className="contract-container">
              <div className="contract-name">
                <p> UNISWAP USDT/USDC</p>
              </div>
              <div className="contract-info">
                <p>
                  USDC: {this.state.usdcUsdtPair.usdcBalance} USDT:{' '}
                  {this.state.usdcUsdtPair.usdtBalance}
                </p>
                <p>USDT price: {this.state.usdcUsdtPair.usdtUsdcPrice} USDC </p>
                <p>USDC price: {this.state.usdcUsdtPair.usdcUsdtPrice} USDT</p>
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
