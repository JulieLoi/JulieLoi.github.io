

import homeStyle from '../stylesheets/Home.module.css';

const Sidebar: React.FC = () => {
    return (
        <div className={homeStyle["sidebar-container"]}>
            left side content...
            <br />
            picture of me
            small description
            degree
            linkedin link
            github link
            etc...
            <br />
            use component here
        </div>
    );
};

export default Sidebar;
