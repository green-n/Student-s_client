import React from 'react'
import { Box,Grid } from '@mui/material'
import { Button, Divider, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';



const ClippedDrawer = styled(Drawer)(({ theme }) => ({
  width: 259,
  paddingTop: 100,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 259,
    boxSizing: 'border-box',
  },
}));
  

export default function IndividualChatRoute() {
  return (
    <>
        <Box>
            <Grid container>
                <Grid item xs={3}>
                    <ClippedDrawer
                        anchor="left"
                        variant="permanent"

                    >
                        <ListItem> 
                        <ListItemText >faaf</ListItemText>
                      </ListItem>
                    </ClippedDrawer>
                </Grid>
                <Grid item xs={9}>

                </Grid>
            </Grid>
        </Box>
    </>
  )
}
