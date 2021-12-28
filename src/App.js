import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { GalleryImages } from './components/Gallery-images';
import { GalleryVideos } from './components/Gallery-videos';
import { Events } from './components/Events';
import { Offline } from './components/Offline';
import { Online } from './components/Online';
import LogIn from './components/Log-in';
import { useState, useEffect } from 'react';
import CreateTemple from './components/CreateTemple';
import TempleList from './components/TempleList';
import CreateHistory from './components/CreateHistory';

function App() {
  const [logIn, setLogIn] = useState('false')
  const authentication_token = localStorage.getItem('msg');
  console.log('authentication_token',authentication_token);
  useEffect(() => {
    if(window.location.pathname ==="/login")
    {
      setLogIn('true')
    }
  },[]);

  return (
    <div className="App">
       {logIn === 'true' && <LogIn/>}
       {logIn === 'false' && 
       <Router>
         <Header/>
         <Switch>
           <Route path="/" component={Home} exact={true}/>
           <Route path="/gallery-image" component={GalleryImages}/>
           <Route path="/gallery-video" component={GalleryVideos}/>
           <Route path="/events" component={Events}/>
           <Route path="/offline-donation" component={Offline}/>
           <Route path="/online-donation" component={Online}/>
           <Route path="/list" component={TempleList}/>
           {authentication_token === "bKwD3Nkur5nyTFrNzD7_" &&  <>
           <Route path="/create" component={CreateTemple}/>
           <Route path="/create-history" component={CreateHistory}/>
           </>} 
         </Switch>
         <Footer/> 
       </Router>
      } 
    </div>
  );
}

export default App;
