import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Venue from "./components/Venue/Venue";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="info-column">
          <Venue />
        </div>
        <div className="events-column">events</div>
        <div className="drinks-column">drinks</div>
        <div className="food-column">food</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
