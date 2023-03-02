import { Box, Fab, Modal, Tooltip, Typography, styled, Avatar, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'

const StyleModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '2em'
})

const AddPost = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip onClick={() => setOpen(true)} title="Delete" sx={{
                position: 'fixed', bottom: 20, left: {
                    xs: "calc(50% - 25px)",
                    md: 30
                }
            }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyleModal
                open={open}
                onClose={() => setOpen(false)}>
                <Box width={400} bgcolor='background.default' color={'text.primary'} height={200} p={3} borderRadius={5}>
                    <Typography variant='h6' color={'gray'} textAlign='center'>Create Post</Typography>
                    <UserBox>
                        <Avatar style={{ width: 30, height: 30 }} src='https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                        <Typography fontWeight={500} variant={'span'}>Faisal</Typography>
                    </UserBox>
                    <TextField sx={{width:'100%'}} placeholder='What,s on your mind' variant='standard' rows={2} multiline/>
                    <Button variant='contained' sx={{margin:'0.8em 0 0 auto',display:'block'}}>Post</Button>
                </Box>
            </StyleModal>
        </>
    )
}

export default AddPost