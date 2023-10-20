import { Provider } from "react-redux";
import Body from "./Components/Body";
import Head from "./Components/Head";
import store from "./Utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Head />
        <RouterProvider router={appRouter} />

        {/* 
        Head
        Body
          sidebar
            menuItems
          mainContainer
            ButtonList
            VideoContainer
              VideoCard
      
      */}
      </div>
    </Provider>
  );
}

export default App;
