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

const AdminSidebar: React.FC = () => {

    const [toggled, setToggled] = useState(false);
    const [collapsed, setCollapsed] = useState(true);
    const navigate = useNavigate();
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
            style={{height: '90vh',boxShadow: "rgba(50, 50, 93, 0.1) 0px 50px 100px -20px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}
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
                    <MenuItem icon={<IoIosSchool/>} onClick={()=> navigate('/parent')}>
                        Upcoming Class
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<FaTachometerAlt/>} onClick={()=> navigate('/parent/history')}>
                        Progress
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<BsCashCoin/>} onClick={()=> navigate('/parent/payments')}>
                        UpComing Payment
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<MdPersonAddAlt/>} onClick={()=>navigate('/parent/stuSignup')}>
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

export default AdminSidebar;