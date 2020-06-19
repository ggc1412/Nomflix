import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

// axios 0.19 버젼 이후로 create메서드 안에 params 적용 불가..
// 따로 설정해야 하는데, default는 왜 안되는지 모르겠다.
// api.defaults.params = {};
// api.defaults.params['api_key'] = "1966f6340925a6e4284eb2602d17c5fa";
// api.defaults.params['language'] = "en-US";

api.interceptors.request.use((config) => {
  config.params = config.params || {};
  // create-react로 만든 경우 dotenv 설치 없이 REACT_APP을 변수명 앞에 붙여 사용한다.
  // 설정 후 재부팅 필요
  // https://create-react-app.dev/docs/adding-custom-environment-variables/
  config.params["api_key"] = process.env.REACT_APP_APIKEY;
  config.params["language"] = "ko";
  return config;
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  movieCredits: (id) => api.get(`movie/${id}/credits`),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
        // movie api에서 지원하는 param
        // 한 번에 movie에 대한 다른 data(ex.예고편, 포스터)를 가져올 수 있다.
      },
    }),
  showCredits: (id) => api.get(`tv/${id}/credits`),  
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term),
        // search api에서 검색어를 query라는 param으로 갖는다.
      },
    }),
};

// API를 따로 만들어서 중복되는 부분은 그냥 가져다 쓸 수 있게 한다.
