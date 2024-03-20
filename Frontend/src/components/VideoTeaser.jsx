import './VideoTeaser.scss'
import { Link } from "react-router-dom";

function VideoTeaser() {

  return (
    
    <figure id="videoTeaser">
        <Link to="/videos/id">
        <img src="https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg" alt="" />
        <figcaption>
            lorem ipsum 
        </figcaption>
        </Link>
    </figure>
    
  )
}

export default VideoTeaser
