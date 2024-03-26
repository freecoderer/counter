import React, { useState, useEffect } from 'react';
import './Counter.css';

function Counter() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    const handleKeyDown = (event) => {
        if (event.code === 'Space') { // Check if the key pressed was the spacebar
            increment();
        }
    };

    useEffect(() => {
        window.addEventListener('click', increment);
        window.addEventListener('keydown', handleKeyDown); // Add this line

        // Cleanup function to remove the event listeners when the component unmounts
        return () => {
            window.removeEventListener('click', increment);
            window.removeEventListener('keydown', handleKeyDown); // Add this line
        };
    }, [counter]); // Re-run the effect when `counter` changes

    return (
        <div className="counter">
            <div>{counter}</div>
        </div>
    );
}

export default Counter;