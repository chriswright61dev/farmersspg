import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Venue from "./components/Venue/Venue";
import Events from "./components/Events/Events";
import Drinks from "./components/Drinks/Drinks";
import Foods from "./components/Foods/Foods";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="info-column">
          <Venue />
        </div>
        <div className="events-column">
          <Events />
        </div>
        <div className="drinks-column">
          <Drinks />
        </div>
        <div className="food-column">
          <Foods />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
