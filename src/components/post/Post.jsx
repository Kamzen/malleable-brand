import React from "react";

import image from '../../assets/image.jpg';

import './Post.css';

const Post = () => {

    return(

        <div className="post-layout">

            <div className="post-card">

                <div className="post-img bd">
                    <img src={image} alt="" style={{width:"100%"}} />
                </div>
                <div className="picture-cover">
                    <img src={image} alt="" height="50px" width="50px" className="org-image" style={{borderRadius : "50%"}}/>
                </div>
                <br />
                <span className="app-bolder-text">Heading...</span>
                <span className="app-grey-text-sm">09 Septempter 2021</span>
                <br />
                <span className="app-post-text">
                    jkfsd gkjdgfjkd kdsjnkfd kjgfkjfd kdjksg kjdskjg kjfdskjf kjsdkg kjsdjkgd jkd gfjkd kgdjk jkgfd
                </span>

                <table style={{width : "50%"}}>
                    <tr>
                        <td className="">
                            <i className="fa fa-check-square-o" style={{color:"green"}}></i>
                            <span className="app-grey-text-lg">&nbsp;&nbsp;Insightful</span>
                        </td>
                        <td className="" style={{paddingLeft : "5%"}}>
                            <i className="fa fa-mail-forward"></i>
                            <span className="app-grey-text-lg">&nbsp;&nbsp;Share</span>
                        </td>
                    </tr>
                </table>
            </div>

        </div>

    )

}

export default Post;