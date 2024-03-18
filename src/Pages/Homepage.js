import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TitleBar from "../Components/TitleBar";
import Banner from "../Components/Banner";
import ImageTextComponent from "../Components/ImageTextComponet";
import TextBlock from "../Components/TextBlock";
import Stack from "@mui/material/Stack";
import Infocards from "../Components/Infocards";

export default function Homepage({setCurrentPage}) {
  const bannerImage = {
    filePath: require("../Media/Images/linkedin-header.png"),
    name: "Header Image",
    altText: "Header image for the homepage",
  };

  const devCard = [
    {
        title: 'Languages',
        details: 'C#, JavaScript, C++, HTML5, CSS, SCSS'
    },
    {
        title: 'Libraries',
        details: 'AR Foundation, React, React Native, Node.js'
    },
    {
        title: 'Platforms',
        details: 'Android, HP Mixed Reality Headset, iOS (React Native, Objective-C), Microsoft Hololens 2, Nintendo Switch, PC, Web (WordPress, HubSpot, Kajabi)'
    },
    {
        title: 'Development Tools',
        details: 'Unity, Microsoft Visual Studio, Visual Studio Code'
    }, 
];

const designCard = [
    {
        title: 'Targets',
        details: 'Digital Games, Web, TableTop RPG'
    },
    {
        title: 'Tools',
        details: 'Photoshop, inDesign, Marvel App, Figma, Affinity App Suite'
    }
];

const artCard = [
    {
        title: 'Mediums',
        details: '2D Traditional, 2D Digital, 3D Digital'
    },
    {
        title: 'Digital Tools',
        details: 'Procreate, Photoshop, Illustrator, Clip Studio, Maya (2017, 2018, 2019), Blender'
    },
    {
        title: 'Physical Mediums',
        details: 'Pen, Dip pen, Marker, Paint, Charcoal'
    },
];

  return (
    <Box>
    </Box>
  );
}
