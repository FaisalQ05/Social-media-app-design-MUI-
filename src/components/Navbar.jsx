import {
  AppBar, Box, InputBase,
  styled, Toolbar, Typography, Badge, Avatar, Menu, MenuItem
} from '@mui/material'
import React from 'react'
import Pets from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}))

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex'
  }
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}))

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const onHandleClick = (e) => setAnchorEl(e.currentTarget)
  const onHandleClose = () => setAnchorEl(null)

  return (
    <AppBar position='sticky'>
      <StyledToolbar >
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>Navbar</Typography>
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search sx={{ color: 'text.primary', bgcolor: 'background.default' }}><InputBase placeholder='search...' /></Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color='error'>
            <NotificationsIcon />
          </Badge>
          <Avatar onClick={onHandleClick} style={{ width: 30, height: 30 }} src='https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        </Icons>
        <UserBox onClick={onHandleClick}>
          <Avatar style={{ width: 30, height: 30 }} src='https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          <Typography variant='span'>Faisal</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={onHandleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar