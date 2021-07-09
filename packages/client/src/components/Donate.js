import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../hooks";
import "./styles/player.css";

const Container = styled.div`
  color: white;
  background-color: black;
  width: 100vw;
  min-height: 100vh;
`;

const View = styled.div`
  max-width: 500px;
  margin: auto;
`;

const P = styled.p`
  font-size: 11pt;
  text-align: center;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 11pt;
`;

const HeaderItem = styled.span`
  margin: 12px;
`;

const Link = styled.a`
  font-size: 11pt;
  color: white;
  cursor: pointer;
  &:visited {
    color: white;
  }
`;

const Title = styled.div`
  font-size: 14pt;
  text-align: center;
`;

const SubTitle = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 100px;
  a {
    color: white;
    text-align: center;
    font-size: 8pt;
  }

  &:visited {
    color: white;
  }
`;

const ItemStyled = styled.div`
  display: flex;
  min-width: 300px;
  margin: 10px 0;
  font-size: 10pt;
  color: white;
  text-decoration: none;
  align-items: center;
  justify-content: space-between;

  button {
    margin-left: 10px;
    background-color: black;
    border: 1.5px solid white;
    padding: 1px;
    color: white;
  }

  button:active {
    opacity: 0.5;
  }
`;

const Item = (props) => {
  const ref = useRef();
  const fn = useCallback(() => {
    const textArea = document.createElement("textarea");

    textArea.style.position = "fixed";
    textArea.style.top = 0;
    textArea.style.left = 0;

    textArea.style.width = "2em";
    textArea.style.height = "2em";

    textArea.style.padding = 0;

    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";

    textArea.style.background = "transparent";

    textArea.value = props.copyValue;

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  });
  return (
    <ItemStyled
      ref={(_ref) => {
        ref.current = _ref;
      }}
    >
      {props.children}
      <button onClick={fn}>COPY</button>
    </ItemStyled>
  );
};

export default function Fest(props) {
  const ctx = useAppContext();

  ctx.setShowFooter(false);
  ctx.setShowHeader(false);

  return (
    <Container className={props.className}>
      <input id="myInput" hidden></input>
      <Header>
        <HeaderItem>
          <Link onClick={() => setLang("hy")}>HY</Link> /{" "}
          <Link onClick={() => setLang("en")}>EN</Link>
        </HeaderItem>
        <HeaderItem>
          <Link href="/">GO TO RADIO</Link>
        </HeaderItem>
      </Header>
      <View>
        <Title>SEPTEMBER 23-26</Title>
        <Title>Composers' Union, Dilijan</Title>
        <SubTitle></SubTitle>
        <Item copyValue={"4847040001053292"}>
          Converse Card / Sona Simonyan 4847040001053292
        </Item>
        <Item copyValue={"553765409"}>Idram ID / Sona Simonyan 553765409</Item>
        <Item copyValue={"vananeborian@gmail.com"}>
          PayPal / Vanane Borian vanasik@gmail.com
        </Item>
      </View>
    </Container>
  );
}
