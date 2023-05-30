import React from 'react'
import { Document, Page } from 'react-pdf';

export const PdfViewer = ({ pdfUrl, useIframe = false }) => {
    
      return <iframe src={pdfUrl} width="100%" height="1000px" title="PDF Viewer" />;

  };