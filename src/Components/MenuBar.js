import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from "@mui/material/Stack";
import { setIcon } from './helper';

export default function MenuBar({setCurrentPage, optionList}){
    const [open, setOpen] = React.useState(false);
    console.log(optionList);

    function setPage(text){
        setCurrentPage(text);
    }

    function OpenMenu(state){
        setOpen(state);
    }

    const MenuList = (
        <Box sx={{width: 200}} role="presentation" onClick={() => {OpenMenu(false);}}>
            <List>
                {optionList.map((text) => (
                    <ListItem key={text}>
                        <ListItemButton onClick={()=>{setPage(text)}}>
                            <Stack direction={"row"}>
                                {setIcon(text)}
                                <ListItemText primary={text}/>
                            </Stack>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
    return (
        <Box>
            <Button onClick={()=> {OpenMenu(!open)}}>Menu</Button>
            <Drawer open={open} onClose={() => {OpenMenu(false);}}>
                {MenuList}
            </Drawer>
        </Box>
    );
};
