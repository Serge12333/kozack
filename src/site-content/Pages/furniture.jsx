import React from "react";
import styled from "styled-components";
import "@fancyapps/ui/dist/fancybox.css";
import "./furniture.css";
import mapss from "../Content/furniture/mapps.jpg";
import AnimatedPage from "./AnimatedPage";

const MainWrapper = styled.div`
  padding-bottom: 87px;
`;

const Container = styled.div`
  padding-top: 0px;
  width: 100%;
  text-align: center;
  h4 {
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    color: #616161;
    margin: 0;
    margin-bottom: 8px;
  }
  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 120%;
    color: #3a3a3a;
    text-align: center;
  }
  img {
    width: 40%;
  }
`;

const Photos = () => {
  return (
    <AnimatedPage>
      <MainWrapper className="mainwrpfr">
        <Container>
          <h3 className="titlefnr" id="contacts">Наші контакти</h3>
          <div className="contactholder">
            <img src={mapss} alt="map" className="mapp"/>
          </div>
        </Container>
      </MainWrapper>
    </AnimatedPage>
  );
};
export default Photos;
