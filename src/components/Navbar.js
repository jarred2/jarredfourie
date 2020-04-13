import React, { useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  text-align: center;
  background-color: grey;
`;

const Bar = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  background-color: palevioletred;
  width: 100%;
  margin-bottom: 10px;
  box-shadow: 0px 2px 2px grey;
`;

const BarItem = styled.div`
  display: flex;
  height: inherit;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
  transition: background-color 0.3s ease;
  :hover {
    background-color: rgba(229, 122, 127, 1);
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const BarItemStyle = styled.a`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

const BarImageContainer = styled.div``;

const HeaderNav = () => {
  const [navPro, setNavPro] = useState({
    mouseOver: false,
    mouseOut: false,
  });

  const [navCon, setNavCon] = useState({
    mouseOver: false,
    mouseOut: false,
  });

  const handleHover = (state, setState) => {
    const { mouseOut, mouseOver } = state;
    if (!mouseOver && !mouseOut) {
      setState({ ...state, mouseOver: true });
    } else {
      setState({ mouseOver: mouseOut, mouseOut: !mouseOut });
    }
  };

  const getImage = (state, key) => {
    if (state.mouseOver && !state.mouseOut) {
      return require(`../images/${key}_on.gif`);
    } else if (state.mouseOut && !state.mouseOver) {
      return require(`../images/${key}_off.gif`);
    } else {
      return require(`../images/${key}.png`);
    }
  };

  return (
    <Container>
      <Bar>
        <BarItem>
          <BarItemStyle>Home</BarItemStyle>
        </BarItem>
        <Menu>
          <BarItem
            onMouseEnter={() => handleHover(navCon, setNavCon)}
            onMouseLeave={() => handleHover(navCon, setNavCon)}
          >
            <BarImageContainer>
              <img
                src={getImage(navCon, "contact_me")}
                height="50"
                width="auto"
              ></img>
            </BarImageContainer>
            <BarItemStyle>Resume</BarItemStyle>
          </BarItem>

          <BarItem
            onMouseEnter={() => handleHover(navCon, setNavCon)}
            onMouseLeave={() => handleHover(navCon, setNavCon)}
          >
            <BarImageContainer>
              <img
                src={getImage(navCon, "contact_me")}
                height="50"
                width="auto"
              ></img>
            </BarImageContainer>
            <BarItemStyle>Art</BarItemStyle>
          </BarItem>

          <BarItem
            onMouseEnter={() => handleHover(navPro, setNavPro)}
            onMouseLeave={() => handleHover(navPro, setNavPro)}
          >
            <img
              src={getImage(navPro, "programming")}
              height="38"
              width="auto"
            ></img>
            <BarItemStyle>Programming</BarItemStyle>
          </BarItem>

          <BarItem
            onMouseEnter={() => handleHover(navCon, setNavCon)}
            onMouseLeave={() => handleHover(navCon, setNavCon)}
          >
            <BarImageContainer>
              <img
                src={getImage(navCon, "contact_me")}
                height="50"
                width="auto"
              ></img>
            </BarImageContainer>
            <BarItemStyle>Contact</BarItemStyle>
          </BarItem>
        </Menu>
      </Bar>
    </Container>
  );
};

export default HeaderNav;
