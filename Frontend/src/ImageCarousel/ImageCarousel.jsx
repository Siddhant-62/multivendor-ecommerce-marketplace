import React, { useEffect, useState } from 'react';
import '../ImageCarousel/ImageCarousel.css';


const images = [
  require('../assets/images/img1.jpg'),
  require('../assets/images/img2.jpeg'),
  require('../assets/images/img3.jpeg'),
  require('../assets/images/img4.jpeg'),
  require('../assets/images/img5.jpg'),
  require('../assets/images/img6.jpg'),
];


const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (i) => setIndex(i);

  return (
    <div className="carousel-container">
      <img src={images[index]} alt={`Slide ${index + 1}`} className="carousel-image" />

      <div className="dots-container">
  {images.map((_, i) => (
    <span
      key={i}
      className={`dot ${i === index ? 'active' : ''}`}
      onClick={() => setIndex(i)}
    ></span>
  ))}
</div>

    </div>
  );
};

export default ImageCarousel;