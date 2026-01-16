import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./routes/Homepage/Homepage";
import Signup from "./routes/Signup/Signup";
import Signin from "./routes/Signin/Signin";
import Courses from "./routes/Courses/Courses";
import CourseDetails from "./routes/CourseDetails/CourseDetails";
import MyLearning from "./routes/MyLearning/MyLearning";
import CourseInProgress from "./routes/CourseInProgress/CourseInProgress";
import Landingpage from "./routes/Landingpage/Landingpage";

export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "homepage",
        element: <Homepage />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "course/:id",
        element: <CourseDetails />,
      },
      {
        path: "course/:id/learn",
        element: <CourseInProgress />,
      },
      {
        path: "my-learning",
        element: <MyLearning />,
      },
    ],
  },
]);
