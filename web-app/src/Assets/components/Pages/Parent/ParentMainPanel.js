import React from "react";
import {
    Routes,
    Route
} from "react-router-dom";
import OngoingClassContent from "../../Ongoing-Class-Container/OngoingClassContent";
import ParentPayment from "../../Payment-Container/ParentPayment";

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <ParentPayment />
    },
    {
        path: "/summary",
        main: () => <h2>Summary</h2>
    },
    {
        path: "/ongoingclasses",
        main: () => <OngoingClassContent />
    }
];

export const MainPanel = () => {
    return (
        <div className="Parent-main-panel">
            <Routes> {
                routes.map((route, index) => (
                    <Route key={index}
                        path={
                            route.path
                        }
                        caseSensitive={
                            route.exact
                        }
                        element={<route.main/>}/>
                ))
            } </Routes>
            {/* <Route exact path="/" component={ ParentPayment }/>
            <Route path="/summary" component={ <h2>Summary</h2> }/>
            <Route path="/ongoingclasses" component={ OngoingClassContent }/> */}
        </div>
    );
};

export default MainPanel;
