import { Box, Hidden, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import Home from '@mui/icons-material/Home'
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const Sidebar = ({ mode, setMode }) => {
    return (
        <Box sx={{
            display: {
                xs: 'none',
                sm: 'block'
            }
        }} flex={1} p={2}>
            <Box position='fixed' overflow={'auto'} width='12vw'>
                <List disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <ArticleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Feed" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <GroupsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Groups" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <StoreIcon />
                        </ListItemIcon>
                        <ListItemText primary="Marketplace" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Friends" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="My Profile" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Setting" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <ModeNightIcon/>
                        </ListItemIcon>
                        <Switch onChange={(e)=>setMode(mode==="light"? "dark" : "light")}/>
                    </ListItemButton>
                </List>
            </Box>
        </Box>
    )
}

export default Sidebar