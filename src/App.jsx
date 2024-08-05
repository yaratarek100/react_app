import "./App.css";
import Layout from "./components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Portfolio from  "./components/Portfolio/Portfolio";

export function changeTitle(title){
  document.title = title;
}

function App() {
  let x = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={x}></RouterProvider>;
}

export default App;
