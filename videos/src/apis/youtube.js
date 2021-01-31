import axios from "axios";

const KEY = "AIzaSyAKgcF7VUhKRBvMPBUL_H97rKN1nHL1hTg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});