import { useEffect, useState } from 'react';

export default function useHeight() {
  // const [height, setHeight] = useState(window.innerHeight * (window.visualViewport?.scale || 1));
  const [height, setHeight] = useState(100);

  useEffect(() => {
    const onResize = () => {
      setHeight(100);
    };

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  });

  // return height + 'px';
  return height + '%';
}
