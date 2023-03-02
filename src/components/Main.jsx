import React, { useState } from 'react'
import { Stack, Box, createTheme, ThemeProvider } from '@mui/material'
import Sidebar from './Sidebar';
import Feed from './Feed';
import Rightbar from './Rightbar';
import Navbar from './Navbar';
import AddPost from './AddPost';

const Main = () => {


    const [mode, setMode] = useState('light')
    const darkTehme = createTheme({
        palette: {
            mode: mode
        }
    })
    return (
        <ThemeProvider theme={darkTehme}>
            <Box bgcolor={"background.default"} color={'text.primary'}>
                <Navbar />
                <Stack direction='row' spacing={2} justifyContent='space-between'>
                    <Sidebar setMode={setMode} mode={mode}/>
                    <Feed />
                    <Rightbar />
                </Stack>
                <AddPost />
            </Box>
        </ThemeProvider>
    )
}

export default Main