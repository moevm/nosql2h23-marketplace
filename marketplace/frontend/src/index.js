import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './main/Main';
import Auth from './auth/Auth';
import Registration from './registration/Registration';
import GamePage from './games/GamePage';
import UserPage from './user_page/UserPage';
import routerLinks from './utils/router_links'
import CreateGame from './create_game/CreateGame';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path={routerLinks.auth} element={<Auth />} />
            <Route path={routerLinks.registration} element={<Registration />} />
            <Route path={routerLinks.main} element={<Main />} />
            <Route path={routerLinks.game_page} element={<GamePage />} />
            <Route path={routerLinks.user_page} element={<UserPage />} />
            <Route path={routerLinks.create_game} element={<CreateGame/>} />
        </Routes>
    </BrowserRouter>
);