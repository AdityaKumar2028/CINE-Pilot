import Browse from "./Browse";
import Login from "./Login";
import Header from "./Header";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import AskPilot from "./AskPilot";

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
