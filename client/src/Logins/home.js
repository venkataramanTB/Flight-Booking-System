import React from 'react';
import { useSpring, animated } from 'react-spring';
import Lottie from 'react-lottie';
import animationData from '../element/Animation - 1704382022025.json';
import SearchFlights from './Search';
import { Link } from 'react-router-dom';

const Home = () => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });
    const textProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1000 });
    const buttonProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1500 });

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <animated.div style={props}>
            <div style={{ position: 'relative', height: '100vh' }}>
                <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
                <div style={{ 
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    backgroundColor: 'white', 
                    opacity: '50%',
                    padding: '20px', 
                    borderRadius: '8px', 
                    boxShadow: '0px 0px 5px 2px rgba(0,0,0,0.1)' 
                }}>
                    <animated.h1 style={textProps}>Welcome to Our Flight Booking Service</animated.h1>
                    <animated.p style={textProps}>Book your flights with us and enjoy seamless travel experiences. Start your journey by searching for flights now.</animated.p>
                    <animated.button 
                        style={{
                            ...buttonProps,
                            backgroundColor: '#007BFF',
                            color: 'white',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '4px',
                            opacity: '100%',
                            cursor: 'pointer',
                            fontSize: '16px',
                            transition: 'background-color 0.3s ease'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#007BFF'}
                    > 
                    <Link 
                to="/search"
                style={{
                    color: 'white',
                    textDecoration: 'none', // Removes the default underline of links
                    display: 'inline-block', // Makes the link behave like a button
                    width: '100%', // Ensures the link fills the entire button
                    textAlign: 'center' // Centers the link text
                }}
            >                       
                        Search Flights
                        </Link>
                    </animated.button>
                    </div>
            </div>
        </animated.div>
    );
}

export default Home;