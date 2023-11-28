import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './main/Main';
import Auth from './auth/Auth';
import Registration from './registration/Registration';
import routerLinks from './utils/router_links'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path={routerLinks.auth} element={<Auth />} />
            <Route path={routerLinks.registration} element={<Registration />} />
            <Route path={routerLinks.main} element={<Main />} />
        </Routes>
    </BrowserRouter>
);