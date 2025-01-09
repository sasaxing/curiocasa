
import React, { useEffect, useState } from 'react';


interface ImageInfo {
    description: string;
    name: string;
    path: string;
    _id: string;
}

const ImageGallery = () => {
  const [images, setImages] = useState([] as ImageInfo[]);
  const [selectedImage, setSelectedImage] = useState({} as ImageInfo);

  // 获取图片列表的函数
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

  // 页面加载时获取图片
  useEffect(() => {
    fetchImages();
  }, []);

  // 处理点击图片事件，显示图片详情
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <h2>藏品讲解</h2>
      
      {/* 如果选中了图片，显示图片的描述 */}
      {selectedImage && (
        <div>
          <h3>{selectedImage.description}</h3>
          <div className="image-container">
            <img src={selectedImage.path} alt={selectedImage.description} />
          </div>
        </div>
      )}

      <h2>藏品列表</h2>
      <div className="gallery">
        {/* 遍历图片列表并显示 */}
        {images.map((image, index) => (
          <div key={index} className="image-item" onClick={() => handleImageClick(image)}>
            <div className="image-preview-container">
              <img src={image.path} alt={image.description} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
