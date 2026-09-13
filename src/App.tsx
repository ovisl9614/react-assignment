import { Suspense } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Cards from './components/Cards';
import Footer from './components/Footer';


function App() {
  return (
    <Suspense fallback={<p>Loading...I am Noob</p>}>
      <Nav />
      <Banner />
      <Cards />
      <Footer />
    </Suspense>
  );
}


export default App
