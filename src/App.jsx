import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Nav/>
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
