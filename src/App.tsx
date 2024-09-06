import { Fragment } from "react/jsx-runtime";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./pages/hero/Hero";
import Features from "./pages/features/Features";
import About from "./pages/about/About";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Features />
      <About />
      <Footer />
    </Fragment>
  );
}

export default App;
