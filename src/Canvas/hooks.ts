import { useEffect, useRef } from 'react';
import { debounce, throttle } from './utils';

function useDebounce(callback: Function, duration: number) {
  const debounceRef = useRef(debounce(callback, duration));

  useEffect(() => {
    return () => {
      debounceRef.current.clear();
    };
  }, []);

  return debounceRef.current;
}

function useThrottle(callback: Function, duration: number) {
  const throttleRef = useRef(throttle(callback, duration));

  useEffect(() => {
    return () => {
      throttleRef.current.clear();
    };
  }, []);

  return throttleRef.current;
}

export function useFunctions(callback: Function, duration: number) {
  const debounceRef = useDebounce(callback, duration);
  const throttleRef = useThrottle(callback, duration);

  function killTimers() {
    debounceRef.clear();
    throttleRef.clear();
  }

  return {
    normalFunction: callback,
    debounceFunction: debounceRef.implementation,
    throttleFunction: throttleRef.implementation,
    killTimers,
  };
}
