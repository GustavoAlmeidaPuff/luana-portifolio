import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { PhotoItem } from '../types';

interface CarouselProps {
  photos: PhotoItem[];
  autoplay?: boolean;
  interval?: number;
}

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  max-height: 800px;
  overflow: hidden;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    height: 50vh;
  }
`;

const SlideContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Controls = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 5;
`;

const Dot = styled.button<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.active ? '#fff' : 'rgba(255, 255, 255, 0.5)'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #fff;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.2);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 5;
  
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
  
  &.prev {
    left: 1rem;
  }
  
  &.next {
    right: 1rem;
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0
  })
};

const Carousel: React.FC<CarouselProps> = ({ 
  photos, 
  autoplay = true, 
  interval = 5000 
}) => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  
  const wrappedIndex = (index: number) => {
    return ((index % photos.length) + photos.length) % photos.length;
  };
  
  const nextSlide = () => {
    setCurrentIndex(prev => [wrappedIndex(prev[0] + 1), 1]);
  };
  
  const prevSlide = () => {
    setCurrentIndex(prev => [wrappedIndex(prev[0] - 1), -1]);
  };
  
  const goToSlide = (index: number) => {
    const newDirection = index > currentIndex ? 1 : -1;
    setCurrentIndex([index, newDirection]);
  };
  
  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoplay, interval]);
  
  return (
    <CarouselContainer>
      <AnimatePresence initial={false} custom={direction}>
        <SlideContainer
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 }
          }}
        >
          <SlideImage
            src={photos[currentIndex].src}
            alt={photos[currentIndex].alt}
          />
        </SlideContainer>
      </AnimatePresence>
      
      <NavButton className="prev" onClick={prevSlide}>
        ‹
      </NavButton>
      <NavButton className="next" onClick={nextSlide}>
        ›
      </NavButton>
      
      <Controls>
        {photos.map((_, index) => (
          <Dot 
            key={index} 
            active={index === currentIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </Controls>
    </CarouselContainer>
  );
};

export default Carousel; 