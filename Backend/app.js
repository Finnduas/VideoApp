const { v4: uuidv4 } = require('uuid');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const backendURL = "http://localhost:3000";
const videos = [
    {
        thumbnailURL: backendURL + "/assets/blaumeise.jpeg",
        title: "die Blaumeise",
        videoURL: backendURL + "/assets/1.mp4",
        id: uuidv4(),
    },

    {
        thumbnailURL: backendURL + "/assets/herbs.jpg",
        title: "herbs and spices",
        videoURL: backendURL + "/assets/2.mp4",
        id: uuidv4(),
    },
    {
        thumbnailURL: backendURL + "/assets/random.jpeg",
        title: "some random scientist",
        videoURL: backendURL + "/assets/3.mp4",
        id: uuidv4(),
    }


];

app.use('/assets/', express.static('assets'))

app.get('/videos', function (req, res) {
    const query = req.query.q;
    let filteredVideos = videos;
    if(query){
        filteredVideos = videos.filter((item) => {
            return item.title.toLowerCase().includes(query.toLowerCase()); 
        });
    }
    
    const videosWithoutVideoURL = filteredVideos.map((item) => {
        return {
            thumbnailURL: item.thumbnailURL,
            title: item.title,
            id: item.id,
        };
    });

    res.json(
        videosWithoutVideoURL
    );
})

app.get('/videos/:id', function (req, res) {

    const videoID = req.params.id;
    const video = videos.filter((item) => {
        return item.id === videoID;
    })[0];

    if (video) {
        res.json(video);
    } else {
        res.status(404);
    }
})


app.listen(3000);