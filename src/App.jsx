import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/home";
import Error from "./pages/Error";
import Layout from "./components/Layout";
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";
import { appContext } from "./context/appContext";
import { useReducer } from "react";
import { initialState, reducer } from "./utils/appState";

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
        element: <Crew />,
      },
      {
        path: "technology",
        element: <Technology />,
      },
    ],
  },
]);

function App() {
  const [appState, dispatch] = useReducer(reducer, initialState);
  return (
    <appContext.Provider value={{ appState, dispatch }}>
      <RouterProvider router={router} />
    </appContext.Provider>
  );
}

export default App;
