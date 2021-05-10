import React, { createContext, useState, useEffect } from 'react';

import Colors from '../colors.js';

const ClassContext = createContext();

const ClassProvider = props => {
    const [classes, setClasses] = useState([{name: 'Calculus', room: 310, key: 0}, {name: 'Physics', room: 129, key: 1}]);
    const [number, setNumber] = useState(classes.length);

    useEffect(() => {
        setNumber(number+1);
    }, [classes]);
    
    const addClass = newClass => {
        setClasses([...classes, newClass]);
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