(function() {
    const baseURL = 'https://www.googleapis.com/youtube/v3';
    const apiKey = 'AIzaSyCqCuFDGmpWKfl-9sE9wbZFnpCn-jh8Mlc';
    const fccChannel = 'UC8butISFwT-Wl7EV0hUK0BQ';
    var callURL = `${baseURL}/activities?part=snippet,contentDetails&key=${apiKey}&channelId=${fccChannel}&maxResults=5`
    var navSearch = document.getElementById('search');
    const channels = document.getElementById('channels');
    console.log(callURL);
    // const timChannel = 'UCUCXUCn0PEPrp7nAIFpFbOw';
    // const searchChannel = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=free+code+camp&type=video&videoCaption=closedCaption&key=AIzaSyCqCuFDGmpWKfl-9sE9wbZFnpCn-jh8Mlc&maxResults=50";

    function addChannels(data) {
        const thumbnail = data.items[0].snippet.thumbnails.high.url;
        const videoTitle = data.items[0].snippet.title;
        const channelTitle = data.items[0].snippet.channelTitle;
        const videoDesc = data.items[0].snippet.description;
        const publishDate = data.items[0].snippet.publishedAt;
        const videoID = data.items[0].contentDetails.upload.videoId;
        const watchURL = 'https://www.youtube.com/watch?v=';
        let content = '';
        console.log(data);
        content += `
            <div id="${videoID}">
            <a href="${watchURL + videoID}" target="_blank"><img src="${thumbnail}" /></a>
            <p>${videoTitle}</p>
            <p>${channelTitle}</p>
            <p>${videoDesc}</p>
            <p>Published on: ${publishDate}</p>
            <p>URL: ${watchURL + videoID}</p>
            </div>
        `;

        channels.innerHTML = content;
    }   

    function getData() {
        fetch(callURL)
        .then(resp => resp.json())
        .then(addChannels)
        .catch(err => console.log("There was an error: ", err));
    };
    
    getData();
})();