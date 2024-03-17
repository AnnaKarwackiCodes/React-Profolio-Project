import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TitleBar from '../Components/TitleBar';
import Banner from '../Components/Banner';
import ImageTextComponent from '../Components/ImageTextComponet';

export default function Development(){
    const bannerImage = {
        filePath: require("../Media/Images/linkedin-header.png"),
        name: "Header Image",
        altText: "Header image for the development page",
      };

    return( 
    <Box>
        <TitleBar PageName={"Development"} />
        <Banner Image={bannerImage} />
        <ImageTextComponent
        ImageLeft={true}
        ImagePath={require("../Media/Images/development.png")}
        AltText={"photo to preview some of the projects that will be seen"}
        Title={"My Development Experience"}
        Text={
          "I currently work as a software engineer for the company Turnaround Factor. Here I work fully remotely on a communication application that adds AR capabilities, PDF viewing, CAD Model viewing and interactions, and external tool readings to a video call session. On this project I am solely responsibly for the development of the iOS application and the AR features. Daily I am working with React Native, Node.js, AR Foundation, and Unity. On the more difficult days I will work with Obejctive-C."
        }
        ImageWidth={"90%"}
      />
    </Box>);
}