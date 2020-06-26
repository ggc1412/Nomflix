//import google from "googleapis";
const { google } = require("googleapis");

const service = google.youtube({
  version: "v3",
  auth: "키교체",
  // node 내에서만 실행시키면 실행이 된다.
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
