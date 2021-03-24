import "./App.css";
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection,FooterLinkList } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./component/Main";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title="Damion Stewart- Portfolio"
            scroll
          >
            <Navigation className="nav-bar">
              <Link className="nav-hover" to="/resume">
                Resume
              </Link>
              <Link to="/about-me">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Menu">
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/about-me">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>

          <div className='footer-containter'>
          <Footer className='footer-container' size="mini">
            <FooterSection>
              <FooterLinkList>
                <div className='footer-text'>
                <h4>Created by: Damion Stewart |</h4>
                </div>
                <div className='footer-list'>
                <Link to="/">Github</Link>
                <Link to="/">LinkedIn</Link>
                </div>
              </FooterLinkList>
            </FooterSection>
          </Footer>
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default App;
