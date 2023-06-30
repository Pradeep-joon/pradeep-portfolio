import { Col, } from "react-bootstrap"

export const ProjectCard = ({ title, description, imgUrl,disclaimer,link }) => {
    return (
        <Col sm={6} md={4}>
            <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="proj-imgbx">
                <img src={imgUrl} alt="Project-UI"/>
                <div className="proj-txtx">
                    <h4 style={{ color: "white" }}>{title}</h4>
                    <span style={{ color: "white" }}>{description}</span><br/><br/><br/><br/><br/><br/>
                    <small style={{ color: "white" }} >{disclaimer}</small>
                </div>
            </div>
            </a>
        </Col>
    )
}