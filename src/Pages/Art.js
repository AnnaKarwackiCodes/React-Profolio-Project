import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageTextComponent from "../Components/ImageTextComponet";
import Grid from "@mui/material/Grid";
import TitleBar from "../Components/TitleBar";

import artImage from '../Media/Images/art.png';

export default function Art() {
    const image1 = {
        imageSide: 'left',
        url: '../Media/Images/art.png',
        altText: 'this is a test',
        text: 'this is a test for the component'
    }
  return (
    <Box>
        <TitleBar PageName={"Art"}/>
      <Typography>Art</Typography>
      <ImageTextComponent ImageLeft={true} ImagePath={require("../Media/Images/art.png")} AltText={'this is a test'} Title ={'Test'} Text={'this is the test for this specific component.'}/>
      <ImageTextComponent ImageLeft={false} ImagePath={require("../Media/Images/art.png")} AltText={'this is a test'} Text={'this is the test for this specific component.'}/>
    </Box>
  );
}