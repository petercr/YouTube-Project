(function() {
    const baseURL = 'https://www.googleapis.com/youtube/v3';
    const apiKey = 'AIzaSyCqCuFDGmpWKfl-9sE9wbZFnpCn-jh8Mlc';
    const fccChannel = 'UC8butISFwT-Wl7EV0hUK0BQ';
    var callURL = `${baseURL}/activities?part=snippet,contentDetails&key=${apiKey}&channelId=${fccChannel}&maxResults=50`
    console.log(callURL);
    // const timChannel = 'UCUCXUCn0PEPrp7nAIFpFbOw';
    // const searchChannel = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=free+code+camp&type=video&videoCaption=closedCaption&key=AIzaSyCqCuFDGmpWKfl-9sE9wbZFnpCn-jh8Mlc&maxResults=50";

    function addChannels(data) {
        const title0 = data.items[0].snippet.title;
        const title1 = data.items[1].snippet.title;
        const title2 = data.items[2].snippet.title;
        console.log(data);
        console.log(title0);
        console.log(title1);
        console.log(title2);
    }   

    function getData() {
        fetch(callURL)
        .then(resp => resp.json())
        .then(addChannels)
        .catch(err => console.log("There was an error: ", err));
    };
    
    getData();
})();