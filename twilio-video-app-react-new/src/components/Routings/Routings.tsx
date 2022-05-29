import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import Twilio from "../Twilio/Twilio";

const routings = [
    {
        path: "/",
        exact: true,
        main: () => <div> hi i am home page</div>,
    },
    {
        path: "/twilio",
        exact: true,
        main: () => <Twilio />,
    }
];

export default function Routings() {
    return (
        <div className="MainPanel">
            <Switch>
                {routings.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        caseSensitive={route.exact}
                        element={<route.main />}
                    />
                ))}
            </Switch>
        </div>
    );
}

