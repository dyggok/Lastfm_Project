import DarkAndLightMode from "./components/Navbar";
import TopArtists from "./components/TopArtists";
import { Container } from "react-bootstrap";
function MainPage(props){
  
  const {theme, setThemeName} = props;

  return(<>
    <TopArtists theme={theme} setThemeName={setThemeName}/>
  </>)
}
export default MainPage;
