import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
    const [loaded, setLoaded] = useState(false);
    const [value, setValue] = useState<T>(initialValue);

    useEffect(() => {
        setLoaded(true);
        const jsonValue = localStorage.getItem(key);
        if (jsonValue != null) {
            setValue(JSON.parse(jsonValue));
        } else if (typeof initialValue === "function") {
            setValue((initialValue as () => T)());
        }
    }, []);

    useEffect(() => {
        if (loaded) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }, [loaded, key, value]);

    return [value, setValue] as [typeof value, typeof setValue];
}