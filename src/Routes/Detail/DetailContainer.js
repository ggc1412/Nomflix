import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";

export default class extends React.Component {
    state = {
        result: null,
        credits: null,
        error: null,
        loading: true
    };

    constructor(props){
        super(props);
        const{
            location: { pathname }
        } = props;
        this.state = {
            result: null,
            credits: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/")
        };
    }

    async componentDidMount() {
        const{
            match: {
                params: { id }
            },
            history: { push }
        } = this.props;
        const { isMovie } = this.state;
        const parsedId = parseInt(id);
        if(isNaN(parsedId)){
            return push("/");
        }
        let result = null;
        let credits = null;
        try {
            if(isMovie){
                ({data: result} = await movieApi.movieDetail(parsedId));
                ({data: credits} = await movieApi.movieCredits(parsedId));
            }else {
                ({data: result} = await tvApi.showDetail(parsedId));
            }
        } catch {
            this.setState({ error: "Can't find anything." });
        } finally {
            console.log(credits);
            this.setState({ loading: false, result, credits});
        }
    }

    render() {
        const { result, credits, error, loading } = this.state;
        return <DetailPresenter result={result} credits={credits} error={error} loading={loading} />
    }
}