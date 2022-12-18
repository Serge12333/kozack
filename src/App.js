import Header from "./site-content/Header/header";
import Intro from "./site-content/Pages/introduction";
import OurProducts from "./site-content/Pages/our-products";
import Beau from "./site-content/Pages/beautiful";
import Tipsinf from "./site-content/Pages/tips";
import Photos from "./site-content/Pages/furniture";
import Footer from "./site-content/Footer/footer";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Intro />
      <OurProducts />
      <Beau />
      <Photos />
      <Footer />
    </div>
  );
};

export default App;
