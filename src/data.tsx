import BitCoinSVG from './assets/BitcoinSVG.svg'
import SolanaSVG from './assets/SolanaSVG.svg'
import EthereumSVG from './assets/EthereumSVG.svg'
import BinanceCoinSVG from './assets/BinanceCoinSVG.svg'
import ShibaInuSVG from './assets/ShibaInuSVG.svg'

interface AssetType {
     icon: string
     symbol: string,
     name: string
     previousPrice: number,
     currentPrice: number,
     TVL: number
     pairs: Array<string>
}
const BitCoin: AssetType = {
     icon: `${BitCoinSVG}`,
     symbol: "BTC",
     name: "Bitcoin",
     previousPrice: 35336.80,
     currentPrice: 31812.88,
     TVL: 60000,
     pairs: [`${SolanaSVG}`, `${EthereumSVG}`, `${ShibaInuSVG}`]
}
const Solana: AssetType = {
     icon: `${SolanaSVG}`,
     symbol: "SOL",
     name: "Solana",
     previousPrice: 35.00,
     currentPrice: 39.56,
     TVL: 60000,
     pairs: [`${EthereumSVG}`, `${BinanceCoinSVG}`, `${ShibaInuSVG}`]
}
const Ethereum: AssetType = {
     icon: `${EthereumSVG}`,
     symbol: "ETH",
     name: "Ethereum",
     previousPrice: 1355.56,
     currentPrice: 1466.45,
     TVL: 60000,
     pairs: [`${BinanceCoinSVG}`, `${ShibaInuSVG}`, `${BitCoinSVG}`]

}
const Binance: AssetType = {
     icon: `${BinanceCoinSVG}`,
     symbol: "BUSD",
     name: "Binance",
     previousPrice: 1.22,
     currentPrice: 1.01,
     TVL: 60000,
     pairs: [`${ShibaInuSVG}`, `${BitCoinSVG}`, `${EthereumSVG}`]
}
const ShibaInu: AssetType = {
     icon: `${ShibaInuSVG}`,
     symbol: "SINU",
     name: "Shiba Inu",
     previousPrice: 0.0000036,
     currentPrice: 0.0000041,
     TVL: 60000,
     pairs: [`${ShibaInuSVG}`, `${BinanceCoinSVG}`, `${EthereumSVG}`]
}
const assets = [BitCoin, Solana, Ethereum, Binance, ShibaInu]
export { assets }