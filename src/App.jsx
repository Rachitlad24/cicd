import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Displaycounter from './components/Displaycounter'
import Header from './components/Header'
import Container from "./components/Container";
import Controls from "./components/Controls";
import Privacym from "./components/Privacym";
import { useSelector } from "react-redux";

function App() {
 const privacy = useSelector(store => store.privacy);
  

  return (
   <div>
     <center className="px-4 py-5 my-5 text-center">
      <Container> 
    <Header>
    </Header>
    <div className="col-lg-6 mx-auto">
    {privacy ? <Privacym> </Privacym> : <Displaycounter></Displaycounter> } 
    <Controls> </Controls>
    </div>
    </Container>
  </center>
   </div>
  )
}

export default App
