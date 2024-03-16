import * as React from 'react';
import Box from '@mui/material/Box';
import About from '../Pages/About';
import Development from '../Pages/Development';
import Design from '../Pages/Design';
import Art from '../Pages/Art';
import MenuBar from '../Components/MenuBar'
import Homepage from '../Pages/Homepage';

export default function Navigator(){
    const [CurrentScreen, setCurrentScreen] = React.useState('Homepage');
    const menuList = ['Homepage', 'Development', 'Design', 'Art', 'About'];
    const [CurrentView, setCurrentView] = React.useState(<Homepage/>)

    React.useEffect(() => {
        console.log(CurrentScreen);
        switch (CurrentScreen) {
            case 'Development':
                setCurrentView(<Development/>);
                break;
            case 'Design':
                setCurrentView(<Design/>);
                break;
            case 'Art':
                setCurrentView(<Art/>);
                break;
            case 'About':
                setCurrentView(<About/>);
                break;
            default:
                setCurrentView(<Homepage/>);
                break;
        };
    },[CurrentScreen]);
    return (
        <Box>
            <MenuBar setCurrentPage={setCurrentScreen} optionList={menuList}/>
            {CurrentView }
        </Box>
    );
}