const Record = require('./ConnectMongoDB');
const axios = require('axios');

const text = 'sao';
const API = `https://kitsu.io/api/edge/anime?filter[text]=${text}`;

var Title;
var Year;
var Rank;

axios.get(API).then((response) => {
    Title = response.data.data[0].attributes.canonicalTitle;
    console.log(response.data.data[0].attributes.canonicalTitle);
    Year = response.data.data[0].attributes.startDate;
    console.log(response.data.data[0].attributes.startDate);
    Rank = response.data.data[0].attributes.popularityRank;
    console.log(response.data.data[0].attributes.popularityRank);
    Youtube = response.data.data[0].attributes.youtubeVideoId;

    const YtbLink = `https://www.youtube.com/watch?v=${Youtube}`;

    filmValue = Record ({
        Title:Title,
        Year:Year,
        PopularityRank:Rank,
        YtbLink:YtbLink,
    });
    
    filmValue
    .save()
    .then(result=>{
        console.log("Success"+result);
    })
    .catch(error=>{
        console.log("Error"+error);
    });
});