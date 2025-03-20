import { useCallback, useState } from "react";

export function useArrayState(initialValue = []) {

    const [innerArray, setInnerArray] = useState(initialValue);

    const add = useCallback((data) => {
        setInnerArray(innerArray => {
            const old = innerArray.filter(elem => elem.id !== data.id);
            return [data, ...old];
        });
    }, []);

    const remove = useCallback((id) => {
        setInnerArray(innerArray => innerArray.filter(elem => elem.id !== id));
    }, []);

    return [innerArray, { add, remove }];
}