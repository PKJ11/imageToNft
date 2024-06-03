import React, { useState } from 'react';

const UploadGLB = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    if (file) {
      onFileUpload(file);
    } else {
      alert('Please upload a GLB file.');
    }
  };

  return (
    <div>
      <input type="file" accept=".glb" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default UploadGLB;
