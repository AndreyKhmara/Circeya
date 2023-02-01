import React, { useEffect, useRef } from 'react';
import classes from './Slider.module.css';

const item = [
  {
    title: '/andres-vera-CmmYT6Mm948-unsplash 1-1.jpg',
  },
  {
    title: '/andres-vera-CmmYT6Mm948-unsplash 1-2.jpg',
  },
  {
    title: '/andres-vera-CmmYT6Mm948-unsplash 1-3.jpg',
  },
  {
    title: '/andres-vera-CmmYT6Mm948-unsplash 1-4.jpg',
  },
  {
    title: '/andres-vera-CmmYT6Mm948-unsplash 1-5.jpg',
  },
  {
    title: '/andres-vera-CmmYT6Mm948-unsplash 1-6.jpg',
  },
  {
    title: '/andres-vera-CmmYT6Mm948-unsplash 1-7.jpg',
  },
];

export default function Slider() {
  const ref = useRef();
  useEffect(() => {
    const el = ref.current;
    if (el) {
      const onWheel = (e) => {
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 4,
          behavior: 'smooth',
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);
  return (
    <div className={classes.container}>
      <div ref={ref} className={classes.items}>
        {
    item.map((el) => (
      <div key={el.title} className={classes.item}>
        <img src={el.title} alt="img" />
      </div>
    ))
    }
      </div>
    </div>

  );
}
