import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID _74S_xJvECQ2uJHAX3SmpqJSSnNB1_xMU0nLKXbyJqw",
  },
});
