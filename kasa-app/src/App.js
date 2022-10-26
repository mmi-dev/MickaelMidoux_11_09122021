import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routing from "./Routing";

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
