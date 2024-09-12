import { useEffect, useRef, useState } from 'react';

function useMultipleIntersectionObserver(refs, options) {
  const [isVisible, setIsVisible] = useState(refs.map(() => false));
  const hasBeenVisibleRef = useRef(refs.map(() => false));

  useEffect(() => {
    const observers = refs.map((ref, index) => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
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
