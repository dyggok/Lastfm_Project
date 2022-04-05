import { useQuery } from "react-query";
import { fetchTopTracks } from "../api";
import { Col, Row } from "react-bootstrap";
import { createPortal } from "react-dom";

function TopTracks(props){
  const {artistName, theme} = props;

  const topTracks = useQuery(["topTracks", artistName], () => fetchTopTracks(artistName));

  return(<>
     {topTracks?.data?.data?.toptracks.track.slice(0,5).map((t, index) => <div className={`card-body border ${theme.backgroundColor =="bg-light" ? "border-dark" : "border-light"} mx-5 my-3 shadow`} key={index}>
          <Row>
            <Col md={2}>
            <img src={t.image[1]['#text']} alt="artist-image"/>
            </Col>
            <Col>
            <p className="card-text"><b>{t.name}</b></p>
            <p className="card-text">{t.artist.name}</p>
            </Col>
            <Col>
            <p className="card-text">{t.playcount} play</p>
            </Col>
          </Row>
      </div>)}
  </>)
}

export default TopTracks;