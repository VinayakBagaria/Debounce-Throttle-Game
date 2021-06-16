import { useEffect, useRef } from 'react';
import { debounce, throttle } from './utils';

function useDebounce(callback: Function, duration: number) {
  const debounceRef = useRef(debounce(callback, duration));

  useEffect(() => {
    debounceRef.current = debounce(callback, duration);
    return () => {
      debounceRef.current.clear();
    };
  }, [duration]);

  return debounceRef.current;
}

function useThrottle(callback: Function, duration: number) {
  const throttleRef = useRef(throttle(callback, duration));

  useEffect(() => {
    throttleRef.current = throttle(callback, duration);
    return () => {
      throttleRef.current.clear();
    };
  }, [duration]);

  return throttleRef.current;
}

function useFunctions(callback: Function, duration: number) {
  const debounceRef = useDebounce(callback, duration);
  const throttleRef = useThrottle(callback, duration);

  function rafFunction() {
    requestAnimationFrame(() => {
      callback();
    });
  }

  function killTimers() {
    debounceRef.clear();
    throttleRef.clear();
  }

  return {
    normalFunction: callback,
    debounceFunction: debounceRef.implementation,
    throttleFunction: throttleRef.implementation,
    rafFunction,
    killTimers,
  };
}

export default useFunctions;
