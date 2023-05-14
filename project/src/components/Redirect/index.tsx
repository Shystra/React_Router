import { useState, useRef, useEffect } from 'react';
import './styles.css';
import { useNavigate } from 'react-router';

export const Redirect = () => {
    const [time, setTime] = useState(3);
    const timeout = useRef(0);

    const navigate = useNavigate();

    useEffect(() => {
        clearTimeout(timeout.current);
        
        timeout.current = setTimeout(() => {
            setTime( time => time - 1 )
        }, 1000)
        
        if ( time < 0 ) {
            navigate('/');
        }
        return () => {
            clearTimeout(timeout.current);
        }

    }, [time])

    return (
        <div>
            <h1>Redirect {time}</h1>
        </div>
    )
}