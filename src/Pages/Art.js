import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageTextComponent from "../Components/ImageTextComponet";
import TitleBar from "../Components/TitleBar";
import Banner from "../Components/Banner";
import ImageGrid from "../Features/ImageLibrary/ImageGrid";

import artImage from "../Media/Images/art.png";

export default function Art({setCurrentPage}) {
  const bannerImage = {
    filePath: require("../Media/Images/linkedin-header.png"),
    name: "Header Image",
    altText: "Header image for the development page",
  };
  const image1 = {
    imageSide: "left",
    url: "../Media/Images/art.png",
    altText: "this is a test",
    text: "this is a test for the component",
  };

  const mediaList = [
    {
      filePath: require("../Media/Images/art.png"),
      name: "test1",
      altText: "test1",
    },
    {
      filePath: require("../Media/Images/art.png"),
      name: "test2",
      altText: "test2",
    },
    {
      filePath: require("../Media/Images/art.png"),
      name: "test3",
      altText: "test3",
    },
    {
      filePath: require("../Media/Images/art.png"),
      name: "test1",
      altText: "test1",
    },
    {
      filePath: require("../Media/Images/art.png"),
      name: "test2",
      altText: "test2",
    },
    {
      filePath: require("../Media/Images/art.png"),
      name: "test3",
      altText: "test3",
    },
  ];
  return (
    <Box>
      <TitleBar PageName={"Art"} />
      <Banner Image={bannerImage} />
      <ImageTextComponent
        ImageLeft={true}
        ImagePath={require("../Media/Images/art.png")}
        AltText={"this is a test"}
        Title={"Test"}
        Text={"this is the test for this specific component."}
        ImageWidth={"100%"}
      />
      <ImageTextComponent
        ImageLeft={false}
        ImagePath={require("../Media/Images/art.png")}
        AltText={"this is a test"}
        Text={"this is the test for this specific component."}
        ImageWidth={"100%"}
      />
      <ImageGrid MediaList={mediaList} ColumnCount={4} />
    </Box>
  );
}
