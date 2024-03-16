import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PDFViewer from '../Features/PDFViewer';
import samplePDF from "../Media/PDF/TriangleAgency.pdf";

export default function About(){
    return (
        <Box>
            <Typography>About</Typography>
            <PDFViewer filePath={samplePDF}/>
        </Box>
    );
}