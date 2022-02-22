import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import "./footer.css";

function FooterComponet() {
  return (
    <FooterStyling>
      <Container>
        <Row className="row">
          <Col lg={3} md={4} sm={4}>
            <div
              className="footer_info"
              data-aos="zoom-in-right"
              data-aos-delay="500"
            >
              <h1>Al Saytarah Electronic</h1>
              <h6>Follow us : </h6>
              <div className="social_media mb-3">
                <a href="/#" className="link" rel="noreferrer" target="_blank">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="/#" className="link" rel="noreferrer" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="/#" className="link" rel="noreferrer" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/al_saytarh/"
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={3} md={4} sm={4}>
            <div
              className="footer_link"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <h1>Quick Links</h1>
              <ul className="nav">
                <li>
                  <a href="#home">home</a>
                </li>
                <li>
                  <a href="#about">about us</a>
                </li>
                <li>
                  <a href="#service">services</a>
                </li>
                <li>
                  <a href="#gallery">gallery</a>
                </li>
                <li>
                  <a href="#testimonials">testimonials</a>
                </li>
                <li>
                  <a href="./src/contact.html">contact us</a>
                </li>
              </ul>
            </div>
          </Col>
          <div className="col-lg-3 col-md-4 mb-sm-4">
            <div
              className="footer_service"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <h1>services</h1>
              <ul className="nav">
                <li>Electric generators & Spare parts</li>
                <li>Electronic control unit systems</li>
                <li>Water filtration systems</li>
                <li>Water tank cooling and heating systems</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div
              className="footer_contact"
              data-aos="zoom-in-left"
              data-aos-delay="500"
            >
              <h1>Contact info</h1>
              <ul className="nav">
                <li>
                  <a
                    href="https://goo.gl/maps/9eboLNF3dQgKafqP6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-map-marker-alt"></i> Sharjah -
                    Industrial No. 3 - Near CAT
                  </a>
                </li>
                <li>
                  <a href="tel:+97165421161">
                    <i className="fas fa-phone-alt"></i> +971 06 5421161
                  </a>
                </li>
                <li>
                  <a href="tel:+971509139138">
                    <i className="fas fa-phone-alt"></i> +971 050 9139138
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:al.deleme83@gmail.com"
                    style={{ textTransform: "lowercase" }}
                  >
                    <i className="fas fa-envelope"></i> al.deleme83@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Row>
        <hr />
        <p>Copyright 2021, all rights reserved.</p>
      </Container>
    </FooterStyling>
  );
}

const FooterStyling = styled.footer`
  max-width: var(--main-width);
  margin: 0 auto;
  background-image: linear-gradient(
      90deg,
      rgba(55, 55, 55, 1) 0%,
      rgba(107, 107, 107, 0.9220063025210083) 77%
    ),
    url("/images/repairman-doing-air-conditioner-service.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: #fff;
  padding: 20px 0;

  & .footer_info h1,
  & .footer_link h1,
  & .footer_service h1,
  & .footer_contact h1 {
    font-size: 1.4rem;
    text-transform: capitalize;
  }
  & .footer_info p {
    font-size: 1rem;
  }
  & a {
    color: #fff;
    text-decoration: none;
    text-transform: capitalize;
  }
  & a:hover {
    color: var(--orange-color);
  }
  & .footer_info .social_media a {
    color: #fff;
    transition: all 0.2s ease-in-out;
  }
  & .footer_info .social_media a:hover {
    transform: scale(1.2);
  }
  & .footer_info .number span {
    display: block;
    font-weight: 700;
    font-size: 1.2rem;
    margin: 0;
  }

  & .footer_link ul {
    display: flex;
    flex-direction: column;
  }
  & .footer_link ul li {
    margin-bottom: 0.4rem;
  }

  & .footer_service ul {
    display: flex;
    flex-direction: column;
  }
  & .footer_service ul li {
    text-transform: capitalize;
    margin-bottom: 0.4rem;
  }

  & .footer_contact ul {
    display: flex;
    flex-direction: column;
  }
  & .footer_contact ul li {
    text-transform: capitalize;
    margin-bottom: 0.4rem;
  }
  & .footer_contact .fas {
    margin: 0 5px;
  }
`;

export default FooterComponet;
