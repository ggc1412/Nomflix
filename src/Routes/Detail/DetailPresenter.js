import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import { Helmet } from "react-helmet";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
  display: flex;
  justify-content: center;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 300px;
  height: 400px;
`;

const CoverImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 25px;
`;

const Production = styled.div`
  font-size: 0.9rem;
  margin: 5px 0;
`;

const Title = styled.h3`
  font-size: 3rem;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span`
 font-size: 1rem;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 1.15rem;
  opacity: 0.7;
  line-height: 1.5;
  width: 100%;
`;

const Videos = styled.div`
  font-size: 1rem;
  margin-top: 10px;
  height: 150px;
  overflow:auto;
`;

const VideoWrapper = styled.div`
  margin-top: 8px;
`;
const Video = styled.a``;
const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
)

const DetailPresenter = ({ result, loading, error }) =>(
  loading ? ( 
    <>
    <Helmet><title>Loading | Nomflix</title></Helmet>
    <Loader />
    </>
  ) : (
    <>
    <Helmet><title>{result.original_title?result.original_title:result.original_name} | Nomflix</title></Helmet>
    <Container>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover>
          <CoverImg 
                      src={
                        result.poster_path
                          ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                          : require("../../assets/noPosterSmall.png")
                      }
          />
        </Cover>
        <Data>
          <Production>{result.production_companies && result.production_companies.map((com, index) => 
          index === result.production_companies.length -1 ?
          com.name : `${com.name} • `
          )}
          </Production>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]} min
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          <Videos>{result.videos.results && result.videos.results.map(video =>
            <VideoWrapper key={video.id}> 
              <Video href={`https://www.youtube.com/watch?v=FCLNuqMMjAs/${video.key}`} target='_blank'>
                <Emoji label="video" symbol="🎬"/> {video.name}
              </Video>
            </VideoWrapper>)}
          </Videos>
        </Data>
      </Content>
    </Container>
    </>
  )
);

DetailPresenter.propTypes = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default DetailPresenter;