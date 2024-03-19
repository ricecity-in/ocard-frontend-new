import React from 'react';
import { Navigate, Outlet } from 'react-router-dom'; // Corrected import statement
import { isLogin } from '../Auth';

const PrivateRoutes = () => {
    console.log(isLogin())
    if (isLogin()) {
        return <Outlet />;
    } else {
        return <Navigate to={"/login"} />;
    }
};

export default PrivateRoutes;
