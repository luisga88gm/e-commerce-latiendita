import { React, createContext, useState,useEffect } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [countBuys, setCountBuys] = useState(0);

    useEffect(() => {
        getItems();
    }, []);

    const getItems = () => {
        if (localStorage.getItem('items')) {
            const itemsLocal = JSON.parse(localStorage.getItem('items'));
            setCountBuys(parseInt(localStorage.getItem('countBuy')));
            setItems(itemsLocal);
        }
    }


    const addItem = (currentItem) => {
        if (items.some(({ item }) => item.id === currentItem.item.id)) {
            console.warn("element repeat");
            return
        };

        localStorage.setItem('countBuy', countBuys + 1);
        setCountBuys(countBuys + 1);
        setItems([...items, currentItem,]);
        localStorage.setItem('items', JSON.stringify([...items, currentItem]));
    }


    const addStockItem = (item) => {
        item.selected = item.selected + 1
        item.subtotal = item.price * item.selected;
        localStorage.setItem('items', JSON.stringify([...items]));
        return item;
    }

    const subtractStockItem = (item) => {
        item.selected = item.selected - 1;
        item.subtotal = item.price * (item.selected);
        localStorage.setItem('items', JSON.stringify([...items]));
        return item;
    }

    const calculateTotal = () => {
        let total = 0
        items.map(({ item }) => total += item.subtotal)
        return total;
    }

    const finishedBuy = () => {
        setItems([])
        setCountBuys(0);
    }

    const removeItem = (currentItem) => {
        const array = items.filter(({ item }) => item.id !== currentItem.id);
        setCountBuys(countBuys - 1);
        localStorage.setItem('countBuy', countBuys - 1);
        setItems([...array]);

        localStorage.setItem('items', JSON.stringify([...array]));
    }
    const clearListItem = () => {
        setItems([]);
        localStorage.clear();
    }

    return (
        <CartContext.Provider
            value={{ items, setItems, addStockItem,subtractStockItem, calculateTotal, finishedBuy, countBuys, addItem, removeItem, clearListItem }}
        >
            {children}
        </CartContext.Provider>
    )
}
