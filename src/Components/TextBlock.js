import * as React from "react";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

export default function TextBlock({Title, Body, Width}){
    return(
        <Box width={Width}>
            <Typography fontSize={'2rem'}>{Title}</Typography>
            <Typography fontSize={'1.25rem'}>{Body}</Typography>
        </Box>
    );
}