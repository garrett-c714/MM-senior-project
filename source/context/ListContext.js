import React, { createContext, useState, useEffect } from 'react';
import Colors from '../colors.js';

const ListContext = createContext();

const ListProvider = props => {
    const [items, setItems] = useState([]);
    const [number, setNumber] = useState(items.length);
    const [numThings, setNumThings] = useState(items.length);

    useEffect(() => {
        setNumber(number+1);
        setNumThings(items.length);
    }, [items])

    const addItem = newItem => {
        setItems([...items, newItem]);
    }
    const removeItem = key => {
        const newItems = items.filter(item => item.key != key);
        setItems(newItems);
    }

    const value = {
        items: items,
        addItem: addItem,
        removeItem: removeItem,
        number: number,
        numThings: numThings
    }

    return (
        <ListContext.Provider value={value}>
            {props.children}
        </ListContext.Provider>
    )
}

export { ListContext, ListProvider };