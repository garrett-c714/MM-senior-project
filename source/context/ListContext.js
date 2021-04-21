import React, { createContext, useState } from 'react';

const ListContext = createContext();

const ListProvider = props => {
    const [items, setItems] = useState([]);

    const addItem = newItem => {
        setItems([...items, newItem]);
    }

    const value = {
        items: items,
        addItem: addItem
    }

    return (
        <ListContext.Provider value={value}>
            {props.children}
        </ListContext.Provider>
    )
}

export { ListContext, ListProvider };