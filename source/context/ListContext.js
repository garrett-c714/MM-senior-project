import React, { createContext, useState } from 'react';

const ListContext = createContext();

const ListProvider = props => {
    const [items, setItems] = useState([]);
    let number = 0;

    const addItem = newItem => {
        setItems([...items, newItem]);
        number++;
    }

    const value = {
        items: items,
        addItem: addItem,
        number: number
    }

    return (
        <ListContext.Provider value={value}>
            {props.children}
        </ListContext.Provider>
    )
}

export { ListContext, ListProvider };