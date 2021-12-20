
import React from "react";

import image from '../../assets/image.jpg';

import './TopNavigation.css';

const TopNavigation = () => {

    return(
        <div className="top-navigatin">
            
            <div className="row top-nav-middle">

                <div className="col-lg-8 bd">

                    <div className="row">

                    <div className="col-md-60"><input type="text" className="top-nav-search-input" placeholder="Search Anything..." /></div>
                    <div className="col-md-40 "><i className="fa fa-search top-nav-search-icon"></i></div>


                    </div>
                    
                </div>
                <div className="col-lg-4 bd">

                    <div className="row">

                        <div className="col-md-3 bd nav-links">

                            <button className="nav-btn">Create Post</button>

                        </div>
                        <div className="col-md-3 bd ">
                            <button className="nav-btn">Survey</button>
                        </div>
                        <div className="col-md-3 bd "><i className="fa fa-bell-o nav-notif-icon"></i></div>
                        <div className="col-md-3 bd ">
                            <img className="nav-img" alt="" src={image} />
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )

}

export default TopNavigation;