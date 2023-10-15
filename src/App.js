import { Provider } from "react-redux";
import Body from "./Components/Body";
import Head from "./Components/Head";
import store from "./Utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Head />
        <Body />

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
