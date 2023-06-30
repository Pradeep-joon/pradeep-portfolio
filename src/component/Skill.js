import { Row, Col, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';
import TrackVisibility from 'react-on-screen';

export const Skill = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                        <TrackVisibility>
                        {({isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__flipInY" :""}>
                            <h2>
                                Skills
                            </h2>
                            <p>"Crafting digital excellence, my portfolio showcases a web developer's expertise 
                                in creating captivating frontend experiences. With a strong command of HTML, CSS,
                                 and JavaScript, I specialize in building dynamic interfaces that captivate and 
                                 engage users. Leveraging my skills in React, Node.js, and Express.js, I deliver
                                  robust and efficient web applications. Backed by a solid foundation in database
                                   management and a problem-solving mindset, I collaborate seamlessly in
                                    cross-functional teams. Stay ahead of the curve with my dedication to
                                     innovation and passion for delivering exceptional web experiences."</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image1" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image2" />
                                    <h5>Data Structure and Algorithm</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image3" />
                                    <h5>Java Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image4" />
                                    <h5>Logo Designer</h5>
                                </div>
                            </Carousel>
                            </div>}
                            </TrackVisibility>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="color sharp" />
        </section>
    )
}