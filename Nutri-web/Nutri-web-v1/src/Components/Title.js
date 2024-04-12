import './Components.css'
import Sidebar from '../Sidebar';

const Title = () => {
    return(
        <div>
            <div>
                <Sidebar  />
            </div>
            <div className='Background'>
                <h1 className="title">eNutri</h1>
            </div>
        </div>
    )
}

export default Title;