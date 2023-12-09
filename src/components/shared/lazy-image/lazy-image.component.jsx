import { useEffect, useRef, useState } from 'react';
import {
  ImageElement,
  SpinnerContainer,
  SpinnerOverlay,
} from './lazy-image.styles';

const LazyImage = ({ imagesrc }) => {
  const [isLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = imagesrc;
    image.onload = () => setImageLoaded(true);

  },[imagesrc]);

  return isLoaded ? (
    <img src={imagesrc} />
  ) : (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};
export default LazyImage;
