import "./App.css";

function App() {
  return (
    <div className="main-container">
      <div className="aside">
        <div className="logo">
          <a href="#">
            <span>A</span>tlas
          </a>
        </div>
        <div className="nav-toggler">
          <span></span>
        </div>
        <ul className="nav">
          <li>
            <a href="#" className="active">
              <i className="fa fa-home"></i> Home
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-home"></i> About
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-home"></i> Services
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-home"></i> Portfolio
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-home"></i> Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="amin-container">
        <section className="home section">
          <div className="container">
            <div className="row">
              <div className="home-info padd-15">
                <h3 className="hello">
                  Hello, my name is <span className="name">Islom</span>
                </h3>
                <h3 className="my-profession">
                  I'm a <span className="typing">web developer </span>
                </h3>
                <p>
                  I'm a web Developer with extensive experience for over 4 yers.
                  My expertise is to create website ...
                </p>
                <a href="#contact" className="btn hire-me">
                  Hire Me
                </a>
              </div>
              <div className="home-img">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
