import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { setIcon } from "./helper";


export default function TitleBar({ PageName }) {
  return (
    <Stack direction={"row"} width={'100%'} alignItems={'center'} justifyContent={'center'}>
      {setIcon(PageName, 'large')}
      <Typography fontSize={'2.4rem'}>{PageName}</Typography>
    </Stack>
  );
}
