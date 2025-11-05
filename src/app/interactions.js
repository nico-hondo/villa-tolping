import { useState } from 'react';

export const funcShowFull = (showFull, setShowFull) =>{
    console.log("Button Clicked");
    setShowFull(!showFull)
}

export const useAccordion = (initialState = null) => {
    const [activeIndex, setActiveIndex] = useState(initialState);

    const toggleIndex = (id) => {
        setActiveIndex((prevIndex) => (prevIndex === id ? null : id));
    };

    const isActive = (id) => activeIndex === id;

    const closeAll = () => setActiveIndex(null);

    return{
        activeIndex,
        toggleIndex,
        isActive,
        closeAll
    }
}