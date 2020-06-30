import axios from "axios";

const api = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
});

api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["key"] = process.env.REACT_APP_YOUTUBE_APIKEY;
  config.params["part"] = "snippet";
  config.params["type"] = "video";
  config.params["maxResults"] = 10;
  config.params["regionCode"] = "KR";
  return config;
});

export const youtubeApi = {
  search: (term) =>
    api.get("search", {
      params: {
        q: term,
      },
    }),
};

