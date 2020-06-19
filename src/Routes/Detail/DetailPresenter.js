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
  margin-bottom: 10px;
`;

const Cover = styled.div`
  width:300px;
  min-width: 300px;
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

const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  position: relative;
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

// Video style
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

const ItemTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
`;

// Production Style
const ProductionContainer = styled.div` 
  margin: 15px 0;  
  padding: 20px 30px;
  width: 100%;
  display:flex;
  align-items: center;
  overflow-x:auto;
  overflow-y:hidden;
  font-size: 0.9rem; 
  background-color:rgba(255, 255, 255, 0.3);
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
  color:rgb(0,0,0);
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

  &:hover{
    overflow:visible;
    white-space: normal;
    text-align: center;    
  }
`;

const NoProduction = styled.div`
font-size: 2rem;
`;

// Cast Style
const CastContainer = styled.div` 
  margin: 15px 0;  
  width: 100%;
  display:flex;
  align-items: center;
  overflow-x:auto;
  overflow-y:hidden;
  font-size: 0.9rem; 
  background-color:rgba(255, 255, 255, 0.3);
  border-radius: 3px;  
`;

const Cast = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color:rgba(255, 255, 255, 0.7);
  border-radius: 3px;
  width: 8rem;
  height: 16rem;
  margin: 10px;
  color:rgb(0,0,0);
`;


const ProfileWrapper = styled.div`
  height: 11rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImg = styled.img`
  width: 7.5rem;
  border-radius: 3px 3px 0 0;
`;

const CastName = styled.div`
  margin-top: 10px;
  width: 6.5rem;
  text-align: left;

  font-size: 1rem;
  font-weight: bold;

  &:hover{
    overflow:visible;
    white-space: normal;    
  }
`;

const CharName = styled.div`
  margin-bottom: 10px;
  width: 6.5rem;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover{
    overflow:visible;
    white-space: normal;   
  }
`;

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

const DetailPresenter = ({ result, credits, loading, error }) =>(
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
      <DetailContent>
        <ItemTitle>
          프로덕션
        </ItemTitle>  
        <ProductionContainer>        
          {result.production_companies && result.production_companies.length > 0 ? result.production_companies.map((com, index) => 
            <Production key={com.id}>
              <LogoWrapper>
                <LogoImg                
                  src={com.logo_path?`https://image.tmdb.org/t/p/w300${com.logo_path}`:require("../../assets/noProduction.jpg")}
                />
              </LogoWrapper>
              <ProductionName>
                {com.name}
              </ProductionName>
            </Production> 
          ) : <NoProduction>No Production Data</NoProduction>}
        </ProductionContainer>
        <ItemTitle>
          주요 출연진
        </ItemTitle>
        <CastContainer>        
          {credits.cast && credits.cast.length > 0 ? credits.cast.map((char, index) => 
            <Cast key={char.id}>
              <ProfileWrapper>
                <ProfileImg                
                  src={char.profile_path?`https://image.tmdb.org/t/p/w300${char.profile_path}`:require("../../assets/noProduction.jpg")}
                />
              </ProfileWrapper>
              <CastName>
                {char.name}
              </CastName>
              <CharName>
                {char.character}
              </CharName>
            </Cast> 
          ) : <NoProduction>No Cast Data</NoProduction>}
        </CastContainer>
      </DetailContent>
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