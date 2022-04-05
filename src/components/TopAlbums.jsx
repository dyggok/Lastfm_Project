import { useQuery, QueryClientProvider } from "react-query";
import { fetchTopAlbums } from "../api";
import { Col, Row } from "react-bootstrap";

function TopAlbums(props){
  const {artistName, theme} = props;
  
  const topAlbums = useQuery(["topAlbums", artistName], () => fetchTopAlbums(artistName));

  return(<>
     {topAlbums?.data?.data?.topalbums.album.slice(0,5).map((t, index) => <div className={`card-body border ${theme.backgroundColor =="bg-light" ? "border-dark" : "border-light"} mx-5 my-3 shadow`} key={index}>
          <Row>
            <Col md={2}>
            <img src={t.image[1]['#text']} alt="artist-image"/>
            </Col>
            <Col md={6}>
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
export default TopAlbums;