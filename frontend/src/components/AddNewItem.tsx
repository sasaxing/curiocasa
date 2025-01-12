import React, { useState } from 'react';

function AddNewItem() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    if (image) {
      formData.append('image', image);
    }

    // fetch('YOUR_API_ENDPOINT', {
    //   method: 'POST',
    //   body: formData,
    // })
    // .then(response => response.json())
    // .then(data => console.log('Success:', data))
    // .catch(error => console.error('Error:', error));

    console.log('藏品提交:', { name, description, image });
  };

  return (
    <form onSubmit={handleSubmit}>
        <h2>添加新藏品</h2>
      <div>
        <label>藏品名称：</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <br/>
        <br/>
      </div>
      <div>
        <label>藏品描述：</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
      </div>
      <br/>
      <div>
        <label>上传图片：</label>
        <input 
          type="file" 
          accept="image/*" 
          onChange={(e) => setImage(e.target.files[0])} 
        />
      </div>
      <button type="submit">提交</button>
    </form>
  );
}

export default AddNewItem;