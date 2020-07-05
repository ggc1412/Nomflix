import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";
import { youtubeApi } from "../../youtube_api";
import { AllHtmlEntities } from "html-entities";

export default class extends React.Component {
  state = {
    result: null,
    cast: null,
    crew: null,
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
      cast: null,
      crew: null,
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
    let parsedCast = null;
    let parsedCrew = null;
    let youtube = null;
    let similar = null;
    try {
      if (isMovie) {
        ({ data: result } = await movieApi.movieDetail(parsedId));
        const {
          data: { cast, crew },
        } = await movieApi.movieCredits(parsedId);
        ({
          data: { results: similar },
        } = await movieApi.similar(parsedId));
        // const title = `movie ${
        //   result.title ? result.title : result.original_title
        // }`;
        // ({
        //   data: { items: youtube },
        // } = await youtubeApi.search(title));
        // youtube.forEach((item) => {
        //   item.snippet.title = AllHtmlEntities.decode(item.snippet.title);
        // });
        parsedCast = cast.filter((item, index) => index < 10);
        parsedCrew = crew.filter(
          (item, index) =>
            index < 30 &&
            (item.job === "Director" ||
              item.job === "Screenplay" ||
              item.job === "Story" ||
              item.job === "Producer" ||
              item.job === "Writer" ||
              item.department === "Writing")
        );
        console.log(result);
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
        const {
          data: { cast, crew },
        } = await tvApi.showCredits(parsedId);
        ({
          data: { results: similar },
        } = await tvApi.similar(parsedId));
        // const title = `${result.name ? result.name : result.original_name}`;
        // ({
        //   data: { items: youtube },
        // } = await youtubeApi.search(title));
        // youtube.forEach((item) => {
        //   item.snippet.title = AllHtmlEntities.decode(item.snippet.title);
        // });
        parsedCast = cast.filter((item, index) => index < 10);
        parsedCrew = crew.filter(
          (item, index) =>
            index < 30 &&
            (item.job === "Director" ||
              item.job === "Screenplay" ||
              item.job === "Story" ||
              item.job === "Producer" ||
              item.job === "Writer" ||
              item.department === "Writing")
        );
        console.log(result);
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({
        loading: false,
        result,
        cast: parsedCast,
        crew: parsedCrew,
        similar,
        youtube,
      });
    }
  }

  render() {
    const {
      result,
      cast,
      crew,
      similar,
      youtube,
      isMovie,
      error,
      loading,
    } = this.state;
    return (
      <DetailPresenter
        result={result}
        cast={cast}
        crew={crew}
        similar={similar}
        youtube={youtube}
        isMovie={isMovie}
        error={error}
        loading={loading}
      />
    );
  }
}
