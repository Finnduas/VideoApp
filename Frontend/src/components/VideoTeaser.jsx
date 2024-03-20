import './VideoTeaser.scss'
import { Link } from "react-router-dom";

function VideoTeaser({title, id, teaser}) {

  return (
    
    <figure id="videoTeaser" >
        <Link to={"/videos/" + id}>
        <img src={teaser} alt={title} />
        <figcaption>
            {title}
        </figcaption>
        </Link>
    </figure>
    
  )
}

export default VideoTeaser
