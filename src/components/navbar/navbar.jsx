import React, { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import { GrLanguage } from "react-icons/gr";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function NavbarComponent() {
  const languages = [
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },

    {
      code: "ar",
      name: "العربية",
      dir: "rtl",
      country_code: "ae",
    },
  ];

  const { t } = useTranslation();
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage, t]);
  return (
    <HeaderContainer>
      <Navbar expand="lg" className="py-3 px-2">
        <Container fluid>
          <Navbar.Brand href="#">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="nav_link" href="#action1">
                Home
              </Nav.Link>
              <Nav.Link className="nav_link" href="#action1">
                About
              </Nav.Link>
              <Nav.Link className="nav_link" href="#action1">
                Service
              </Nav.Link>
              <Nav.Link className="nav_link" href="#action1">
                Testimonials
              </Nav.Link>
              <Nav.Link className="nav_link" href="#action1">
                Contact us
              </Nav.Link>
            </Nav>
            <NavDropdown
              title={
                <span style={{textTransform: "capitalize"}}>
                  <GrLanguage /> {i18next.language} {" "}
                </span>
              }
              id="navbarScrollingDropdown"
            >
              {languages.map(({ code, name, country_code }, index) => (
                <NavDropdown.Item
                  key={index}
                  onClick={() => {
                    i18next.changeLanguage(code);
                    console.log({ code });
                  }}
                >
                  {name}{" "}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  max-width: var(--max-width);
  margin: 0 auto;
  & .nav_link {
    text-transform: uppercase;
    &:hover {
      color: var(--orange-color) !important;
    }
  }
`;
export default NavbarComponent;
