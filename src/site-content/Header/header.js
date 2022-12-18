import styled from "styled-components";
import Funiro from "./../Header/logo.png";
import "./styles.css";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const Main = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  img {
    align-self: center;
    cursor: pointer;
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Inputs = styled.div`
  display: flex;
  img {
    margin-right: 41px;
  }
  logos {
    max-width: 60%;
  }
  ul {
    list-style: none;
    display: flex;
    column-gap: 40px;
    margin-right: 43px;
    li {
      a {
        text-decoration: none;
        color: #3a3a3a;
        font-size: 16px;
        transition: 0.5s ease-in-out;
        &:hover {
          color: orange;
        }
      }
    }
  }
`;

const Searchbar = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 15px;
  width: 480px;
  img {
    margin-right: 15px;
  }
  input {
    outline: none;
    border: none;
    color: #3a3a3a;
    font-size: 16px;
    font-family: "Gilroy";
    width: 60%;
  }
`;

const Account = styled.div`
  display: flex;
  column-gap: 50px;
`;

const Header = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
    document.body.classList.toggle("lock", setActive(!isActive));
  };

  const closeSideBar = () => {
    setActive(false);
    document.body.classList.toggle("lock", setActive(false));
  };

  let activeClassName = "activated";

  return (
    <div>
      <div className={isActive ? "sidenav activemove" : "sidenav"}>
        <a href="#intro" className="sidelink" onClick={closeSideBar}>
          Головна
        </a>

        <a href="#merchandise" onClick={closeSideBar}>
          Товари
        </a>

        <a href="#tier" onClick={closeSideBar}>
          Готові рішення
        </a>

        <a href="#contacts" onClick={closeSideBar}>
          Контакти
        </a>

        <div className="white-line"></div>
      </div>
      <div className="resp-menu-sticky">
        <div className="responsive_menu">
          <div className="logo">
            <img src={Funiro} alt="guest-house-small.png" />
          </div>
          <div
            onClick={toggleClass}
            className={
              isActive ? "nav-button closebtn active" : "nav-button closebtn"
            }
          >
            <span></span>
          </div>
        </div>
      </div>
      <Main>
        <Container>
          <Navigation className="navigation-none">
            <Inputs className="tags-names">
              <img src={Funiro} className="logos" alt="funiro" />
              <ul>
                <li>
                  <a href="#intro">Головна</a>
                </li>
                <li>
                  <a href="#merchandise">Товари</a>
                </li>
                <li>
                  <a href="#tier">Готові рішення</a>
                </li>
                <li>
                  <a href="#contacts">Контакти</a>
                </li>
              </ul>
            </Inputs>
          </Navigation>
        </Container>
      </Main>
    </div>
  );
};

export default Header;
