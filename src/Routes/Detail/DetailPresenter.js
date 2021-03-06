import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";
import { Helmet } from "react-helmet";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import Modal from "../../Components/Modal";
import "../../assets/custom-react-tabs.scss";

const Container = styled.div`
  width: calc(100vw - 17px);
  position: relative;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
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
  border-radius: 4px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
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
  line-height: 1.3rem;
  margin-top: 10px;
  max-height: 150px;
  overflow: auto;
`;

const VideoWrapper = styled.div`
  margin-top: 8px;
`;

const Video = styled.a``;

// 공통 style
const ItemTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 30px;
`;

const NoItemContainer = styled.div`
  padding: 0 30px;
  width: 100%;
  min-width: 920px;
  min-height: 7rem;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
`;

const NoItem = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 10px 5px;
  color: rgba(0, 0, 0, 0.7);
`;

// Tab Style
const TabPanelContainer = styled.ul`
  margin: 15px 0;
  padding: 0 30px;
  width: 100%;
  min-width: 920px;
  min-height: 8.2rem;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
`;

// Production Style
const Production = styled.li`
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
  line-height: 1.3rem;
  &:hover {
    overflow: visible;
    white-space: normal;
    text-align: center;
  }
`;

// Crew Style
const Crew = styled.li`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: start;
  white-space: nowrap;
  color: rgb(0, 0, 0);
  margin-right: 40px;
`;
const CrewName = styled.div`
  text-align: left;
  font-size: 1rem;
  font-weight: bold;
`;

const JobName = styled.div`
  line-height: 1.1rem;
  font-size: 0.9rem;
`;

// Homepage Sytle
const HomepageLink = styled.a`
  font-size: 1.4rem;
  font-weight: 600;
  color: #000;
`;

// Series Style
const Series = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6rem;
  & + & {
    margin-left: 20px;
  }
  color: rgb(0, 0, 0);
`;

const SeriesImgWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SeriesImg = styled.img`
  height: 100%;
  border-radius: 4px;
`;

const SeriesText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: start;
  height: 100%;
  margin-left: 10px;
`;

const SeriesName = styled.h3`
  margin: 6px 0 12px 0;
  font-size: 1.5rem;
  font-weight: 600;
`;

const SeriesLink = styled.a`
  padding: 10px 12px;
  background-color: white;
  border-radius: 4px;
  &:hover {
    filter: brightness(0.5);
  }
`;

// Seasons Style
const Seasons = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 12rem;
  margin: 25px 0;
  & + & {
    margin-left: 20px;
  }
  color: rgb(0, 0, 0);
  `;
  
const SeasonImg = styled.img`
    height: 100%;
    border-radius: 4px;
  `;
  
const SeasonName = styled.span`
    position: absolute;
    opacity: 0;
    transition: opacity 0.1s linear;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
  `;
  
const SeasonImgWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover{
    ${SeasonImg}{
      filter: brightness(0.5);
    }
    ${SeasonName}{
      opacity: 1;
    }
  }
`;

// Modal Style
const SeasonModalPosterWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex: 1;
`;

const SeasonModalPoster = styled.img`
  width: 100%;
`;

const SeasonModalItems = styled.div`
  margin: 10px 10px 10px 20px;
  flex: 1;
`;

const SeasonModalTitle = styled.div`
  line-height: 1.2rem;
  height: 2.4rem;
  text-align: left;
  word-break: keep-all;
  font-size: 1.1rem;
  font-weight: bold;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  margin-bottom: 5px;
`;

const SeasonModalItem = styled.div`
  margin-bottom: 20px;
  text-align: right;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.85rem;
`;

const SeasonModalOverview = styled.div`
  line-height: 1.2rem;
  height: 24rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 20;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
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
  &:hover {
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
  line-height: 1.1rem;
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
  &:hover {
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
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

// Similar Style
const SimilarContainer = styled.div`
  margin: 15px 0;
  width: 100%;
  min-width: 920px;
  padding: 0 3px;
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
  width: calc(25% - 8px);
  min-width: calc(25% - 8px);
  margin-bottom: 6px;
  color: rgb(255, 255, 255);
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.8);
  & + & {
    margin-left: 10px;
  }
  &:hover {
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

const SimilarItems = styled.div`
  margin: 10px;
`;

const SimilarTitle = styled.div`
  line-height: 1.2rem;
  height: 2.4rem;
  text-align: left;
  word-break: keep-all;
  font-size: 1.1rem;
  font-weight: bold;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
`;

const SimilarItem = styled.div`
  margin-bottom: 10px;
  text-align: right;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.85rem;
`;

const SimilarOverview = styled.div`
  line-height: 1.2rem;
  height: 3.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
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

const DetailPresenter = ({
  result,
  cast,
  crew,
  similar,
  youtube,
  isMovie,
  loading,
  error,
  modalVisible,
  openModal,
  closeModal
}) =>
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
                {isMovie
                  ? `${result.runtime} min`
                  : `에피소드 ${result.number_of_episodes} 개`}
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
            <Overview>
              {result.overview.length > 0
                ? result.overview
                : "스토리 정보가 없습니다."}
            </Overview>
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
          <Tabs>
            <TabList>
              {crew && <Tab>제작진</Tab>}
              {result.production_companies &&<Tab>프로덕션</Tab>}
              {result.homepage && <Tab>홈페이지</Tab>}
              {result.belongs_to_collection && <Tab>시리즈</Tab>}
              {result.seasons && <Tab>시즌</Tab>}
            </TabList>
            {crew && <TabPanel>
              <TabPanelContainer>
                {crew.length > 0 ? (
                  crew.map((item, index) => (
                    <Crew key={item.credit_id}>
                      <JobName>{item.job}</JobName>
                      <CrewName>{item.name}</CrewName>
                    </Crew>
                  ))
                ) : (
                  <NoItem>제작진 정보가 없습니다.</NoItem>
                )}
              </TabPanelContainer>
            </TabPanel>}
            {result.production_companies && <TabPanel>
              <TabPanelContainer>
                {result.production_companies.length > 0 ? (
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
                  <NoItem>프로덕션 정보가 없습니다.</NoItem>
                )}
              </TabPanelContainer>
            </TabPanel>}
            {result.homepage && <TabPanel>
              <TabPanelContainer>
                {result.homepage ? (
                  <li>
                    <HomepageLink href={result.homepage} target="_blank">
                      {result.homepage}
                    </HomepageLink>
                  </li>
                ) : (
                  <NoItem>홈페이지 정보가 없습니다.</NoItem>
                )}
              </TabPanelContainer>
            </TabPanel>}
            {result.belongs_to_collection && <TabPanel>
              <TabPanelContainer>
                {result.belongs_to_collection ? (
                  <Series>
                    <SeriesImgWrapper>
                      <SeriesImg
                        src={
                          result.belongs_to_collection.backdrop_path
                            ? `https://image.tmdb.org/t/p/w300${result.belongs_to_collection.backdrop_path}`
                            : require("../../assets/noProduction.jpg")
                        }
                      />
                    </SeriesImgWrapper>
                    <SeriesText>
                      <SeriesName>
                        {result.belongs_to_collection.name}
                      </SeriesName>
                      <SeriesLink
                        href={`https://www.themoviedb.org/collection/${result.belongs_to_collection.id}`}
                        target="_blank"
                      >
                        시리즈 보러가기
                      </SeriesLink>
                    </SeriesText>
                  </Series>
                ) : (
                  <NoItem>시리즈 정보가 없습니다.</NoItem>
                )}
              </TabPanelContainer>
            </TabPanel>}
            {result.seasons && <TabPanel>
              <TabPanelContainer>
                {result.seasons ? (
                  result.seasons.map((season, index) =>
                    <Seasons key={season.id}>
                      <SeasonImgWrapper id={index} onClick={openModal}>
                        <SeasonImg
                          src={
                            season.poster_path
                              ? `https://image.tmdb.org/t/p/w300${season.poster_path}`
                              : require("../../assets/noPosterSmall.png")
                          }
                        />
                        <SeasonName>{season.name}</SeasonName>  
                      </SeasonImgWrapper>
                      {      
                      modalVisible && 
                      <Modal index={index} visible={modalVisible[index].visible} onClose={closeModal}>
                        <SeasonModalPosterWrapper>
                          <SeasonModalPoster
                            src={
                              season.poster_path
                                ? `https://image.tmdb.org/t/p/w300${season.poster_path}`
                                : require("../../assets/noImage.png")
                            }
                          />
                        </SeasonModalPosterWrapper>
                        <SeasonModalItems>
                          <SeasonModalTitle>
                          {result.name
                            ? result.name
                            : result.original_name}{" "}{season.name}
                          </SeasonModalTitle>
                          <SeasonModalItem>
                            {season.air_date &&
                              season.air_date.replace(/-/gi, "/")}
                            <Divider>•</Divider>
                            {`에피소드 ${season.episode_count} 개`}
                          </SeasonModalItem>
                          <SeasonModalOverview>
                            {season.overview.length > 0
                              ? season.overview
                              : "스토리 정보가 없습니다."}
                          </SeasonModalOverview>
                        </SeasonModalItems>
                      </Modal>
                      }                      
                    </Seasons>
                  )
                ) : (
                  <NoItem>시즌 정보가 없습니다.</NoItem>
                )}
              </TabPanelContainer>
            </TabPanel>}
          </Tabs>
          <ItemTitle>주요 출연진</ItemTitle>
          <CastContainer>
            {cast && cast.length > 0 ? (
              cast.map((char, index) => (
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
              <NoItem>출연진 정보가 없습니다.</NoItem>
            )}
          </CastContainer>
          <ItemTitle>YOUTUBE</ItemTitle>
          <YoutubeContainer>
            {youtube &&
              youtube.map((item) => (
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
            {youtube ? (
              <YoutubeLink
                href={`https://www.youtube.com/results?search_query=${
                  result.title
                    ? result.title
                    : result.original_title
                    ? result.original_title
                    : result.name
                    ? result.name
                    : result.original_name
                }`}
                target="_blank"
              >
                <YoutubeMore>더보기</YoutubeMore>
              </YoutubeLink>
            ) : (
              <NoItemContainer>
                <NoItem>데이터가 없습니다.</NoItem>
              </NoItemContainer> 
            )}
          </YoutubeContainer>
          <ItemTitle>비슷한 작품</ItemTitle>
          <SimilarContainer>
            {similar &&
              similar.map((item) => (
                <Similar key={item.id}>
                  <Link to={isMovie ? `/movie/${item.id}` : `/show/${item.id}`}>
                    <SimilarBackdropWrapper>
                      <SimilarBackdrop
                        src={
                          item.backdrop_path
                            ? `https://image.tmdb.org/t/p/w300${item.backdrop_path}`
                            : require("../../assets/noImage.png")
                        }
                      />
                    </SimilarBackdropWrapper>
                    <SimilarItems>
                      <SimilarTitle>
                        {item.title ? item.title : item.name}
                      </SimilarTitle>
                      <SimilarItem>
                        {item.release_date
                          ? item.release_date.replace(/-/gi, "/")
                          : item.first_air_date.replace(/-/gi, "/")}
                        <Divider>|</Divider>
                        <span role="img" aria-label="rating">
                          ⭐️
                        </span>{" "}
                        {item.vote_average}
                      </SimilarItem>
                      <SimilarOverview>
                        {item.overview.length > 0
                          ? item.overview
                          : "스토리 정보가 없습니다."}
                      </SimilarOverview>
                    </SimilarItems>
                  </Link>
                </Similar>
              ))}
          </SimilarContainer>
        </DetailContent>
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    </>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  credits: PropTypes.object,
  similar: PropTypes.array,
  youtube: PropTypes.array,
  isMovie: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
