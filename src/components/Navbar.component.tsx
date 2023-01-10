import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PageEnum } from '../Enums';

import navbarStyle from "../stylesheets/Navbar.module.css";

interface INavBarProps {
    active: string
}

const Navbar: React.FC<INavBarProps> = ({ active }) => {

    // Page Navigation
    const navigate = useNavigate(); 

    return (
        <nav>
            <ul className={navbarStyle["nav-list"]}>
                <li className={`${navbarStyle["nav-text"]} ${active === PageEnum.Home ? navbarStyle["active"] : ""}`}
                    onClick={() => navigate("/")}
                >
                    <img src="images/home.png" alt="home icon" className={navbarStyle["nav-icon"]} />
                    Home
                </li>
                <li className={`${navbarStyle["nav-text"]} ${active === PageEnum.Resume ? navbarStyle["active"] : ""}`}
                    onClick={() => navigate("/resume")}
                >
                    <img src="images/resume.png" alt="resume icon" className={navbarStyle["nav-icon"]} /> 
                    Resume
                </li>
                <li className={navbarStyle["nav-text"]}
                    onClick={() => window.open("https://github.com/JulieLoi/julieloi.github.io") }
                >
                    <img src="images/github.png" alt="github icon" className={navbarStyle["nav-icon"]} /> 
                    Github
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
