import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/home.component';
import Navigation from './routes/Navigation/navigation.component';

const Shop = () => {
  return(
    <h1>I am the shop page</h1>
  );
};

const App = () => {
  return(
    <Routes>
      <Route element={<Navigation/>}>
        <Route path='/shop' element={<Shop/>}/>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>

  );
};

export default App;