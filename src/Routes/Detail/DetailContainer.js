import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";
import { youtubeApi } from "../../youtube_api";

export default class extends React.Component {
  state = {
    result: null,
    credits: null,
    youtube: null,
    error: null,
    loading: true,
  };

  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      credits: null,
      youtube: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    let credits = null;
    let youtube = null;
    try {
      if (isMovie) {
        ({ data: result } = await movieApi.movieDetail(parsedId));
        ({ data: credits } = await movieApi.movieCredits(parsedId));
        const title = `영화 ${result.original_title}`;
        ({
          data: { items: youtube },
        } = await youtubeApi.search(title));
        // const data = await youtubeApi.search(title);
        // youtube = data.data.items;
        console.log(title);
        console.log(youtube);        
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
        ({ data: credits } = await tvApi.showCredits(parsedId));
        const title = `TV ${result.original_name}`;
        ({
          data: { items: youtube },
        } = await youtubeApi.search(title));
        console.log(title);
        console.log(youtube);
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result, credits, youtube });
    }
  }

  render() {
    const { result, credits, youtube, error, loading } = this.state;
    return (
      <DetailPresenter
        result={result}
        credits={credits}
        youtube={youtube}
        error={error}
        loading={loading}
      />
    );
  }
}
