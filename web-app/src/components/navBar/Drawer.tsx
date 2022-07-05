import React, {useState} from "react";
import {
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
        screenComponent.scrollIntoView({behavior: "smooth",}, () => setOpenDrawer(false));
    }

    return (
        <React.Fragment>
            <List style={{width: "100vw", height: "fit-content", background: "red"}}>
                {pages.map((page, index) => (
                    <ListItemButton key={index} style={{background: "green"}}>
                        <ListItemIcon>
                            <ListItemText onClick={() => {
                                switchScreen(page)
                            }}>{page}</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                ))}
            </List>
            <IconButton
                sx={{color: "black", marginLeft: "auto"}}
                onClick={() => setOpenDrawer(false)}
            >
                <MenuIcon style={{color: "black"}}/>
            </IconButton>
        </React.Fragment>
    );
};

export default DrawerComp;