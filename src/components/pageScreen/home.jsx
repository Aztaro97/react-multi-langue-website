import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import MainContainer from "../mainContainer";
import Slider from "react-slick";
import { MdPhoneEnabled } from "react-icons/md";
import { Link } from "react-router-dom";

import "./slider.css";

function HomeComponent() {
  return (
    <MainContainer>
      <Banner />
      <AboutUs />
      <Service />
    </MainContainer>
  );
}

const Banner = () => {
  return (
    <BannerStyling>
      <Container>
        <div className="row text-center">
          <h1 className="title mb-2">
            <span>We always strive </span> to satisfy our customers
          </h1>
          <ul>
            <li>Electric generators and Spare parts</li>
            <li>Electronic control unit systems</li>
            <li>Water filtration systems</li>
            <li>Water tank cooling and heating systems</li>
            <li>Solar energy system</li>
          </ul>
        </div>
      </Container>
    </BannerStyling>
  );
};

const BannerStyling = styled.section`
  background: linear-gradient(
      rgba(40, 50, 58, 0.85) 0%,
      rgba(40, 50, 58, 0.5) 100%
    ),
    url("/images/banner-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  color: #fff;
  height: 650px;
  padding: 3rem;
  & .container {
    border: 2px solid var(--orange-color);
    padding: 1rem !important;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & h1 {
    color: #fff;
    font-size: 2.5rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: bold;
  }

  & h1 span {
    display: block;
    color: var(--orange-color);
    text-decoration: underline;
  }

  & ul {
    list-style: none;
    & li {
      padding: 1px;
      font-size: 1.06rem;
      letter-spacing: 1px;
      text-transform: capitalize;
    }
  }
`;

const AboutUs = () => {
  return (
    <AboutStyling>
      <Container>
        <Row className="row">
          <Col lg={6}>
            <Row className="about_left">
              <Col xs={2} lg={2} className="firefighter_contente">
                <img
                  src="images/icons/firefighter.png"
                  alt=""
                  className="icon"
                />
              </Col>
              <Col xs={10} lg={10}>
                <h5>Who we are</h5>
                <h1>
                  We provide services and products with international quality
                  standards
                </h1>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <p>
              Leadership ambition and passion for excellence make us always
              strive to be the best in the size and quality of our business. We
              are armed to keep pace with <br />
              Through continuous development of our performance and
              diversification of our services in line with With the desires of
              our customers to enhance our competitiveness in all the activities
              in which we operate, we deserve the responsibility Therefore, the
              Saytarah Company for the trade of electrical appliances and
              cooling systems for water tanks Its relationship with the
              surrounding community, where it maintains its projects
            </p>
          </Col>
        </Row>
      </Container>
    </AboutStyling>
  );
};

const AboutStyling = styled.section`
  padding: 20px 0;
  & .about_left {
    & h5 {
      color: var(--orange-color);
    }
    & h1 {
      font-size: 1.8rem;
    }
    & .firefighter_contente {
      display: flex;
      & .icon {
        width: 65px;
        margin-top: auto;
        margin-bottom: auto;
      }
    }
  }
`;

const Service = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    autoplay: true,
    slidesToShow: 4,
    // rtl: lang === "ar" ? true : false,
    slidesToScroll: 1,
    dotsClass: "dots__bar",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  // const history = useHistory();

  const data = [
    {
      title: "Electric generators & Spare parts",
      img: "/images/gallery/a10.jpg",
      url: "electric-generators",
    },
    {
      title: "Electronic control unit systems",
      img: "/images/gallery/a2.jpg",
      url: "electric-control",
    },
    {
      title: "Water filtration systems",
      img: "/images/gallery/a14.jpg",
      url: "Water-filtration",
    },
    {
      title: "Water tank cooling and heating systems",
      img: "/images/gallery/a4.jpg",
      url: "Water-filtration",
    },
    {
      title: "Solar energy system",
      img: "/images/gallery/a35.jpg",
      url: "solar-energy",
    },
  ];

  return (
    <ServiceStyling>
      <h1 className="title">Our service</h1>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index}>
            <div className="card">
              <img src={item.img} alt="" className="card-img-top" />
              <div className="card-body">
                <p className="card-title">{item.title}</p>
              </div>
              <div className="card-footer">
                <a href="tel:+97165421161 " className="contact">
                  <i className="fas fa-phone-alt icon"></i>{" "}
                  <MdPhoneEnabled className="icon" /> call us
                </a>
                <a href={item.url} alt="">
                  voir plus
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </ServiceStyling>
  );
};

const ServiceStyling = styled.section`
  & .title {
    font-size: 2rem;
    text-transform: capitalize;
    color: var(--orange-color);
    text-align: center;
  }
  & .card {
    background: #fff;
    border-radius: 10px;
    margin: 10px 0;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    max-width: 250px;
    margin: 10px auto;
    &:hover {
      /* transform: scale(1.1); */
    }
    & .card-img-top {
      height: 200px;
      width: 100%;
      background-position: center;
      background-size: cover !important;
      background-repeat: no-repeat;
      transition: all 0.4s ease-in-out;
    }
    & .card-body {
      display: flex;
      justify-content: center;
      flex-direction: column;
      justify-content: center;
      height: 100px;
    }

    & h5 {
      margin-right: auto;
      margin-left: auto;
      margin-top: 0.7rem;
      margin-bottom: 0.5rem;
    }

    & .card-text {
      font-size: 0.9rem;
      font-weight: 400;
      color: var(--orange-color);
      letter-spacing: 1px;
    }
    & .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #fff;
      & .contact,
      & a {
        color: var(--orange-color);
        text-decoration: none;
        &:hover {
          color: var(--gray-color);
        }
      }
      & a {
        color: var(--gary-color);
      }
      & .contact {
        background: var(--orange-color);
        color: var(--gray-color);
        padding: 4px 10px;
        display: flex;
        align-items: center;
        & .icon {
          text-align: center;
          color: #fff;
          border-radius: 50%;
          font-size: 2rem;
          color: var(--gray-color);
        }
        &:hover {
          opacity: 0.9;
        }
      }
    }

    @media screen and (max-width: 1000px) {
      max-width: 230px;
    }
  }
`;

export default HomeComponent;
