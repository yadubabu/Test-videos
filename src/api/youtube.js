import axios from 'axios';


const KEY='AIzaSyC4kZSMO0ckl8264rDeqXrxfHW2f81gXt0';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});