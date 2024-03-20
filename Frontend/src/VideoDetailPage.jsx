import { useParams } from 'react-router-dom';
import './videoDetailPage.css'
import { useEffect,useState } from 'react'

function VideoDetailPage() {

  let { videoID } = useParams();
  const [video, setVideo] = useState(null);

  console.log(videoID);
  async function fetchVideo() {
    const response = await fetch("http://localhost:3000/videos/" + videoID);
    const video = await response.json();
    setVideo(video);
  }

  useEffect(() => {
    fetchVideo();
  }, []);

  return (
    <section id="videoDetailPage">
  <code>{JSON.stringify(video)}</code>
    </section>
  )
}

export default VideoDetailPage
