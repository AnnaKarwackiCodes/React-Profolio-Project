import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import PDFViewer from "../Features/PDF/PDFViewer";

import TitleBar from "../Components/TitleBar";
import Banner from "../Components/Banner";
import ImageTextComponent from "../Components/ImageTextComponet";
import TextBlock from "../Components/TextBlock";
import Infocards from "../Components/Infocards";
import PDFModal from "../Features/PDF/PDFModal";

export default function About({ setCurrentPage }) {
  const resumeCard = [
    {
      title: "",
      details: "",
    },
  ];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const resumePDF =  "https://karwacki-portfolio-bucket.s3.us-east-2.amazonaws.com/PDF/AnnaKarwacki-Resume2024.pdf";
  return (
    <Box>
      <TitleBar PageName={"About"} />
      <ImageTextComponent
        ImageLeft={true}
        ImagePath={require("../Media/Images/creation-gif.gif")}
        AltText={"gif of a pixel art version of myself writing"}
        Title={"Behind the Curtain"}
        Text={
          "Grew up in Maryland and went 6 hours north to go to college at the Rochester Institute of Technology where I graduated Fall of 2018 with a BS in Game Design and Development. \n\nI am currently working as a software engineer at Turnaround Factor. Over the past 6-ish years I have worked on a wild collection of projects at different companies: from porting a mobile game to the Nintendo Switch to building websites for companies in the Western New York Area to now making a video conferencing app with AR features."
        }
        ImageWidth={"50%"}
      />
      <TextBlock
        Title={"What do I do outside of work?"}
        Body={
          "I spend my time walking and cuddling my corgi Wulfred, playing board games, creating stories in TTRPGs with my friends, creating literally anything related to those TTRPG stories (from prop weapons for Ren Faires to improve character sheets for playing), or training my HEMA (Historic European Martial Arts) skills. I have found that over the years that the inspiration that D&D and other TTRPGs give isn't just a reroll of a die, it's my ability to create something even when making something is the last thing I want to do. Which is such a beautiful thing about D&D and the groups we form along the way."
        }
      />
      <ImageTextComponent
        ImageLeft={false}
        ImagePath={require("../Media/Images/meepthew-delivery-crop.jpg")}
        AltText={"image of a homebrew d&d creature to talk about contact info"}
        Title={"Want to talk More?"}
        Text={
          "If you thought to yourself: this is someone I should contact because I like what they are doing here are ways to get in touch with me."
        }
        ImageWidth={"50%"}
        CallToActionName={"Email Me"}
        ActionToCall={() => {
          window.open("mailto:annamakesgames@gmail.com", "_blanks");
        }}
      />
      <Stack
        direction={"row"}
        spacing={3}
        paddingLeft={"5%"}
        paddingRight={"5%"}
        paddingTop={"2.5%"}
        paddingBottom={"2.5%"}
        alignContent={'center'}
        justifyContent={'center'}
      >
        <TextBlock Title={"Let's connect:"} Body={""} />
        <Infocards
          Title={"Resume"}
          Infolist={resumeCard}
          ActionFunction={() => {
            //setCurrentPage("Development");
            handleOpen();
          }}
          FunctionName={"View my resume"}
        />
        <Infocards
          Title={"GitHub"}
          Infolist={resumeCard}
          ActionFunction={() => {
            window.open("https://github.com/AnnaKarwackiCodes", "_blanks")
          }}
          FunctionName={"Peak at my Github"}
        />
        <Infocards
          Title={"LinkedIn"}
          Infolist={resumeCard}
          ActionFunction={() => {
            window.open("https://linkedin.com/in/annakarwacki/", "_blanks")
          }}
          FunctionName={"View my Profile"}
        />
        <Infocards
          Title={"Email"}
          Infolist={resumeCard}
          ActionFunction={() => {
            window.open("mailto:annamakesgames@gmail.com", "_blanks");
          }}
          FunctionName={"Send an Email"}
        />
      </Stack>
      <PDFModal CurrentPDF={resumePDF} open={open} handleClose={handleClose}/>
    </Box>
  );
}
