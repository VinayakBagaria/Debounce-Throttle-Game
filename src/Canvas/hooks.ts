import { useEffect, useRef } from 'react';
import { debounce, throttle } from './utils';

function useDebounce(callback: Function, duration: number) {
  const debounceRef = useRef(debounce(callback, duration));

  useEffect(() => {
    return () => {
      debounceRef.current.clear();
    };
  }, []);

  return debounceRef.current.implementation;
}

function useThrottle(callback: Function, duration: number) {
  const throttleRef = useRef(throttle(callback, duration));

  useEffect(() => {
    return () => {
      throttleRef.current.clear();
    };
  }, []);

  return throttleRef.current.implementation;
}

export function useFunctions(callback: Function, duration: number) {
  const debounceFunction = useDebounce(callback, duration);
  const throttleFunction = useThrottle(callback, duration);

  return {
    normalFunction: callback,
    debounceFunction,
    throttleFunction,
  };
}
