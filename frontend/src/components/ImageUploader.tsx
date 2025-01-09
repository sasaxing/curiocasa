import React, { useState } from "react";

interface ImageInfo {
  file: File;
  url: string;
  description: string;
}

const ImageUploader: React.FC<{ onUpload: (images: ImageInfo[]) => void }> = ({ onUpload }) => {
  const [images, setImages] = useState<ImageInfo[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newImages = Array.from(files).map((file) => ({
      file,
      url: URL.createObjectURL(file),
      description: "这是雅典娜的盾牌",
    }));

    setImages(newImages);
    onUpload(newImages);
  };

  return (
    <div>
      <input type="file" accept="image/*" multiple onChange={handleFileChange} />
    </div>
  );
};

export default ImageUploader;
