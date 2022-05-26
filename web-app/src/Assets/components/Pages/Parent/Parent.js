import React, {Component} from 'react';
import {Link} from "react-router-dom";
import UserProfileNavbar from '../../Navbars/UserProfileNavbar';
import OngoingClassContent from '../../Ongoing-Class-Container/OngoingClassContent';
import ParentPayment from '../../Payment-Container/ParentPayment.js';
import TabContentItem from '../../Tab-Content/TabContentItem.js';
import './ParentMainPanel.js';

class Parent extends Component {
    render() {
        return (
            <div className="Parent">
                <div className="Parent-header">
                    <h1>Parent</h1>
                </div>
                {/* <UserProfileNavbar></UserProfileNavbar> */}
                <div className="Parent-tab-content">
                    {/* <Link to='/'> */}
                    <TabContentItem>
                        Payment
                    </TabContentItem>
                    {/* </Link> */}
                    <TabContentItem>
                        Summary
                    </TabContentItem>
                    <TabContentItem>
                        Ongoing Classes
                    </TabContentItem>
                </div>
                {/* <ParentPayment></ParentPayment> */}
                <OngoingClassContent></OngoingClassContent> 
                </div>
        );
    }
}

export default Parent;
