import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/Home";
import Error from "./pages/Error";
import Layout from "./components/Layout";
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";
import { BackgroundContext } from "./context/MyContext";
import { useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        // path: "/SPACE-TOURISM/",
        // or
        index: true,
        element: <Home />,
      },
      {
        path: "destination",
        element: <Destination />,
      },
      {
        path: "crew",
        element:<Crew/>
      },
    ],
  },
]);

function App() {
  const [url, setUrl] = useState("");
  return (
    <BackgroundContext.Provider value={{ url, setUrl }}>
      <RouterProvider router={router} />
    </BackgroundContext.Provider>
  );
}

export default App;
