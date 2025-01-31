import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { setIcon } from "./helper";
import useScreenSize from "../Helpers/useScreenSize";

/*
infolist
{
    Title:
    Categories: [
        {
            Title:
            Details:
        }
    ]
}
*/
export default function Infocards({ Title, Infolist, ActionFunction, FunctionName }) {
    const detailList = Infolist.Categories;
    const screenSize = useScreenSize();
  return (
    <Card variant="outlined">
      <Box padding={'5%'}>
        <CardContent>
          <Stack direction={'row'}>
            {setIcon(Title, 'large')}
          <Typography fontSize={"1.75rem"} textAlign={"center"} width={"100%"} sx={{textDecoration:'underline', marginBottom:'2%'}}>{Title}</Typography>
          </Stack>
          {Infolist.map((card) => (
            <Box width={"100%"}>
              <Typography fontSize={"1.4rem"} sx={{textDecoration:'underline'}}>{card.title}</Typography>
              <Typography fontSize={"1rem"}>{card.details}</Typography>
            </Box>
          ))}
        </CardContent>
        <CardActions>
          <Button
              size="small"
              variant="contained"
              style={{
                padding: '10px',
                flex: 1,
                fontSize: '20px',
              }}
              onClick={() => {
                  ActionFunction();
              }}
            >
              {FunctionName}
            </Button>
        </CardActions>
      </Box>
    </Card>
  );
}
