import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import ProfileNavBar from "../navBar/profileNavBar";
import {useMediaQuery} from "react-responsive";

const ViewInstituteProfile = () => {
    const [toggled, setToggled] = useState(false);
    const isMobile = useMediaQuery({maxWidth: 768});

    const handleToggleSidebar = () => {
        if (!toggled) {
            setToggled(true);
            return toggled;
        }
        setToggled(false);
    };

    return (
        <Container fluid={true} className='p-0 m-0 w-100'>
            <ProfileNavBar isMobile={isMobile} handleToggleSidebar={handleToggleSidebar}/>
        </Container>
    );
};

export default ViewInstituteProfile;