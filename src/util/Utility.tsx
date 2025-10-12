import {type Dispatch, type SetStateAction, useCallback, useState} from "react";

function useSetProp<T>(setState: Dispatch<SetStateAction<T>>): <K extends keyof T>(key: K, value: T[K]) => void {
    return useCallback<<K extends keyof T>(key: K, value: T[K]) => void>(
        (key, value) => { setState(prev => ({...prev, [key]: value}));}, [setState]
    );
}

export function useTypeState<T>(val: T | (() => T)): [T, <K extends keyof T>(key: K, value: T[K]) => void] {
    const [state, setState] = useState(val);
    return [state, useSetProp(setState)];
}