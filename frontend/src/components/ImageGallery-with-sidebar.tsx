import React, { useEffect, useState } from 'react';

interface ImageInfo {
  description: string;
  name: string;
  path: string;
  _id: string;
}

const Sidebar = ({ onSelectItem, images }) => {
  return (
    <div className="sidebar">
      <h2>藏品列表</h2>
      <ul>
        {images.map((image, index) => (
          <li key={image.id} onClick={() => onSelectItem(image)}>
            {image.name}

            <div key={index} className="image-item" onClick={() => onSelectItem(image)}>
              <div className="image-preview-container">
                <img src={image.path} alt={image.description} />
              </div>
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

const MainContent = ({ selectedItem }) => {
  return (
    <div className="main-content">

      {selectedItem ? (
        <>
          <h2>{selectedItem.name}</h2>
          <div className="image-container">
            <img src={selectedItem.path} alt={selectedItem.description} />
          </div>
          <p>{selectedItem.description}</p>
        </>
      ) : (
        <p>Please select an item from the list.</p>
      )}
    </div>
  );
};

const ImageGallery = () => {
  const [images, setImages] = useState([] as ImageInfo[]);
  const [selectedItem, setSelectedItem] = useState({} as ImageInfo);


  const fetchImages = async () => {
    try {
      console.log(' ==> fetch data:');

      const response = await fetch('http://localhost:5000/images'); // 替换为你后端的 API 地址
      const data = await response.json();
      console.log(' ==> data:', data);
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);
  
  return (
    <div className="container">
      
      <Sidebar onSelectItem={setSelectedItem} images={images} />
      <MainContent selectedItem={selectedItem} />
    </div>
  );
};

export default ImageGallery;