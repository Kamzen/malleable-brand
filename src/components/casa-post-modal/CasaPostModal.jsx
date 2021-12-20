import React from "react";

import './CasaPostModal.css';

const CasaPostModal = () => {

    return(
        <div className="casa-post-modal bd bg">

            <div className="post-modal-close bd">x</div>

            <form className="post-form">

                <select name="post_type">
                    <option>News Feed Post</option>
                    <option>Survey Post</option>
                    <option>Pertition</option>
                    <option>Event</option>
                </select>
                <br /><br />
                <input type={'text'} placeholder="Post Title" /><br /><br />
                <textarea placeholder="Post Message..." name="post_message" ></textarea>
                <input type={'file'} placeholder="Upload Post Image" />

            </form>

        </div>
    )

}

export default CasaPostModal