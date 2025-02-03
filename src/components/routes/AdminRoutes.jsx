import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import {
    Dashboard,
    Home,
    Profile,
    FormsBuilder
} from '../pages';


const AdminRoutes= ({formFields }) => {

        return (
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/form" element={<FormsBuilder formFields={formFields} />} />
                <Route path="/profile" element={<Profile />} />
                {/* <Route component={PageNotFound}/> */}
            </Routes>
        );
}

export default AdminRoutes;
