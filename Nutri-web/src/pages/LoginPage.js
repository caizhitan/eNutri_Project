import eNutriLogo from '../assets/eNutriLogo.png';
import { useState } from 'react';
import RadioButton from '../components/RadioButton';
import InputField from '../components/InputField';
import humanIconPNG from '../assets/humanIconPNG.png';
import PadlockPNG from '../assets/PadlockPNG.png';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const [radioSelect, setRadioSelect] = useState('');
    const handleRadioOptionChange = (e) => {
        setRadioSelect(e.target.value);
    }

    const login = () => {
        navigate('/PatientSelect');
    }
    return(
        <div className="flex w-screen h-screen bg-orange-400 p-16">
            <div className="flex bg-white w-full rounded-3xl border-4 border-yellow-400">
                <div className='flex-col flex items-center w-full'>
                    <img src={eNutriLogo} alt='eNutri Logo' className='w-40 h-40'/>
                    <hr className='h-3 bg-yellow-400 w-9/12 rounded-3xl '/>
                    <div className='flex w-8/12'>
                        <div className='flex-col w-2/5 text-lg font-bold'>
                            <div className='flex-row pb-4 pt-1'>
                                Select user:
                            </div>
                            <div className='flex-row pb-5 flex'>
                                <img src={humanIconPNG} alt='humanIcon' className='w-7 h-7 mr-2'/>
                                Username:
                            </div>
                            <div className='flex-row pb-5 flex'>
                                <img src={PadlockPNG} alt='humanIcon' className='w-7 h-7 mr-2'/>
                                Password:
                            </div>
                        </div>
                        <div className='flex-col w-3/5'>
                            <div className='flex-row flex pb-5 pt-2'>
                                <RadioButton id='Doctor' radioSelect={radioSelect} handleRadioOptionChange={handleRadioOptionChange} />
                                <RadioButton id='Caretaker' radioSelect={radioSelect} handleRadioOptionChange={handleRadioOptionChange} />
                            </div>
                            <InputField />
                            <InputField />
                        </div>
                    </div>
                    <button className='flex w-8/12 justify-center bg-blue-600 text-center text-xl font-bold text-white pt-1 pb-1 rounded-lg'
                        onClick={login}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;