import React from "react";



import './SideNavigation.css';


const SideNavigation = () => {


    return(

        <div className="side-navigation">

            <ul className="nav-links bd">
                <li className="li">Home</li>
                <li className="li">Organizations</li>
                <li className="li" to={'/help'}>Find Help</li>
                <li  className="li">Get Involved</li>
                <li className="li">Resources</li>
            </ul>

        </div>

    )

}

export default SideNavigation;