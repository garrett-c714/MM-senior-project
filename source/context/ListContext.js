import React, { createContext, useState } from 'react';
import Colors from '../colors.js';

const ListContext = createContext();

const ListProvider = props => {
    const [items, setItems] = useState([{text: 'Test Item 1', color: Colors.blue, key: 0}, {text: 'Senior Project', color: Colors.mintGreen, key: 1}]);
    const [number, setNumber] = useState(items.length);

    const addItem = newItem => {
        setItems([...items, newItem]);
        setNumber(items.length);
    }
    const removeItem = item => {
        //TODO
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