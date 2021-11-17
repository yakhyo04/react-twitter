import './App.css';
import Left from './Component/Left/Left';
import Main from './Component/Main/Main';
import Footer from './Component/Footer/Footer';
import Profile from './Component/Profile/Profile';
import Public from './Component/Route/Public';
import Private from './Component/Route/Private';
import {Routes, Route, useLocation} from 'react-router-dom';
import Users from './Component/Users/Users';
import Login from './Component/Pages/Login';
import NotFound from './Component/Pages/NotFound';
import Tweets from './Component/Tweets/Tweets';

function App() {
  return (
    // <div className="app">
      <div className="container">
      <Left/>
      {/* <Main/> */}
      {/* <Footer/> */}
      <Routes>
        <Route path="/" element={<Public/>}>
            {/* <Route path="/" element={<Left/>}/> */}
            <Route path="/tweets" element={<Tweets/>}/>
            <Route path="/main" element={<Main/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/footer" element={<Footer/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Route>
        <Route path="/" element={<Private/>}>
             <Route path="/" element={<Main/>}/>
        </Route> 
      </Routes>
      <Footer/>
      </div>
    // </div>
  );
}

export default App;