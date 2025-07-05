import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Header from './components/Header';
import Details from './components/Details';
import ListSeafoodComponent from './admin/component/ListSeafoodComponent';
import AddSeafoodComponent from './admin/component/AddSeafoodComponent';
import Search from './components/Search';


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/details" element={<Details></Details>}></Route>
          <Route path='/admin' element={<ListSeafoodComponent></ListSeafoodComponent>}></Route>
          <Route path='seafoods' element={<ListSeafoodComponent></ListSeafoodComponent>}></Route>
          <Route path='/add-seafoods' element={<AddSeafoodComponent></AddSeafoodComponent>}></Route>
          <Route path='edit-seafood/:id' element={<AddSeafoodComponent></AddSeafoodComponent>}></Route>
          <Route path='/search' element={<Search></Search>}></Route>
        </Routes>
    </>
  );
}

export default App;
