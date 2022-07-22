import React, {useState} from 'react';
import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader,} from 'react-pro-sidebar';
import {HiOutlineMenu} from "react-icons/hi";
import Images from "../../../assets/images/Images";
import {useNavigate} from "react-router-dom";
import {FaSchool, FaUsers} from "react-icons/fa";
import {SiCoursera, SiGoogleclassroom} from "react-icons/si";
import {BiMessageRoundedError} from "react-icons/bi";
import {useMediaQuery} from 'react-responsive';
import {BsCashCoin} from "react-icons/bs";
import {GiCash} from "react-icons/gi";

type AdminSidebarProps = {
    toggle: boolean,
    handleToggleSidebar: () => void
}

const AdminSidebar: React.FC<AdminSidebarProps> = (props: AdminSidebarProps) => {

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
                    <MenuItem icon={<FaUsers/>} onClick={() => navigate('/admin')}>
                        Manage Users
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<SiCoursera/>} onClick={() => navigate('/admin/managecourses')}>
                        Manage Courses
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<BsCashCoin/>} onClick={() => navigate('/admin/tutorpayment')}>
                        Tutor's Payments
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<GiCash/>} onClick={() => navigate('/admin/institutepayment')}>
                        Institute's Payments
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<SiGoogleclassroom/>} onClick={() => navigate('/admin/verifytutors')}>
                        Verify Tutor
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<FaSchool/>} onClick={() => navigate('/admin/verifyinstitutes')}>
                        Verify Institute
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <MenuItem icon={<BiMessageRoundedError/>} onClick={() => navigate('/admin/complainthandling')}>
                        Complaint Handle
                    </MenuItem>
                </Menu>
            </SidebarContent>
        </ProSidebar>
    );
};

export default AdminSidebar;