import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { setIcon } from "./helper";


export default function TitleBar({ PageName }) {
  return (
    <Stack direction={"row"}>
      {setIcon(PageName)}
      <Typography>{PageName}</Typography>
    </Stack>
  );
}
