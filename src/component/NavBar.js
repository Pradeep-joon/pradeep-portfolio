import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import logo from '../assets/img/pradeep profile..jpg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import resumePdf from '../assets/img/Updated_pradeep_cv_pdf.pdf'; 


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [buttonColor, setButtonColor] = useState('');

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setButtonColor(getRandomColor());
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const getRandomColor = () => {
    const colors = ['#4A2FBD', '#32A852', '#E91E63', '#FFC107', '#2196F3'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''} sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
            
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/pradeep-joon/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/Pradeep-joon">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/itsjoonofficial/">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <Button
              variant="primary"
              href={resumePdf}
              download="resume.pdf"
              className="resume-button"
              style={{ fontSize: '14px', padding: '6px 12px', backgroundColor: buttonColor }}
            >
              Download Resume
            </Button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
