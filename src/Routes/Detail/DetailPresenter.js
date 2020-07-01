import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import { Helmet } from "react-helmet";

const Container = styled.div`
  width: 100%;
  position: relative;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
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
  margin-bottom: 10px;
`;

const Cover = styled.div`
  width: 300px;
  min-width: 300px;
  height: 400px;
`;

const CoverImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Data = styled.div`
  width: 70%;
  min-width: 600px;
  margin-left: 25px;
`;

const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  position: relative;
`;

const Title = styled.h1`
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

// Video style
const Videos = styled.div`
  font-size: 1rem;
  margin-top: 10px;
  height: 150px;
  overflow: auto;
`;

const VideoWrapper = styled.div`
  margin-top: 8px;
`;
const Video = styled.a``;

const ItemTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 30px;
`;

// Production Style
const ProductionContainer = styled.div`
  margin: 15px 0;
  padding: 20px 30px;
  width: 100%;
  min-width: 920px;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  font-size: 0.9rem;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
`;

const Production = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 6.5rem;
  & + & {
    margin-left: 20px;
  }
  color: rgb(0, 0, 0);
`;

const LogoWrapper = styled.div`
  width: 5rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImg = styled.img`
  width: 100%;
  max-height: 3.8rem;
`;

const ProductionName = styled.div`
  margin-top: 5px;
  width: 6.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;

  font-size: 1rem;
  font-weight: 500;

  &:hover {
    overflow: visible;
    white-space: normal;
    text-align: center;
  }
`;

const NoProduction = styled.div`
  font-size: 1.5rem;
`;

// Cast Style
const CastContainer = styled.div`
  margin: 15px 0;
  width: 100%;
  min-width: 920px;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
`;

const Cast = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px 10px 5px 5px;
  width: 8rem;
  min-width: 8rem;
  height: 16.3rem;
  margin: 0 0 10px 5px;
  color: rgb(0, 0, 0);

  & + & {
    margin-left: 10px;
  }
  &:hover{
    filter: brightness(0.5);
  }
`;

const ProfileWrapper = styled.div`
  height: 11rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(219, 219, 219);
  border-radius: 5px 5px 0 0;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px 5px 0 0;
`;

const CastName = styled.div`
  margin-top: 10px;
  width: 6.5rem;
  text-align: left;

  font-size: 1rem;
  font-weight: bold;

  &:hover {
    overflow: visible;
    white-space: normal;
  }
`;

const CharName = styled.div`
  margin-bottom: 10px;
  width: 6.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.85rem;

  &:hover {
    overflow: visible;
    white-space: normal;
  }
`;

// YOUTUBE Style
const YoutubeContainer = styled.div`
  margin: 15px 0;
  width: 100%;
  min-width: 920px;
  display: flex;
  align-items: flex-start;
  overflow-x: auto;
  overflow-y: hidden;
`;

const Youtube = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  min-width: 12.5rem;
  margin-bottom: 6px;
  color: rgb(255, 255, 255);
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.8);
  & + & {
    margin-left: 10px;
  }
  &:hover{
    filter: brightness(0.5);
  }
`;

const ThumnailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(219, 219, 219);
  border-radius: 8px 8px 0 0;
`;

const Thumnail = styled.img`
  width: 100%;
  border-radius: 4px 4px 0 0;
`;

const YoutubeTitle = styled.div`
  margin: 8px 6px;
  line-height: 1.2rem;
  height: 2.4rem;
  text-align: left;
  font-size: 0.9rem;
  font-weight: bold;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
`;

const YoutubeLink = styled.a`
  text-decoration: none;
`;

const YoutubeMore = styled.div`
  font-size: 1rem;
  font-weight: 600;
  padding: 15px;
  height: 10.5rem;
  border-radius: 4px;
  
  margin-left: 5px;
  &:hover{
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

// Similar Style
const SimilarContainer = styled.div`
  margin: 15px 0;
  width: 100%;
  min-width: 920px;
  display: flex;
  align-items: flex-start;
  overflow-x: auto;
  overflow-y: hidden;
`;

const Similar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  min-width: 14rem;
  margin-bottom: 6px;
  color: rgb(255, 255, 255);
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.8);
  & + & {
    margin-left: 10px;
  }
  &:hover{
    filter: brightness(0.5);
  }
`;

const SimilarBackdropWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(219, 219, 219);
  border-radius: 8px 8px 0 0;
`;

const SimilarBackdrop = styled.img`
  width: 100%;
  border-radius: 4px 4px 0 0;
`;

const SimilarTitle = styled.div`
  margin: 8px 6px;
  line-height: 1.2rem;
  height: 2.4rem;
  text-align: left;
  font-size: 0.9rem;
  font-weight: bold;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
`;

const SimilarItem = styled.div`
  margin-bottom: 10px;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.85rem;

  &:hover {
    overflow: visible;
    white-space: normal;
  }
`;

const SimilarOverview = styled.div`
  margin-bottom: 10px;
  line-height: 1.2rem;
  height: 3.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.85rem;

  &:after{
    content:'...';
  }
`;


const SimilarLink = styled.a`
  text-decoration: none;
`;


const Emoji = (props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

const DetailPresenter = ({ result, credits, similar, youtube, loading, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <>
      <Helmet>
        <title>
          {result.title
            ? result.title
            : result.original_title
            ? result.original_title
            : result.name
            ? result.name
            : result.original_name}{" "}
          | Nomflix
        </title>
      </Helmet>
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
            <Title>
              {result.title
                ? result.title
                : result.original_title
                ? result.original_title
                : result.name
                ? result.name
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
                {result.runtime ? result.runtime : result.episode_run_time[0]}{" "}
                min
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
            <Videos>
              {result.videos.results &&
                result.videos.results.map((video) => (
                  <VideoWrapper key={video.id}>
                    <Video
                      href={`https://www.youtube.com/watch?v=FCLNuqMMjAs/${video.key}`}
                      target="_blank"
                    >
                      <Emoji label="video" symbol="🎬" /> {video.name}
                    </Video>
                  </VideoWrapper>
                ))}
            </Videos>
          </Data>
        </Content>
        <DetailContent>
          <ItemTitle>프로덕션</ItemTitle>
          <ProductionContainer>
            {result.production_companies &&
            result.production_companies.length > 0 ? (
              result.production_companies.map((com, index) => (
                <Production key={com.id}>
                  <LogoWrapper>
                    <LogoImg
                      src={
                        com.logo_path
                          ? `https://image.tmdb.org/t/p/w300${com.logo_path}`
                          : require("../../assets/noProduction.jpg")
                      }
                    />
                  </LogoWrapper>
                  <ProductionName>{com.name}</ProductionName>
                </Production>
              ))
            ) : (
              <NoProduction>No Production Data</NoProduction>
            )}
          </ProductionContainer>
          <ItemTitle>주요 출연진</ItemTitle>
          <CastContainer>
            {credits.cast && credits.cast.length > 0 ? (
              credits.cast.map((char, index) => (
                <Cast key={char.credit_id}>
                  <ProfileWrapper>
                    <ProfileImg
                      src={
                        char.profile_path
                          ? `https://image.tmdb.org/t/p/w300${char.profile_path}`
                          : require("../../assets/basicProfile.svg")
                      }
                    />
                  </ProfileWrapper>
                  <CastName>{char.name}</CastName>
                  <CharName>{char.character}</CharName>
                </Cast>
              ))
            ) : (
              <NoProduction>No Cast Data</NoProduction>
            )}
          </CastContainer>
          <ItemTitle>YOUTUBE</ItemTitle>
          <YoutubeContainer>
            {youtube.map(item => (
              <Youtube key={item.etag}>
                <YoutubeLink
                  href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
                  target="_blank"
                >
                  <ThumnailWrapper>
                    <Thumnail src={item.snippet.thumbnails.medium.url} />
                  </ThumnailWrapper>
                  <YoutubeTitle>{item.snippet.title}</YoutubeTitle>
                </YoutubeLink>
              </Youtube>
            ))}
             <YoutubeLink href={`https://www.youtube.com/results?search_query=${result.title
                ? result.title
                : result.original_title
                ? result.original_title
                : result.name
                ? result.name
                : result.original_name}`} target="_blank">
               <YoutubeMore>
                더보기
               </YoutubeMore>
            </YoutubeLink>
          </YoutubeContainer>
          <ItemTitle>비슷한 작품</ItemTitle>
          <SimilarContainer>
            {similar.map(item=>(
              <Similar key={item.id}>
                <SimilarLink>
                  <SimilarBackdropWrapper>
                    <SimilarBackdrop src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`}/>
                  </SimilarBackdropWrapper>
                  <SimilarTitle>{item.title}</SimilarTitle>
                  <SimilarItem>
                    {item.release_date}          
                    <span role="img" aria-label="rating">
                      ⭐️
                    </span>{" "}
                    {item.vote_average}
                  </SimilarItem>
                  <SimilarOverview>
                    {item.overview}
                  </SimilarOverview>
                </SimilarLink>
              </Similar>
            ))}
          </SimilarContainer>
        </DetailContent>
      </Container>
    </>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
