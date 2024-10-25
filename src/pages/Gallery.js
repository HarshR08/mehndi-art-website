import React from 'react';
import styled from 'styled-components';

const Gallery = () => {
  return (
    <GallerySection>
      <h2>Gallery</h2>
      <div className="gallery">
        <img src={process.env.PUBLIC_URL + '/mehndi1.jpg'} alt="Mehndi Art 1" />
        <img src={process.env.PUBLIC_URL + '/mehndi2.jpg'} alt="Mehndi Art 2" />
        <img src={process.env.PUBLIC_URL + '/mehndi3.jpg'} alt="Mehndi Art 3" />
        {/* Add more images as needed */}
      </div>
    </GallerySection>
  );
};

const GallerySection = styled.section`
  padding: 50px 0;
  text-align: center;

  h2 {
    margin-bottom: 2rem;
  }

  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    img {
      margin: 10px;
      width: 200px;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;

export default Gallery;