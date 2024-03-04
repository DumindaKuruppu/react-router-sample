import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ProfilesPage from "./pages/ProfilesPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <NotFoundPage/>,
  },
  {
    path: '/profile',
    element: <ProfilesPage/>,
    errorElement: <NotFoundPage/>,
    children: [
      {
        path: '/profile/:profileId',
        element: <ProfilePage/>,
        errorElement: <NotFoundPage/>,
      }
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
