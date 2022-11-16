import { useEffect, useMemo, useState } from 'react';

export const useIsInViewport = (ref: any): boolean => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      }),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
};
