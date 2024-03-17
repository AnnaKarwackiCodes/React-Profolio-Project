import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Footer({}){
    return(
        <Box minHeight={'10%'} padding={'1%'} width={'98%'} alignContent={'center'} justifyContent={'center'}>
            <Stack direction={'row'}>
                <Typography sx={{textAlign:'center', width: '100%'}}>Developed and Designed by Anna Karwacki, Copyright 2024 Anna Karwacki, All Rights Reserved</Typography>
            </Stack>
        </Box>
    );
}