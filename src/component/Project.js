import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from '../assets/img/Weather.webp';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import colorsharp2 from '../assets/img/color-sharp2.png';
import TrackVisibility from 'react-on-screen';

export const Project = () => {

    const projects = [
        {
            title: "Rapid-Weather",
            description: "Rapid Weather: A sleek web app by Pradeep Joon. Real-time weather updates, modern tech stack (HTML, CSS, JS), intuitive UI, and API integration for accurate forecasts.",
            imgUrl: projImg1,
            disclaimer : "Original UI may be differ!",
            link :" https://pradeep-joon.github.io/Rapid-Weather.github.io/",
        },
        {
            title: "Staff Management system ",
            description: "Efficiently manage staff with trust and transparency using the Blockchain-based Staff Management System by Pradeep Joon. React.js, Firebase, and Ethereum power this solution.",
            imgUrl: projImg2,
            disclaimer : "Original UI may be differ!",
            link : "https://github.com/Pradeep-joon/staff-management-system",
        },
        {
            title: "Gapshup Chat Application",
            description: "Experience seamless real-time communication with Gapshup Chat, a Java-based application built with Swing and Socket Programming. Enhance collaboration effortlessly.",
            imgUrl: projImg3,
            disclaimer : "Original UI may be differ!",
            link: "https://github.com/Pradeep-joon/Gapshup-chat",
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                    <h2>Projects</h2>
                                    <p>Embark on a journey through my digital realm, where innovation meets
                                        craftsmanship. Explore captivating web projects that push boundaries,
                                        captivate users, and redefine what's possible in the digital landscape.

                                    </p>
                                

                                </div>
                            )}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Alpha</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Beta</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Gamma</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                       
                                    </Row>
                                </Tab.Pane>


                                <Tab.Pane eventKey="second">
                                    <Row className="text-center">
                                        <h1 className="changing-color">Coming Soon!</h1>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row className="text-center">
                                        <h1 className="changing-color">Coming Soon!</h1>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorsharp2} alt="Background" />
        </section>
    );
}
