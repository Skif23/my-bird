import { Link } from "react-router-dom";
import "./css/home.css";
const Home = () => {
  return (
    <div>
      {/* Header Content */}
      <div id="home">
        <div className="home-content">
          <h1 className="home-header text-center">
            This is Leo the <span className="primary-color">Budgie</span>
          </h1>
          <p className="home-paragraph text-center">
            My first ever budgie and also my first pet. He is a very talented
            bird, he can speak a lot, and also he can do a lots of tricks. There
            is an interesting story behind Leo. You can find more about the
            story
            <span className="separator">
              <Link to="/about">Here</Link>.
            </span>
          </p>
        </div>
      </div>

      {/* Section A */}
      <section id="section-a">
        <h1 className="section-title text-center">
          Little info about <span className="primary-color">Leo</span>
        </h1>
        <div className="container py-2">
          <div className="card-a">
            <h1 className="card-title text-center">Diet</h1>
            <ul>
              <li>Fruits</li>
              <li>Vegetables</li>
              <li>Millet Spray</li>
            </ul>
          </div>
          <div className="card-a">
            <h1 className="text-center">Tricks</h1>
            <ul>
              <li>Stand on Tennis Ball</li>
              <li>Push tennis ball</li>
              <li>Stand upside down</li>
            </ul>
          </div>
          <div className="card-a">
            <h1 className="text-center">Talking</h1>
            <ul>
              <li>Chicken</li>
              <li>What are you doing?</li>
              <li>Birdy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer Content*/}
      <footer id="main-footer">
        <i class="fa-solid fa-dove fa-2x"></i>
        <h1>Copyright &copy; 2022, All Rights Reserved</h1>
        <i class="fa-solid fa-dove fa-2x"></i>
      </footer>
    </div>
  );
};

export default Home;
