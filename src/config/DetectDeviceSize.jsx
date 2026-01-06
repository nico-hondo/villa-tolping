import { useState, useEffect } from "react";

const useDeviceSize = () => {
    const [width, setWidth] = useState(undefined);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
};

export default useDeviceSize;