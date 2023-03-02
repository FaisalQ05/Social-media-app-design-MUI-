import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import ShareIcon from '@mui/icons-material/Share'
import Post from './Post'

const Feed = () => {
    return (
        <Box flex={4} p={2}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </Box>
    )
}

export default Feed