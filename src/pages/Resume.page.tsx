import * as React from 'react';
import NavBar from '../components/Navbar.component';
import { PageEnum } from '../Enums';



const ResumePage: React.FC = () => {
    return (
        <>
            <NavBar active={PageEnum.Resume} />
            <div>
                RESUME
            </div>
        </>
    );
};

export default ResumePage;
