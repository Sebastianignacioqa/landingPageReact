import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Jumbotron from './jumbotron.js'
import Cards from './cards';
import Footer from './footer';

function App() {
  return (<div className="container"><Navbar />
  <Jumbotron /><div className="card-group">
    <Cards image="https://rockcontent.com/es/wp-content/uploads/sites/3/2020/05/Qu%C3%A9-es-Bootstrap.jpg" title="Something about Bootstrap" text="Bootstrap here!" url="#" label="Go to topic" />
    <Cards image="https://htmlburger.com/blog/wp-content/uploads/2021/02/lets-talk-about-bootstrap.png" title="Bootstrap 5" text="Bootstrap 5 here!" url="#" label="Go to topic"/>
    <Cards image="http://sigdeletras.com/images/blog/202004_react_leaflet/react.png" title="Let's talk about React" text="React is here!" url="#" label="Go to topic"/>
    <Cards image="https://www.educative.io/api/page/5816757605367808/image/download/6486746733740032" title="Bootstrap and React" text="Bootstrap and React are here!" url="#" label="Go to topic"/>
    </div><Footer /></div>
    
  );
}

export default App;
