import { useQuery } from "react-query";
import { useParams } from "react-router";
import { fetchArtist, fetchTopAlbums } from "../api";
import { Col, Container, Row } from "react-bootstrap";
import TopAlbums from "./TopAlbums";
import TopTracks from "./TopTracks";
import Loading from "./Loading";
import DarkAndLightMode from "./DarkAndLightMode";

function ArtistDetail(props){
  const {artistName} = useParams();
  const {data, isLoading} = useQuery(["artist", artistName], () => fetchArtist(artistName));
  const {theme} = props;

  return(
  <>
  <Container>{
  !isLoading && 
    <div className={`card m-5 border ${theme.backgroundColor =="bg-light" ? "border-dark" : "border-light"} ${theme.backgroundColor}`}>
      <div className={`card-body m-5 border ${theme.backgroundColor =="bg-light" ? "border-dark" : "border-light"} shadow ${theme.backgroundColor}`}>
      <Row>
        <Col md={4}>
        <img src={data?.data?.artist.image[2]['#text']} alt="artist-image" className="m-5"/>
        </Col>
        <Col className="m-3">
        <h5 className="card-title">{data?.data?.artist.name}</h5>
        <p className="card-text">{data?.data?.artist.bio.summary.split('<a')[0]}</p>
        <div><a href={data?.data?.artist.bio.summary.split('"')[1]} className="text-dark">Read More on Last.fm</a></div>
        </Col>
      </Row>
      </div>
      <Row>
        <Col>
        <h3 className="text-center">Top Albums</h3>
        <TopAlbums artistName={artistName} theme={theme}/>
      </Col>
      <Col>
          <h3 className="text-center">Top Tracks</h3>
          <TopTracks artistName={artistName} theme={theme}/>
        </Col>
      </Row>
    </div>
    }
    <div>{isLoading && <Loading theme={theme}/>}</div>
    </Container>
    <a href="/" className={`fs-4 p-5 ${theme.color}`}> Return to Home Page</a>
  </>
  )
}
export default ArtistDetail;