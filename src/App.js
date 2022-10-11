import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layouts/Main";
import Home from "./Components/Home/Home";
import Topics from "./Components/Topics/Topics";
import Statistics from "./Components/Statistics/Statistics";
import Blog from "./Components/Blog/Blog";
import NotFound from "./Components/NotFound/NoFound";
import AllQuestions from "./Components/AllQuestions/AllQuestions";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Home /> },
        { path: "home", element: <Home /> },
        {
          path: "topics",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Topics />,
        },
        {
          path: "statistics",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Statistics />,
        },
        { path: "blog", element: <Blog /> },
        {
          path: "/topics/:topicId",
          loader: ({ params }) =>
            fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.topicId}`
            ),
          element: <AllQuestions />,
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
