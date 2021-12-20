import React from "react";



// import Post from "../../components/Post/Post";
import TopNavigation from '../../components/top-navigation/TopNavigation';
import Post from '../../components/post/Post';

import './Explore.css';
// import SideNavigation from "../../components/side-navigation/SideNavigation";
// import CasaPostModal from '../../components/casa-post-modal/CasaPostModal';
// import OrgProfile from '../../components/org-profile/OrgProfile';




const Explore = (props) => {

    console.log(props.link);
        return(
            <div>
    
                {/* Top Div For Top Navigation */}
                <div className="top-nav bd">
                    <TopNavigation />
                </div>
    
                <br />
                <br />
                <br />
                <div className="row bg">
                    
                    {/* Side Navigation Div */}
                    <div className="col-lg-3">
                        <div className="side-nav bd ">

                            {/* <SideNavigation /> */}

                        </div>
                    </div>
                    {/* Middle Div For Posts */}
                    <div className="col-lg-6 move-middle-column bd bg">
                        {/* herfivugwervgfoq erwkg */}

                        <Post /><Post /><Post /><Post /><Post /><Post />
                        {/* <CasaPostModal /> */}
                        {/* <OrgProfile /> */}
    
                    {
                    //  (props.link === "home")?<Post /> : 
                    //  (props.link === "org")? <p>Organization Rendered Here</p> : 
                    //  (props.link === "findhelp") ? <p>Find Help</p> :
                    //  (props.link === "involved") ? <p>Involved Here</p> : 
                    //  (props.link === "resources") ? "Resoruces Here" : 
                    //  <p>Problem withe rendering components</p>
                    }
    
                    </div>
    
                    {/* Right Div For Quick Access Things */}
                    <div className="col-lg-3-right">
                        <div className="right-nav bd"></div>
                    </div>
                </div>
            </div>
        )

}

export default Explore;