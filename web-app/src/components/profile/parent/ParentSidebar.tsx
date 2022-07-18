import React, {useState} from 'react';
import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader,} from 'react-pro-sidebar';
import {HiOutlineMenu} from "react-icons/hi";
import Images from "../../../assets/images/Images";
import {useNavigate} from "react-router-dom";
import {FaTachometerAlt} from "react-icons/fa";
import {IoIosSchool} from "react-icons/io";
import {MdPersonAddAlt} from "react-icons/md";
import {BsCashCoin} from "react-icons/bs";
import {useMediaQuery} from 'react-responsive';

type ParentSidebarProps = {
    toggle: boolean,
    handleToggleSidebar: () => void
}

const ParentSidebar: React.FC<ParentSidebarProps> = (props: ParentSidebarProps) => {

    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const {toggle, handleToggleSidebar} = props;

    const handleCollapsed = () => {
        setCollapsed(!collapsed);
    }

    const isPc = useMediaQuery({minWidth: 991});
    const isTab = useMediaQuery({maxWidth: 991, minWidth: 768});
    const isMobile = useMediaQuery({maxWidth: 768});

    return (
        <ProSidebar
            collapsed={collapsed || isTab}
            toggled={toggle}
            breakPoint="md"
            style={{
                height: '90vh',
                boxShadow: "rgba(50, 50, 93, 0.1) 0px 50px 100px -20px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
            }}
            onToggle={handleToggleSidebar}
            className='SideBar'
        >
            {
                !isMobile && !isTab ? (<SidebarHeader>
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
                    <MenuItem icon={<IoIosSchool/>} onClick={() => navigate('/parent')}>
                        Upcoming Class
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<FaTachometerAlt/>} onClick={() => navigate('/parent/history')}>
                        Progress
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<BsCashCoin/>} onClick={() => navigate('/parent/payments')}>
                        UpComing Payment
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<MdPersonAddAlt/>} onClick={() => navigate('/parent/stuSignup')}>
                        SignUp Student
                    </MenuItem>
                </Menu>
            </SidebarContent>
            {!collapsed && isPc &&
            <SidebarFooter>
                <div style={{width: '100%', padding: "10px"}}>
                    <img src={Images.logo} style={{maxWidth: "200px"}} alt='logo'/>
                </div>
            </SidebarFooter>}
        </ProSidebar>
    );
};

export default ParentSidebar;