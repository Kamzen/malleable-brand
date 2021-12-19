
import React from "react";

import image from '../../assets/image.jpg';

import './TopNavigation.css';

const TopNavigation = () => {

    return(
        <div className="top-navigation">
            
            <div className="row">

                <div className="col-lg-8 bd ">

                    <input type="text" placeholder="Search Anything..." />

                </div>
                <div className="col-lg-4 bd ">

                    <div className="row">

                        <div className="col-md-3 bd h nav-links">

                            <button className="nav-btn">Create Post</button>

                        </div>
                        <div className="col-md-3 bd">
                            <button className="nav-btn">Survey</button>
                        </div>
                        <div className="col-md-3 bd"><i className="fa fa-bell-o nav-notif-icon"></i></div>
                        <div className="col-md-3 bd">
                            <img className="nav-img" alt="" src={image} />
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )

}

export default TopNavigation;