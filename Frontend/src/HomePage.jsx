import './homePage.css'
import VideoTeaser from './components/VideoTeaser'
import { useEffect, useState } from 'react';
import { useParams,useSearchParams } from 'react-router-dom';
function HomePage({ searchTerm }) {
    
    const [videos, setVideos] = useState(null);
    
    let [searchParams, setSearchParams] = useSearchParams();
    let q = searchParams.get('q');

    async function fetchVideos() {
        const response = await fetch("http://localhost:3000/videos?q=" + (q||""));
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
                ) : null
            }
        </section>
    )
}

export default HomePage
