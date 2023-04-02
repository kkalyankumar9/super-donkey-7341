import { Center, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://n4.sdlcdn.com/imgs/k/k/z/web_banner_07-092e2.jpg",
    "https://n3.sdlcdn.com/imgs/k/n/r/WB_Breezy_Dresses_21march-100f4.jpg",
    "https://n1.sdlcdn.com/imgs/k/f/v/12_april_WB_Festive_kurta_sets_WEB_1-9d9b7.jpg",
    "https://n1.sdlcdn.com/imgs/k/f/v/12_april_WB_Kitchen_Essentials_WEB-cca82.jpg",
  ];

  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Center position="relative">
      <IconButton
        position="absolute"
        left="0"
        aria-label="Previous Image"
        icon={<ArrowBackIcon />}
        onClick={prevImage}
      />
      <img src={images[currentImageIndex]} alt="Slide" />
      <IconButton
        position="absolute"
        right="0"
        aria-label="Next Image"
        icon={<ArrowForwardIcon />}
        onClick={nextImage}
      />
    </Center>
  );
};

export default ImageSlider;
