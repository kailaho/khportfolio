import React from 'react';
import Resume from '../img/resume.pdf';

const PDFViewer = () => {
  return (
    <div>
      <iframe
        title="PDF Viewer"
        width="1000"
        height="1500"
        textAlign="center"
        src={Resume} // Replace with the path or URL to your PDF file
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
};

export default PDFViewer;