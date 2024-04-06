import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  // routes
  let router = useRoutes(routes);

  return <div className="App font-mono">{router}</div>;
}

export default App;
