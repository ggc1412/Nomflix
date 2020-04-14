import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../api";

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null
  };

  async componentDidMount() {
    try {
      const{
        data: { result: topRated }
      } = await tvApi.topRated();
      const{
        data: { result: popular }
      } = await tvApi.popular();
      const{
        data: { result: airingTday }
      } = await tvApi.airingToday();
      this.setState({ topRated, popular, airingTday });
    } catch {
      this.setState({
        error: "Can't find TV information."
      });
    }finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { topRated, popular, airingToday, loading, error } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}