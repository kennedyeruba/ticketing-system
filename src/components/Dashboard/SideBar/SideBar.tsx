import { useState } from 'react';
import { 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText, 
    Divider, 
    Box,
    Drawer
} from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const SideBar = () => {

    const [anchor, setAnchor] = useState(false)

    const toggleDrawer = (open: boolean) => { 
        setAnchor(open)
    }

    // const list = () => (
    //     <Box
    //       sx={{ width: 250 }}
    //       role="presentation"
    //       onClick={toggleDrawer(false)}
    //       onKeyDown={toggleDrawer(false)}
    //     >
    //       <List>
    //         <ListItem disablePadding>
    //             <ListItemButton>
    //                 <ListItemIcon>
    //                     <InboxIcon />
    //                 </ListItemIcon>
    //                 <ListItemText primary={'Assignees'} />
    //             </ListItemButton>
    //         </ListItem>
    //         <Divider />
    //         <ListItem disablePadding>
    //             <ListItemButton>
    //                 <ListItemIcon>
    //                     <MailIcon />
    //                 </ListItemIcon>
    //                 <ListItemText primary={'Tickets'} />
    //             </ListItemButton>
    //         </ListItem>
    //       </List>
    //     </Box>
    // )

    return (
        <div>
            <Drawer
            //   anchor={'sidebar'}
            //   open={open}
            //   onClose={toggleDrawer(false)}
            >
              {/* {list()} */}
            </Drawer>
        </div>
    )
}

export default SideBar