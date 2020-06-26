//import google from "googleapis";
const { google } = require("googleapis");

const service = google.youtube({
  version: "v3",
  auth: "AIzaSyDevD4BktAyebPbz0w953v7z1P94tsZsrc",
});

const params = {
  part: "snippet",
  q: "scoob",
  type: "video",
};

const youtubeApi = {
  search: () => service.search.list(params),
};

const test = async () => {
  const result = await youtubeApi.search();
  console.log(result);
};

test();
