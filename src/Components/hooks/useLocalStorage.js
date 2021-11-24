import { useState } from "react";

export function useLocalStorage(key, initialValue){
    const [storedValue, setStoredValue] = useState(()=> {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue;
        } catch (err) {
            return initialValue;
        }
    });

    const setValue = value => {
        try {
            setStoredValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (err){
            console.error(err)
        }
    }

    return [storedValue, setValue]
}