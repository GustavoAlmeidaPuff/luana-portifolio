import React from 'react';
import './App.css';
import Layout from './components/Layout';
import Carousel from './components/Carousel';
import Gallery from './components/Gallery';
import { featuredPhotos, galleryCollections } from './data/sampleData';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  width: 100%;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  font-size: 2rem;
  margin: 3rem 0 1.5rem;
  text-align: center;
  color: #333;
`;

const GallerySection = styled.section`
  margin: 2rem 0;
`;

function App() {
  return (
    <Layout>
      <HomeContainer>
        <Carousel photos={featuredPhotos} />
        
        {galleryCollections.map((collection, index) => (
          <GallerySection key={collection.title}>
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {collection.title}
            </SectionTitle>
            <Gallery photos={collection.items} />
          </GallerySection>
        ))}
      </HomeContainer>
    </Layout>
  );
}

export default App; 