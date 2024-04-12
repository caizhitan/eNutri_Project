import eNutriLogo from '../assets/eNutriLogo.png';
import NavButton from "../components/NavButton";
import { useNavigate } from 'react-router-dom';

const NavBar = props => {
    const navigate = useNavigate();
    const HomeOnClick = () => {
        navigate(`/Dashboard?patientID=${props.id}`);
    };
    const storeFoodOnClick = () => {
        navigate(`/StoreFood?patientID=${props.id}`);
    };
    const configureDispenserOnClick = () =>{
        navigate(`/DispenseConfigure?patientID=${props.id}`);
    };
    const historyListOnClick = () => {
        navigate(`/HistoryList?patientID=${props.id}`);
    };
    
    return(
        <>
            <nav className={
                `flex-col flex w-3/12 h-screen items-center pt-5 
                ${props.dashBoard && (" bg-black ")}
                ${props.storeFood && (" bg-green-600 ")}
                ${props.configureDispenser && (" bg-blue-400 ")}
                ${props.historyList && (" bg-purple-400 ")}
            `}>
                <div className="flex-col flex h-1/3 w-full items-center">
                    <img src={eNutriLogo} alt='eNutri logo' className="w-3/5 h-auto mt-auto"/>
                    <hr className=" h-3 bg-yellow-400 rounded-3xl w-2/3 mt-auto" />
                </div>
                <div className="flex-row h-2/3">
                    <NavButton 
                        name="Home" 
                        select={props.dashBoard}
                        onClick={HomeOnClick}
                    />
                    <NavButton 
                        name="Store Food" 
                        select={props.storeFood}
                        onClick={storeFoodOnClick}
                    />
                    <NavButton 
                        name="Configure Dispenser" 
                        select={props.configureDispenser}
                        onClick={configureDispenserOnClick}
                    />
                    <NavButton 
                        name="History List" 
                        select={props.historyList}
                        onClick={historyListOnClick}
                    />
                </div>
            </nav>
        </>
    )
}

export default NavBar;