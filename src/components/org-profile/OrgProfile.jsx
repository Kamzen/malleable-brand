import React from 'react';


import './OrgProfile.css';

import image from '../../assets/image.jpg';

const OrgProfile = () => {

    return(

        <div className="org-profile">

            <div className="top-org-info bd">

                <div className="org-cover bd">
                    <img src={image} alt="" />
                </div>

                <div className="org-profile-pic">
                    <img src={image} alt="" />
                </div>

                <br /><br /><br />
                <div className="org-name bd">TEARS Foundation</div>
                <hr />

                <div className="org-links-bottom">

                    
                <div className="row">

                    <div className="col-md-6  left-links">

                        <div className="row">
                            <div className="col-md-20 tx bd "><span>Posts</span></div>
                            <div className="col-md-20 tx bd "><span>About</span></div>
                            <div className="col-md-20 tx bd "><span>Events</span></div>
                            <div className="col-md-20 tx bd "><span>Surveys</span></div>
                            <div className="col-md-20 tx bd "><span>Campaigns</span></div>
                        </div>

                    </div>
                    <div className="col-md-6  right-links">

                        <div className="row left-link">
                            <div className="col-md-3 tx bd "><span>Volunteer</span></div>
                            <div className="col-md-3 tx bd "><span>Donate</span></div>
                            <div className="col-md-3 tx bd "><span>Sign Pertitions</span></div>
                            <div className="col-md-3 tx bd "><span>Submit A Case</span></div>
                        </div>

                    </div>

                </div>

                </div>

            </div>

        </div>
    )

}

export default OrgProfile;