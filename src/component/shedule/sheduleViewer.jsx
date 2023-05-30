import React from 'react';
import { PdfViewer } from './PDFviewer';

function SheduleViewer() {
  const pdfUrl = 'https://vstu.by/ftpgetfile/stud/schedule/inform-tech/4_8-9.pdf';

  return (
    <div>
      <PdfViewer pdfUrl={pdfUrl} useIframe={false} />
    </div>
  );
}

export default SheduleViewer;
