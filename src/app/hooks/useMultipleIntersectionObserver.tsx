import { useEffect, useRef, useState } from 'react';

function useMultipleIntersectionObserver(
  refs: React.RefObject<Element>[],
  options: IntersectionObserverInit = {}
) {
  const [isVisible, setIsVisible] = useState<boolean[]>(refs.map(() => false));
  const observersRef = useRef<IntersectionObserver[]>([]);
  const hasBeenVisible = useRef<boolean[]>(refs.map(() => false));

  useEffect(() => {
    // Cleanup previous observers
    observersRef.current.forEach(observer => observer.disconnect());
    
    // Create new observers for each ref
    observersRef.current = refs.map((ref, index) => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          // Once element becomes visible, keep it visible
          hasBeenVisible.current[index] = true;
          setIsVisible(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
          
          // Optionally stop observing once element has been seen
          observer.unobserve(entry.target);
        }
      }, {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
        root: options.root || null
      });

      // Start observing if ref is available
      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    // Cleanup function
    return () => {
      observersRef.current.forEach(observer => observer.disconnect());
    };
  }, [refs, options.threshold, options.rootMargin, options.root]);

  return isVisible;
}

export default useMultipleIntersectionObserver;
