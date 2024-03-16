import * as React from "react";
import ReactDOM from "react-dom";
import Box from "@mui/material/Box";
import { Document, Page, pdfjs } from "react-pdf";
import Button from '@mui/material/Button';
import * as pdfjsLib from "pdfjs-dist";
import Stack from "@mui/material/Stack";
// Import the worker correctly to avoid the message "Warning: Setting up fake worker"
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import Link from '@mui/material/Link';

export default function PDFViewer({filePath}) {
  const [numPages, setNumPages] = React.useState();
  const [pageNumber, setPageNumber] = React.useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  React.useEffect(() => {
    pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
  }, []);
  return (
    <Box alignItems={'center'} justifyContent={'center'} backgroundColor="pink" width={"75%"}>
      <Document file={filePath} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber}/>
      </Document>
      <Stack direction={'row'}>
        {pageNumber !== 1 && <Button onClick={()=>{setPageNumber(pageNumber-1)}}>Prev Page</Button>}
        {pageNumber !== numPages && <Button onClick={()=>{setPageNumber(pageNumber+1)}}>Next Page</Button>}
      </Stack>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <Link href={filePath} target='_blank'>Download PDF</Link>
    </Box>
  );
}
