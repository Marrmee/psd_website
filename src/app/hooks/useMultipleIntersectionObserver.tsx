// hooks/useMultipleIntersectionObserver.js
import { useEffect, useRef, useState } from 'react';

function useMultipleIntersectionObserver(refs, options) {
  // Initial visibility state for all elements: all false
  const [isVisible, setIsVisible] = useState(refs.map(() => false));
  // Use a ref to keep track of which elements have become visible at least once
  const hasBeenVisibleRef = useRef(refs.map(() => false));

  useEffect(() => {
    const observers = refs.map((ref, index) => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          // Only update the state if it's the first time the element is intersecting
          if (!hasBeenVisibleRef.current[index]) {
            hasBeenVisibleRef.current[index] = true;
            setIsVisible((prevVisible) => {
              const updatedVisible = [...prevVisible];
              updatedVisible[index] = true;
              return updatedVisible;
            });
          }
        }
      }, options);

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      refs.forEach((ref, index) => {
        if (ref.current) {
          observers[index].unobserve(ref.current);
        }
      });
    };
  }, [refs, options]);

  return isVisible;
}

export default useMultipleIntersectionObserver;
