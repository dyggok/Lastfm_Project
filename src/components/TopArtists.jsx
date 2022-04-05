import { useEffect, useState, useRef, useCallback } from "react";
import { useQuery } from "react-query";
import { BASE_URL, api_key } from "../api";
import { Col, Container, Row } from "react-bootstrap";
import {Link} from "react-router-dom";
import Loading from "./Loading";

function TopArtists(props){
  const [pageNumber, setPageNumber] = useState(1);
  const [topArtist, setTopArtist] = useState([]);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  const {theme, setThemeName} = props;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(`${BASE_URL}/?method=chart.gettopartists&api_key=${api_key}&format=json&page=${pageNumber}`)
      .then(res => res.json()).then(data => {
        if(pageNumber <= 2){
          setTopArtist(data?.artists?.artist);
        }else {
          setTopArtist(prev => [...prev, ...data?.artists?.artist]);
        }
        setLoading(false);
      });
    }, 1000)   
  }, [pageNumber]);

  const lastItem = useCallback( node => {
    if(loading) return 
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        setPageNumber(prev => prev + 1)
      }
    })
    if(node) observer.current.observe(node)
   }, []);

  return(
  <>
  <Container md="auto">
    <h1 className="m-5 text-center">Top Artists</h1>
    {topArtist?.map((a, index) => {
      if(topArtist.length === index + 1){
        return <div key={index} ref={lastItem}>
        <div className="card col-md-6 offset-3 my-5">
          <Link to={`artists/${a.name}`} className={`card-body shadow rounded text-decoration-none ${theme.backgroundColor} ${theme.color}`}>
            <Row>
                <Col>
                  <img src={a.image[1]['#text']} alt="artist-image"/>
                </Col>
                <Col>
                  <h5 className="card-title">Artist</h5>
                  <p className="card-text fs-4">{a.name}</p>
                </Col>
                <Col>
                  <p className="card-text"><b>listeners:</b> {a.listeners}</p>
                  <p className="card-text"><b>playcount:</b> {a.playcount}</p>
                </Col>
              </Row>
            </Link>
        </div>
        </div>
      }else{
        return <div key={index}>
        <div className="card col-md-6 offset-3 my-5">
          <Link to={`artists/${a.name}`} className={`card-body shadow rounded text-decoration-none  ${theme.backgroundColor} ${theme.color}`}>
            <Row>
                <Col>
                  <img src={a.image[1]['#text']} alt="artist-image"/>
                </Col>
                <Col>
                  <h5 className="card-title">Artist</h5>
                  <p className="card-text fs-4">{a.name}</p>
                </Col>
                <Col>
                  <p className="card-text"><b>listeners:</b> {a.listeners}</p>
                  <p className="card-text"><b>playcount:</b> {a.playcount}</p>
                </Col>
              </Row>
            </Link>
        </div>
        </div>
}})}
    <div>{loading && <Loading theme={theme}/>}</div>
   </Container>
  </>
  )
}
export default TopArtists;