import "./App.css";
import Navbar from "./Components/Navbar";
import Top from "./Components/Top";
import Middle from "./Components/Middle";
import Bottom from "./Components/Bottom";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return <div className="App">
         <Navbar/>
         <Top/>
         <Middle/>
         <Bottom/>
         <Contact/>
         <Footer/>
         </div>
}

export default App;
