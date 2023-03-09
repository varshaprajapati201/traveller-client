
import './App.css';
//import { Footer } from './shared/Footer/Footer';
//import Navbar from './shared/Header/Header';
//import { Home } from './pages/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet
} from "react-router-dom";

import { Contact } from './pages/contact/Contacts';
//import { Single } from './pages/Single-Continent-Blog/Single';
import Login from './pages/Login/login';
import DataProvider from './context/DataProvider';
import { Home } from './pages/Home/Home';
import { useState } from 'react';
import { Category } from './pages/Blog-By-Category/Category';
import { Compose } from './pages/compose/Compose';
import {BlogArchive } from "./pages/Blog-Archive/BlogArchive";
import { DetailView } from './pages/DetailView/DetailView';
import { BlogsByCategory } from './pages/Single-Continent-Blog/Single';
import { EditArticle } from './pages/EditArticle/editArticle';
import { MyBlogs } from './pages/MyBlogs/MyBlogs';

const PrivateRoute = ({isAuthenticated, ...props})=>{

  return isAuthenticated ? <>
<Outlet />
  </>
  : <Navigate replace to={"/login"} />
}

function App() {
  
  const [isAuthenticated,isUserAuthenticated] = useState(false);
  return (
   <div>
    <DataProvider>
   <BrowserRouter>

   <Routes>
      <Route path="/login" element={<Login isUserAuthenticated={isUserAuthenticated} />} /> 
      
      <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
         <Route path="/" element={<Home />} />
      </Route>

      <Route path='/Contact' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
         <Route path="/Contact" element={<Contact />} />
      </Route>   

      <Route path='/category' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
         <Route path="/category" element={<Category />} />
      </Route>

      <Route path='/cat' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
         <Route path="/cat" element={<BlogsByCategory />} />
      </Route>

      <Route path='/Compose' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
         <Route path="/Compose" element={<Compose />} />
      </Route>

      <Route path='/all' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
         <Route path="/all" element={<BlogArchive />} />
      </Route>

      <Route path='/detailView/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
         <Route path="/detailView/:id" element={<DetailView />} />
      </Route>

      <Route path='/edit/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
         <Route path="/edit/:id" element={<EditArticle />} />
      </Route>

      <Route path='/MyBlogs' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
         <Route path="/MyBlogs" element={<MyBlogs />} />
      </Route>


      {/* 
      <Route path="/edit/:id" element={<EditArticle />} /> */}
      
   </Routes>
   </BrowserRouter>
   </DataProvider>
   </div>
  );
}

export default App;
