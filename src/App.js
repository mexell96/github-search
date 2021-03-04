import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container pt-4">
        <Home />
      </div>
    </>
  );
}

export default App;
