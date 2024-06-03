document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.getElementById('video-grid');

    const videos = [
        {
            "thumbnail": "./assets/thumbnail1.jpg",
            "title": "Video Title 1",
            "channel": "Channel Name 1",
            "views": "1M views",
            "time_ago": "1 day ago"
        },
        {
            "thumbnail": "./assets/thumbnail2.jpg",
            "title": "Video Title 2",
            "channel": "Channel Name 2",
            "views": "500K views",
            "time_ago": "3 days ago"
        },
        {
            "thumbnail": "./assets/thumbnail3.png",
            "title": "Video Title 3",
            "channel": "Channel Name 3",
            "views": "750K views",
            "time_ago": "5 days ago"
        },
        {
            "thumbnail": "./assets/thumbnail1.jpg",
            "title": "Video Title 4",
            "channel": "Channel Name 4",
            "views": "2M views",
            "time_ago": "1 week ago"
        },
        {
            "thumbnail": "./assets/thumbnail2.jpg",
            "title": "Video Title 5",
            "channel": "Channel Name 5",
            "views": "300K views",
            "time_ago": "2 weeks ago"
        },
        {
            "thumbnail": "./assets/thumbnail3.png",
            "title": "Video Title 6",
            "channel": "Channel Name 6",
            "views": "900K views",
            "time_ago": "3 weeks ago"
        },
        {
            "thumbnail": "./assets/thumbnail1.jpg",
            "title": "Video Title 7",
            "channel": "Channel Name 7",
            "views": "1.5M views",
            "time_ago": "1 month ago"
        },
        {
            "thumbnail": "./assets/thumbnail2.jpg",
            "title": "Video Title 8",
            "channel": "Channel Name 8",
            "views": "1.2M views",
            "time_ago": "2 months ago"
        },
        {
            "thumbnail": "./assets/thumbnail3.png",
            "title": "Video Title 9",
            "channel": "Channel Name 9",
            "views": "2.5M views",
            "time_ago": "3 months ago"
        },
        {
            "thumbnail": "./assets/thumbnail1.jpg",
            "title": "Video Title 10",
            "channel": "Channel Name 10",
            "views": "700K views",
            "time_ago": "4 months ago"
        },
        {
            "thumbnail": "./assets/thumbnail2.jpg",
            "title": "Video Title 11",
            "channel": "Channel Name 11",
            "views": "1.8M views",
            "time_ago": "5 months ago"
        },
        {
            "thumbnail": "./assets/thumbnail3.png",
            "title": "Video Title 12",
            "channel": "Channel Name 12",
            "views": "600K views",
            "time_ago": "6 months ago"
        }
    ];

    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.className = 'video';

        videoElement.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <div class="video-info">
                <h3>${video.title}</h3>
                <p>${video.channel}</p>
                <p>${video.views} • ${video.time_ago}</p>
            </div>
        `;

        videoGrid.appendChild(videoElement);
    });
});
