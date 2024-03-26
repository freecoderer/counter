import React, { useState, useEffect, useCallback } from 'react';
import './Counter.css';

function Counter() {
    const [counter, setCounter] = useState(0);

    const increment = useCallback(() => {
        setCounter(counter + 1);
    }, [counter]);

    const handleKeyDown = useCallback((event) => {
        if (event.code === 'Space') { // Check if the key pressed was the spacebar
            increment();
        }
    }, [increment]);

    useEffect(() => {
        window.addEventListener('click', increment);
        window.addEventListener('keydown', handleKeyDown);

        // Cleanup function to remove the event listeners when the component unmounts
        return () => {
            window.removeEventListener('click', increment);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [increment, handleKeyDown]); // Add handleKeyDown and increment to the dependencies array

    return (
        <div className="counter">
            <div>{counter}</div>
        </div>
    );
}

export default Counter;