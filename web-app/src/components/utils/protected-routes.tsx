import {withAuthenticationRequired} from "@auth0/auth0-react";
import React, {ComponentType} from "react";
import Loader from "./Loader";

interface ProtectedRouteProps {
    component: ComponentType;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
                                                                  component,
                                                                  ...args
                                                              }) => {
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => <Loader/>,
    });

    return <Component {...args}/>;
};