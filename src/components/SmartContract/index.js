import Loader from 'react-loaders'
import './index.scss'


const SmartContract = () => {
    return (
        <>
        <div className='container smartcontract-page'>
            <div className='contract-data'>

            </div>
            <div className='swaps-data'>

            </div>

        </div>

        <Loader type='ball-clip-rotate-multiple'/>
        </>
    )
}

export default SmartContract