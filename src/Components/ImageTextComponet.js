import * as React from "react";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function ImageTextComponent({
  ImageLeft,
  ImagePath,
  AltText,
  Title,
  Text,
}) {
  const imgPath = ImagePath;
  const myDirection = ImageLeft ? "row" : "row-reverse";
  return (
    <Stack direction={myDirection} container>
      <Box width={"50%"}>
        <img
          src={ImagePath}
          alt={AltText}
          width={'90%'}
        />
      </Box>
      <Box alignItems={"center"} backgroundColor={"pink"} width={"50%"}>
        <Box padding={'5%'}>
        <Typography width={'90%'} fontSize={'2rem'}>{Title}</Typography>
        <Typography width={'90%'} fontSize={'1.25rem'}>{Text}</Typography>
        </Box>
      </Box>
    </Stack>
  );
}
