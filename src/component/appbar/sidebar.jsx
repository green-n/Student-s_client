import React from 'react'
import { Button, Divider, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { sideBarToggleState } from '../../redux/action/action';
import {Button as MuiButton} from '@mui/material/Button';
import { Box } from '@mui/system';
import  MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240

function Sidebar(props) {
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const isSidebarOpen = useSelector(state => state.sideBarToggle);

    const handleDrawerClose = () => {
        dispatch(sideBarToggleState());
      };

      const itemList = [
        {
          text: "мой профиль",
          link: "/profile"
        },
        {
          text: "расписание",
          link: "/shedule"
        },
        {
          text: "расписание преподователей",
          link: "/profShedule"
        },
        {
          text: "Персональный чат",
          link: "/individual_chat"
        },
        {
          text: "Admin: Добавить студента",
          link: "/admin_add_student"
        }
      ]

      const handleClickOnLink = (link) => {
          console.log(link);
          Navigate(link);
      }

  return (
    <>       
      <Drawer open={isSidebarOpen} onClose={handleDrawerClose}
         sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}>
          <Box 
          sx={{ 
            pl: 2,
            pb: 1,}}
          >

          </Box>
            <Grid container spacing={1}>
              <Grid item xs={9}>
              <Typography
                sx={{
                pt:1,
                pl:2,
                textAlign: "left",
                fontSize: 24,
                }}
               >User Nane</Typography>
                <Typography
                sx={{
                pb:3,
                pl:2,
                textAlign: "left",
                fontSize: 18,
                }}
                >студент</Typography>
              </Grid>
              <Grid item xs={3  }>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, display: 'block' }}
                onClick={handleDrawerClose}
                 >
                <MenuIcon />
              </IconButton>
              </Grid>
            </Grid>



    

        <List>
               {itemList.map((item, index) => {
                const { text, link } = item;
                    return (
                      <ListItem button key={index} onClick={()=>{handleClickOnLink(link)}}> 
                        <ListItemText primary={text} />
                      </ListItem>
                          )
                  })}


        </List>
      </Drawer>
    </>
  )
}

export default Sidebar