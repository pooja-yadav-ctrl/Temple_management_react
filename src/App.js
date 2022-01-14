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
import TempleHistory from './components/TempleHistory';
import CreatePooja from './components/CreatePooja';
import TemplePooja from './components/TemplePooja';
import AddImage from './components/AddImage';
import AddVedio from './components/AddVedio';

function App() {
  const [logIn, setLogIn] = useState('false')
  const role = localStorage.getItem('role');
  // const pathname = window.location.pathname
  // console.log('P.......athname',pathname);
  
  useEffect(() => {
    if(window.location.pathname ==="/")
    {
      setLogIn('true')
    }
  },[]);

  return (
    <div className="App">
       {logIn === 'true'&& <LogIn/>}
       {logIn === 'false' && 
       <Router>
         <Header/>
         <Switch>
            <Route path="/khajrana" component={Home}/>
            <Route path="/gallery-image" component={GalleryImages}/>
            <Route path="/gallery-video" component={GalleryVideos}/>
            <Route path="/events" component={Events}/>
            <Route path="/offline-donation" component={Offline}/>
            <Route path="/online-donation" component={Online}/> 
            <Route path="/history" component={TempleHistory}/>
            <Route path="/pooja" component={TemplePooja}/>
           {role === "admin" &&  
            <>
              <Route path="/create" component={CreateTemple}/>
              <Route path="/create-history" component={CreateHistory}/>
              <Route path="/list" component={TempleList}/>
              <Route path="/create-pooja" component={CreatePooja}/>
              <Route path="/add-image" component={AddImage}/>
              <Route path="/add-video" component={AddVedio}/>
            </>
           } 
         </Switch>
         <Footer/> 
       </Router>
      } 
    </div>
  );
}

export default App;
