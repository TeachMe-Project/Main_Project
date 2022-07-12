import React, {useState} from 'react';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import {HiOutlineMenu} from "react-icons/hi";
import Images from "../../../assets/images/Images";
import {useNavigate} from "react-router-dom";
import {FaTachometerAlt} from "react-icons/fa";
import {IoIosSchool} from "react-icons/io";
import {MdPersonAddAlt} from "react-icons/md";
import {BsCashCoin} from "react-icons/bs";

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
                    <MenuItem icon={<IoIosSchool/>}>
                        Upcoming Class
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<FaTachometerAlt/>}>
                        Progress
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<BsCashCoin/>}>
                        UpComing Payment
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<MdPersonAddAlt/>} onClick={()=>navigate('/studentSignup')}>
                        SignUp Student
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