import {withAuthenticationRequired} from "@auth0/auth0-react";
import React, {ComponentType} from "react";

interface ProtectedRouteProps {
    component: ComponentType;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
                                                                  component,
                                                                  ...args
                                                              }) => {
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => <h1>Hello</h1>,
    });

    return <Component {...args}/>;
};