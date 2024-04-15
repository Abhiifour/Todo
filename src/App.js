import "./App.css";
import Home from "./Pages/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Home />
     {/** Toaster is used to a toast a message when its triggred*/}
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

export default App;
