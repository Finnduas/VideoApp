import './homePage.scss'
import VideoTeaser from './components/VideoTeaser'
import { useEffect, useState } from 'react';
import { useParams,useSearchParams } from 'react-router-dom';
function HomePage({ searchTerm }) {
    const backend = "http://localhost:3000";
    const [videos, setVideos] = useState(null);
    
    let [searchParams, setSearchParams] = useSearchParams();
    let q = searchParams.get('q');

    async function fetchVideos() {
        const response = await fetch(backend + "/videos?q=" + (q||""));
        const videos = await response.json();
        setVideos(videos);
    }

    useEffect(() => {
        fetchVideos();
    }, []);

    useEffect(() => {
        console.log(q)
        fetchVideos();
    },[q]);

    return (
        <section id="homePage">
            {
                videos ? (
                    videos.map((video) => {
                        return <VideoTeaser id={video.id} title={video.title} teaser={video.thumbnailURL} key={video.id} />
                    })
                ) : <p>loading...</p>
            }
        </section>
    )
}

export default HomePage
