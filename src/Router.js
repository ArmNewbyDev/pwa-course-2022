import App from './App.js';
import Profile from './Profile.js';
import MainLobby from './MainLobby.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// index.js --> Router.js --> App.js

function Router(){
    return(<BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/mainlobby" element={<MainLobby/>} />
        </Routes>
    </BrowserRouter>
    )
}

export default Router;