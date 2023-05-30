import React from 'react'
import { PdfViewer } from '../shedule/PDFviewer';

export const ProfShedule = () => {
    const pdfUrl = 'https://salmon-louise-26.tiiny.site';

    return (
      <div>
        <PdfViewer pdfUrl={pdfUrl} useIframe={false} />
      </div>
    );
}
