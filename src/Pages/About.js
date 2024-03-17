import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PDFViewer from "../Features/PDFViewer";
import samplePDF from "../Media/PDF/TriangleAgency.pdf";
import TitleBar from "../Components/TitleBar";
import Banner from "../Components/Banner";
import ImageTextComponent from "../Components/ImageTextComponet";

export default function About({setCurrentPage}) {
  const bannerImage = {
    filePath: require("../Media/Images/linkedin-header.png"),
    name: "Header Image",
    altText: "Header image for the development page",
  };
  return (
    <Box>
      <TitleBar PageName={"About"} />
      <Banner Image={bannerImage} />
      <PDFViewer filePath={samplePDF} />
    </Box>
  );
}
