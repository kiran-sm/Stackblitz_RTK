import "./App.css";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import appStore from "./features/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <h1>Hello</h1>
      <Counter />
    </Provider>
  );
}

export default App;
