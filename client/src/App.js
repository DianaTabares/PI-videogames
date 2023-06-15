import './App.css';
import { Route } from "react-router-dom";
import Landing from './components/landingPage/Landing';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Footer from './components/Footer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App"> 
      <Route path="/" component={NavBar}/>
      <Route exact path="/" component={Landing}/>
      <Route path="/home" component={Home}/>
      <Route path="/detail/:id" component={Detail}/>
      <Route path="/form" component={Form}/>
      <div className= "Footer">
        <Footer/> 
      </div>
    </div>
  );
}

export default App;