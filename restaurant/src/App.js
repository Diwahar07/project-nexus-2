

import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import './styles.scss';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
      path:"/",
      element:<Home/>
    },
    {
      path:"/menu",
      element:<Home/>
    },
    {
      path:"/about",
      element:<Home/>
    },
    {
      path:"/contact",
      element:<Home/>
    },
  ],
 
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>
  }
  
]);
function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
}
function App() {
  return (
    <div className="app">
         <div  className='container'>
         <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
