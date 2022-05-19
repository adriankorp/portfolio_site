import Web3 from 'web3'
import { uniswapV3Pair } from './abi/uniswapv3_pair'
import { weth_abi } from './abi/weth_abi'
import { usdc_abi } from './abi/usdc_abi'
import { usdt_abi } from './abi/usdt_abi'
const TICK_BASE = 1.0001

export const ethDecimals = 18
export const usdtDecimals = 6
export const usdcDecimals = 6

export const ethUsdtPairContractAddress =
  '0x4e68Ccd3E89f51C3074ca5072bbAC773960dFa36'
export const usdcEthPairContractAddress =
  '0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640'
export const usdcUsdtPairContractAddress =
  '0x3416cF6C708Da44DB2624D63ea0AAef7113527C6'
export const usdtAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7'
export const usdcAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
export const wethAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
export const provider =
  'https://mainnet.infura.io/v3/f3285e9f10c24379a5b068eebb25ea7d'
export const web3 = new Web3(provider)
export const ethUsdtPairContract = new web3.eth.Contract(
  uniswapV3Pair,
  ethUsdtPairContractAddress
)
export const usdcEthPairContract = new web3.eth.Contract(
  uniswapV3Pair,
  usdcEthPairContractAddress
)
export const usdcUsdtPairContract = new web3.eth.Contract(
  uniswapV3Pair,
  usdcUsdtPairContractAddress
)
export const usdcContract = new web3.eth.Contract(usdc_abi, usdcAddress)
export const usdtContract = new web3.eth.Contract(usdt_abi, usdtAddress)
export const wethContract = new web3.eth.Contract(weth_abi, wethAddress)

function tickToPrice(tick) {
  return TICK_BASE ** tick
}

export async function getPoolPrices(poolContract, decimals0, decimals1) {
  let contractInfo = await poolContract.methods.slot0.call().call()
  let tick = contractInfo[1]

  let price = tickToPrice(tick)
  let adjusted_price = price / 10 ** (decimals1 - decimals0)

  return [adjusted_price.toFixed(6), (1 / adjusted_price).toFixed(6)]
}

export async function getBalanceofToken(tokenContract, walletAddress) {
  let balance = 0
  const result = await tokenContract.methods.balanceOf(walletAddress).call()
  const decimals = await tokenContract.methods.decimals.call().call()
  const format = web3.utils.fromWei(result)
  balance = result /(10**decimals);
 
  return parseInt(balance)
}
