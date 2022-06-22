import React, { useState } from "react";
import {
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const pages = ["About-Us", "Pricing", "Download", "ContactUs"];
const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const switchScreen = (screen: string) => {
        let screenComponent = document.getElementById(screen);
        // @ts-ignore
        screenComponent.scrollIntoView({behavior:"smooth", });
    }

    return (
        <React.Fragment>
            <Drawer
                anchor="left"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    {pages.map((page, index) => (
                        <ListItemButton key={index}>
                            <ListItemIcon>
                                <ListItemText onClick={()=> switchScreen(page)}>{page}</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
            <IconButton
                sx={{ color: "white", marginLeft: "auto" }}
                onClick={() => setOpenDrawer(!openDrawer)}
            >
                <MenuIcon style={{color:"white"}} />
            </IconButton>
        </React.Fragment>
    );
};

export default DrawerComp;