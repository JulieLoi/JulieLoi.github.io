

import homeStyle from '../stylesheets/Home.module.css';

const Sidebar: React.FC = () => {

    return (
        <div className={homeStyle["sidebar__container"]}>
            <span className={homeStyle["sidebar__name"]}>Julie Loi</span>
            <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="My Portrait" className={homeStyle["sidebar__portrait"]} />
            <br />
            <span className={homeStyle["sidebar__text"]}>
            small description
            degree
            </span>
            <br />
            <hr />
            <span className={`${homeStyle["sidebar__text"]} ${homeStyle["sidebar__link"]}`} 
                onClick={() => window.open("https://www.linkedin.com/")}
            >
                View my LinkedIn Profile
            </span>
            <br />
            <span className={`${homeStyle["sidebar__text"]} ${homeStyle["sidebar__link"]}`} 
                onClick={() => window.open("https://github.com/JulieLoi")}
            >
                View my Github Profile
            </span>
        </div>
    );
};

export default Sidebar;
