import React, {useState} from 'react';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import {FaGem, FaGithub, FaHeart, FaTachometerAlt} from "react-icons/fa";
import {HiOutlineMenu} from "react-icons/hi";
import Images from "../../../assets/images/Images";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const ParentSidebar: React.FC = () => {

    const [toggled, setToggled] = useState(false);
    const [collapsed, setCollapsed] = useState(true);
    const navigate = useNavigate()
    const handleToggleSidebar = () => {
        if (toggled === false) {
            setToggled(true);
        }
        setToggled(false);
    };

    const handleCollapsed = () => {
        setCollapsed(!collapsed);
    }

    return (
        <ProSidebar
            collapsed={collapsed}
            toggled={toggled}
            breakPoint="md"
            style={{height: '90vh'}}
            onToggle={handleToggleSidebar}
            className='SideBar'
        >
            {
                !toggled ? (<SidebarHeader>
                        <div
                            style={{
                                fontWeight: 'bold',
                                fontSize: 50,
                                marginLeft: 15
                            }}
                        >
                            <HiOutlineMenu onClick={handleCollapsed}/>
                        </div>
                    </SidebarHeader>) :
                    (<SidebarHeader></SidebarHeader>)
            }

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem icon={<FaTachometerAlt className='side-menu-icon'/>}>
                        Upcoming Class
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<FaTachometerAlt/>}>
                        On Summary
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<FaTachometerAlt/>} onClick={()=>navigate('/studentSignup')}>
                        SignUp Student
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<FaTachometerAlt/>}>
                        Dashboard
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<FaTachometerAlt/>}>
                        Dashboard
                    </MenuItem>
                </Menu>
            </SidebarContent>
            {!collapsed &&
                <SidebarFooter>
                    <div style={{width: '100%', padding: "10px"}}>
                        <img src={Images.logo} style={{maxWidth: "250px"}}/>
                    </div>
                </SidebarFooter>}
        </ProSidebar>
    );
};

export default ParentSidebar;