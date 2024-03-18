const { v4: uuidv4 } = require('uuid');
const express = require('express');
const app = express();
const videos = [
    {
        thumbnailURL: "https://images.pexels.com/photos/20623990/pexels-photo-20623990/free-photo-of-blaumeise-vertraumt.jpeg",
        title: "die Blaumeise",
        videoURL: "https://vod-progressive.akamaized.net/exp=1710837945~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4467%2F14%2F372335193%2F1547101020.mp4~hmac=81e082153759b3581e27ed0d08cd87913a5a31069ace7b38ba01048b0e90f21e/vimeo-prod-skyfire-std-us/01/4467/14/372335193/1547101020.mp4?download=1&filename=video+%282160p%29.mp4",
        id: uuidv4(),
    },

    {
        thumbnailURL: "https://images.pexels.com/photos/34299/herbs-flavoring-seasoning-cooking.jpg",
        title: "herbs and spices",
        videoURL: "https://vod-progressive.akamaized.net/exp=1710801777~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4363%2F14%2F371817283%2F1544168334.mp4~hmac=c58dd68291696e7848bc36defbdecbbdb5f6ad9933fe18d460e060530afd6ab1/vimeo-prod-skyfire-std-us/01/4363/14/371817283/1544168334.mp4?download=1&filename=video+%282160p%29.mp4",
        id: uuidv4(),
    },
    {
        thumbnailURL: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg",
        title: "some random scientist",
        videoURL: "https://vod-progressive.akamaized.net/exp=1710781187~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1217%2F16%2F406087408%2F1739359232.mp4~hmac=0039c66ba7b94d00802cbdec3aad82aca329ef8ca434ad6ed22ca1dfe5536591/vimeo-prod-skyfire-std-us/01/1217/16/406087408/1739359232.mp4?download=1&filename=production_id%3A4114797+%282160p%29.mp4",
        id: uuidv4(),
    }


];

app.get('/videos', function (req, res) {
    const videosWithoutVideoURL = videos.map((item) => {
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