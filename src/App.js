import "./App.css";
import Sidebar from "./Layout/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div class="container wrapper">
      <main>
        <div className="row row-wrapper">
          <Sidebar/>
          <Home/>
          
        </div>
      </main>
    </div>
  );
}

export default App;
