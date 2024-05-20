import React from 'react';

const ButtonDownload = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `public/Natthapong Resume.pdf`;
    link.download = 'Natthapong Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>
      Download PDF
    </button>
  );
};

export default ButtonDownload;
