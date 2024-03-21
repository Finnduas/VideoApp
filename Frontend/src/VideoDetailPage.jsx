import { useParams } from 'react-router-dom';
import './videoDetailPage.css'
import { useEffect, useState } from 'react'

function VideoDetailPage() {

  const backend = "https://videoapp-ypep.onrender.com";
  let { videoID } = useParams();
  const [video, setVideo] = useState(null);

  console.log(videoID);
  async function fetchVideo() {
    const response = await fetch(backend + "/videos/" + videoID);
    const video = await response.json();
    setVideo(video);
  }

  useEffect(() => {
    fetchVideo();
  }, []);


  return (

    <section id="videoDetailPage">
      {video ?
        <>
          <video class="video" controls autoPlay poster={video.thumbnailURL}>
            <source
              src={video.videoURL}
              type="video/mp4"
            />
            <p>Your browser doesn't support HTML5 video.</p>
          </video>
          <p>{video.title}</p>
        </>
        :
        <p>loading...</p>
      }
    </section>
  )
}

export default VideoDetailPage
