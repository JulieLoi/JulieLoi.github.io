import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/Home.page';
import ResumePage from './pages/Resume.page';

function App() {
    return (
        <>
            <Routes>
                <Route path="" element={<HomePage />}>Home Page (Portfolio)</Route>
                <Route path="/resume" element={<ResumePage />}>Resume Page</Route>
            </Routes>
        </>
    );
}

export default App;
