import { useNavigate } from 'react-router-dom';
import './ErrorPage.css';

export default function ErrorPage(){
    
    const navigate = useNavigate();
    const returnHome = () => {
        navigate("/");
    }
    return (
        <>
            <div className='errorMessage'>
                <p>
                Sorry, there seems to have been an error loading the data for this page.
                <br/>
                <br/>
                Click the button below to return to the home page.
                </p>
                <button className='returnHome' onClick={returnHome}>
                    <i className="fa fa-home"></i>
                </button>
            </div>
        </>


    );
}