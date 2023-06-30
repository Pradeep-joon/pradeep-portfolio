import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from '../assets/img/portfolio.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} alt="Logo" style={{ height: "40px", width: "120px" }} />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                        <a href="https://www.linkedin.com/in/pradeep-joon/"><img src={navIcon1} alt="Social-icon images" /></a>
                        <a href="https://github.com/Pradeep-joon"><img src={navIcon2} alt="Social-icon images"/></a>
                        <a href="https://www.instagram.com/itsjoonofficial/"><img src={navIcon3} alt="Social-icon images"/></a>
                        </div>
                        <p>CopyRight 2023. All Right Reserved</p>

                    </Col>

                </Row>
            </Container>
        </footer>
    )
}