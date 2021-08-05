
import React, { useContext } from "react";
import classes from "./playVideo.css";
import {Context} from "../../context/Context";
import { useHistory } from "react-router-dom";


export default function PlayVideo(props){
    const {goToPreviousPage} = useContext(Context);
    const history = useHistory();
    return (
        <div className="video-cntr">
          <video width="100%" height="760" controls>
    <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
            type="video/webm" />
    <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            type="video/mp4" />
    Sorry, your browser doesn't support embedded videos.
</video>
<div className="cancel-btn" onClick={()=>history.goBack()}> 
    <button>X</button>
</div>
</div>
    )

}