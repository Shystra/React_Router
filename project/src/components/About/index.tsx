import { useLocation } from 'react-router';
import './style.css';

export const About = () => {
    const location = useLocation();
    const { state } = useLocation();


    return(
        <div>
            <h1>About</h1>
            <p>{state}</p>
        </div>
    )
}