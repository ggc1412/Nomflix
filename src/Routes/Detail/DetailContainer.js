import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";
import { youtubeApi } from "../../youtube_api";
import { AllHtmlEntities } from "html-entities";

export default class extends React.Component {
  state = {
    result: null,
    credits: null,
    similar: null,
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
      similar: null,
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
    let similar = null;
    try {
      if (isMovie) {
        ({ data: result } = await movieApi.movieDetail(parsedId));
        ({ data: credits } = await movieApi.movieCredits(parsedId));
        ({ data: { results: similar } }= await movieApi.similar(parsedId));
        const title = `movie ${result.title? result.title : result.original_title}`;
        ({
          data: { items: youtube },
        } = await youtubeApi.search(title));
        youtube.forEach((item) => {
          item.snippet.title = AllHtmlEntities.decode(item.snippet.title);
        });
        console.log(similar);
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
        ({ data: credits } = await tvApi.showCredits(parsedId));
        const title = `${result.name? result.name : result.original_name}`;
        ({
          data: { items: youtube },
        } = await youtubeApi.search(title));
        youtube.forEach((item) => {
          item.snippet.title = AllHtmlEntities.decode(item.snippet.title);
        });
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      console.log(result);
      this.setState({ loading: false, result, credits, similar, youtube });
    }
  }

  render() {
    const { result, credits, similar, youtube, isMovie, error, loading } = this.state;
    return (
      <DetailPresenter
        result={result}
        credits={credits}
        similar={similar}
        youtube={youtube}
        isMovie={isMovie}
        error={error}
        loading={loading}
      />
    );
  }
}
