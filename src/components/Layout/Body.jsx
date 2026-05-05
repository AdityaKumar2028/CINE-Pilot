import Browse from "../BrowseComponents/Browse";
import Login from "../Auth/Login";
import Header from "./Header";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import MovieDetails from "../Movies/MovieDetails";
import AskPilot from "../AskPilotFeatures/AskPilot";

const Body = () => {
  const Layout = () => (
    <>
      <Header />
      <Outlet />
    </>
  );

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/browse",
          element: <Browse />,
        },
        {
          path: "/movie/:id",
          element: <MovieDetails />,
        },
        {
          path: "/askPilot",
          element: <AskPilot />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
