import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./routes/Homepage/Homepage";
import Signup from "./routes/Signup/Signup";
import Landingpage from "./routes/Landingpage/Landingpage";

export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        index: true,
        element: <Landingpage />,
      },
      {
        path: "homepage",
        element: <Homepage />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);
