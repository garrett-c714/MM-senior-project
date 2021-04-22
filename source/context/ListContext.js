import React, { createContext, useState, useEffect } from 'react';
import Colors from '../colors.js';

const ListContext = createContext();

const ListProvider = props => {
    const [items, setItems] = useState([]);
    const [number, setNumber] = useState(items.length);

    useEffect(() => {
        setNumber(number+1);
    }, [items])

    const addItem = newItem => {
        setItems([...items, newItem]);
    }
    const removeItem = key => {
        const newItems = items.filter(item => item.key != key);
        console.log(key);
        console.log(newItems);
        setItems(newItems);
    }

    const value = {
        items: items,
        addItem: addItem,
        removeItem: removeItem,
        number: number
    }

    return (
        <ListContext.Provider value={value}>
            {props.children}
        </ListContext.Provider>
    )
}

export { ListContext, ListProvider };