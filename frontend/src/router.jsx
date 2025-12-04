export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        Path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
