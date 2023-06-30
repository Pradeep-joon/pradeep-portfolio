import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import { useState, useEffect, useCallback, useMemo } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = useMemo(() => ["Web Developer", "Web Designer", "Java Developer", "Software Project Management"], []);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 200);
    const period = 200;




    const tick = useCallback(() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum((prevLoopNum) => prevLoopNum + 1);
            setDelta(500);
        }
    }, [toRotate, isDeleting, loopNum, text.length]);

    useEffect(() => {
        let ticker = setInterval(tick, delta);
        // Generate random color for h2 and p tags
        const h2Element = document.querySelector('.banner h2');
        const pElement = document.querySelector('.banner p');

        if (h2Element && pElement) {
            h2Element.style.color = generateRandomColor();
            pElement.style.color = generateRandomColor();
        }

        return () => { clearInterval(ticker) };
    }, [text, delta, tick, isDeleting, loopNum]);



    // Random color generation function
    const generateRandomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    const handleConnectClick = () => {
        window.open("https://www.linkedin.com/in/pradeep-joon/", "_blank");
      };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__jello" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`Hi I'm Pradeep Joon  `}<h2><span className="wrap">{text}</span></h2></h1>
                                    <p>"Mastering the art of full stack development, I blend the elegance of data structures
                                        and algorithms with the robustness of database management to create exceptional
                                        web experiences."</p>
                                    <button onClick={handleConnectClick}>
                                        Let's Connect<ArrowRightCircle size={35} />
                                    </button>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="HeaderImage" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
