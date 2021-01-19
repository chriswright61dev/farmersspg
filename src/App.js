import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="info-column">info</div>
        <div className="events-column">events</div>
        <div className="drinks-column">drinks</div>
        <div className="food-column">food</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
