import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TitleBar from '../Components/TitleBar';
import Banner from '../Components/Banner';
import ImageTextComponent from '../Components/ImageTextComponet';

export default function Design({setCurrentPage}){
    const bannerImage = {
        filePath: require("../Media/Images/linkedin-header.png"),
        name: "Header Image",
        altText: "Header image for the development page",
      };
    return (
        <Box>
            <TitleBar PageName={"Design"} />
            <Banner Image={bannerImage} />
        </Box>
    );
}