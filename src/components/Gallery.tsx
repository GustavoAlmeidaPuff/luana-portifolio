import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { PhotoItem } from '../types';

interface GalleryProps {
  photos: PhotoItem[];
}

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const PhotoContainer = styled(motion.div)`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const PhotoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const ModalImage = styled(motion.img)`
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;
  padding: 1rem;
  
  &.prev {
    left: 1rem;
  }
  
  &.next {
    right: 1rem;
  }
`;

const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  
  const openModal = (photo: PhotoItem) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = '';
  };
  
  const navigate = (direction: 'prev' | 'next') => {
    if (!selectedPhoto) return;
    
    const currentIndex = photos.findIndex(photo => photo.id === selectedPhoto.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1;
    } else {
      newIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedPhoto(photos[newIndex]);
  };
  
  return (
    <>
      <GalleryContainer>
        {photos.map(photo => (
          <PhotoContainer 
            key={photo.id}
            style={{ aspectRatio: `${photo.width / photo.height}` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => openModal(photo)}
            whileHover={{ y: -5 }}
          >
            <PhotoImage src={photo.thumbnail} alt={photo.alt} />
          </PhotoContainer>
        ))}
      </GalleryContainer>
      
      <AnimatePresence>
        {selectedPhoto && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <ModalImage 
              src={selectedPhoto.src} 
              alt={selectedPhoto.alt}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            <CloseButton onClick={closeModal}>×</CloseButton>
            <NavButton className="prev" onClick={(e) => { e.stopPropagation(); navigate('prev'); }}>
              ‹
            </NavButton>
            <NavButton className="next" onClick={(e) => { e.stopPropagation(); navigate('next'); }}>
              ›
            </NavButton>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery; 