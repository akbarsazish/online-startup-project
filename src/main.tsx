import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ErrorPage from './components/ErrorPage.tsx';
import Contact from './components/Contact.tsx';
import About from './components/About.tsx';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
