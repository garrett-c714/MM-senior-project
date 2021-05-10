import React, { createContext, useState, useEffect } from 'react';

import Colors from '../colors.js';

const ClassContext = createContext();

/* ---
interface c {
    name: String,
    room: number,
    key: number,
}
--- */

const ClassProvider = props => {
    const [classes, setClasses] = useState([]);
    const [number, setNumber] = useState(classes.length);

    useEffect(() => {
        setNumber(number+1);
    }, [classes]);
    
    const addClass = newClass => {
        setClasses([newClass, ...classes]);
    }
    const removeClass = key => {
        const newClasses = classes.filter(c => c.key != key);
        setClasses(newClasses);
    }

    const value = {
        classes: classes,
        addClass: addClass,
        removeClass: removeClass,
        number: number
    }

    return (
        <ClassContext.Provider value={value}>
            {props.children}
        </ClassContext.Provider>
    )
}

export { ClassContext, ClassProvider };