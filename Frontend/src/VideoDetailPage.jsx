import { useParams } from 'react-router-dom';
import './videoDetailPage.scss'
import { useEffect, useState } from 'react'

function VideoDetailPage() {

  const backend = "http://localhost:3000";
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
        <figure>
          <video controls autoPlay poster={video.thumbnailURL}>
            <source
              src={video.videoURL}
              type="video/mp4"
            />
            <p>Your browser doesn't support HTML5 video.</p>
          </video>
          <figcaption>{video.title}</figcaption>
        </figure>
        :
        <p>loading...</p>
      }
      <form onSubmit={(e) => { e.preventDefault() }}>
        <p>Kommentare</p>
        <textarea placeholder='Kommentar hinzufügen:' required></textarea>
        <input required type="text" placeholder='Name:' />
      </form>


      <ul>
        <li>
          Was zur Hölle habe ich gerade gesehen? Das war wohl das lächerlichste Video aller Zeiten. Eure Versuche, witzig zu sein,
          sind kläglich gescheitert. Ich frage mich ernsthaft, ob jemand dieses erbärmliche Zeug tatsächlich mag.
          Absolute Zeitverschwendung, ich bereue es, auch nur angeklickt zu haben.
          <span>- Joe</span>
        </li>
        <li>
          Langweilig! Ich habe besseres gesehen. Nächstes Mal bitte etwas Interessantes hochladen.
          <span>- Tim</span>
        </li>
        <li>
          Danke für dieses großartige Video! Es hat meinen Tag aufgehellt und mich zum Lächeln gebracht. Weiter so mein Sohn!
          <span>- Mom</span>
        </li>
        <li>
          Wer hat diesen Mist genehmigt? Verschwendete Lebenszeit. Schämt euch, dass ihr sowas hochladet.
          <span>- XxLUISxX</span>
        </li>
        <li>
          Ich habe mir noch nie so die Augen uaskratzen wollen!!!!
          #Trash #Lplusratio #udumb
          <span>- SkullCrusher07</span>
        </li>
        <li>
        Dieses Video ist absoluter Müll. Ich habe schon besseres auf meinem Schuh gefunden. Unsubscribe!
                  <span>- John</span>
        </li>
        <li>
        SIUUUUUUUUUUUUUU!
          <span>- Ronaldo</span>
        </li>
      </ul>

    </section>




  )
}

export default VideoDetailPage
