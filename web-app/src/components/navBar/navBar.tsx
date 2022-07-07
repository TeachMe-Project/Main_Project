import React, {useState} from "react";
import {
    AppBar,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import DrawerComp from "./Drawer";
import {Button} from "react-bootstrap";
import {BiBookReader} from "react-icons/bi";
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";


const NavBar = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const {loginWithRedirect, logout, isAuthenticated, getAccessTokenSilently, user} = useAuth0();
    const navigate = useNavigate();

    const switchScreen = (screen: string) => {
        let screenComponent = document.getElementById(screen);
        // @ts-ignore
        screenComponent.scrollIntoView({behavior: "smooth",});
    }


    const loginButtonRender = () => {
        return (
            <>
                <Button style={{
                    marginLeft: "auto",
                    borderRadius: "20px",
                    padding: " 10px 30px 10px 30px",
                    fontWeight: "700"
                }} variant="secondary"
                        onClick={loginWithRedirect}>
                    Login
                </Button>
                <Button style={{
                    marginLeft: "20px",
                    borderRadius: "20px",
                    padding: " 10px 30px 10px 30px",
                    fontWeight: "700"
                }} variant="secondary"
                onClick={()=> navigate('/signup')}>
                    SignUp
                </Button>
            </>
        )
    }

    const logoutRender = () => {
        // @ts-ignore
        return (<Button onClick={logout} style={{
                marginLeft: "auto",
                borderRadius: "20px",
                padding: " 10px 30px 10px 30px",
                fontWeight: "700"
            }} variant="secondary"
            >
                Logout
            </Button>
        )
    }

    // const navigate = useNavigate();
    // const navigateToAdmin = () => {
    //     navigate('/admin');
    // };
    

    return (
        <React.Fragment>
            <AppBar sx={{
                color: "#363636",
                background: "none",
                paddingTop: "10px",
                paddingBottom: "10px",
                position: "relative"
            }}>
                <Toolbar>
                    <BiBookReader style={{transform: "scale(3)", marginRight: "20px", marginBottom: "10px"}}/>
                    {/*<AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} />*/}
                    {isMatch ? (
                        <>
                            <Typography sx={{fontSize: "2rem", paddingLeft: "10%"}}>
                                Teach-Me
                            </Typography>
                            <DrawerComp/>
                        </>
                    ) : (
                        <>
                            <Tabs
                                sx={{marginLeft: "20px"}}
                                indicatorColor="primary"
                                textColor="inherit"
                                value={value}
                                onChange={(e, value) => setValue(value)}

                            >
                                <Tab label="About Us" onClick={() => switchScreen("About-Us")}
                                     style={{color: "#363636", fontSize: "16px", fontWeight: "600"}}/>
                                <Tab label="Pricing" onClick={() => switchScreen("Pricing")}
                                     style={{color: "#363636", fontSize: "16px", fontWeight: "600"}}/>
                                <Tab label="Download" style={{color: "#363636", fontSize: "16px", fontWeight: "600"}}/>
                                <Tab label="Contact" onClick={() => switchScreen("ContactUs")}
                                     style={{color: "#363636", fontSize: "16px", fontWeight: "600"}}/>
                            </Tabs>

                            {isAuthenticated ? logoutRender() : loginButtonRender()}
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default NavBar;