import Web3 from "web3"
import aggregatorV3InterfaceABI from "./abi"

const web3 = new Web3("https://kovan.infura.io/v3/0x9326BFA02ADD2366b30bacB125260Af641031331")

const addr = "0x9326BFA02ADD2366b30bacB125260Af641031331"
// const priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, addr)
const priceFeed = new web3.eth.Contract(null, addr)
priceFeed.methods.latestRoundData().call()
    .then((roundData: any) => {
        // Do something with roundData
        console.log("Latest Round Data", roundData)
    })