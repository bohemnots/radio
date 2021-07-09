import React, { useState } from "react";
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

  @media only screen and (max-width: 600px) {
    max-width: unset;
    margin: 12px;
  }
`;

const P = styled.p`
  font-size: 11pt;
  text-align: center;

  @media only screen and (max-width: 600px) {
    text-align: justify;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 11pt;
  padding: 12px;
`;

const HeaderItem = styled.span``;

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

  a {
    color: white;
    text-align: center;
    font-size: 8pt;
  }

  &:visited {
    color: white;
  }
`;

const RedButton = styled.div`
  text-align: center;
  margin-top: 50px;

  a {
    margin-top: 100px;
    padding: 20px 15px;
    background-color: red;
    border-radius: 20px;
    color: white;
    text-decoration: none;
  }
`;

export default function Fest(props) {
  const ctx = useAppContext();
  const [lang, setLang] = useState("en");

  ctx.setShowFooter(false);
  ctx.setShowHeader(false);

  return (
    <Container className={props.className}>
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
        <SubTitle>
          <a href="/fest">https://bohemnotsradio.com/fest</a>
        </SubTitle>
        {text[lang].map((line) => (
          <P>{line}</P>
        ))}
      </View>
      <RedButton>
        <a href="/donate">DONATE</a>
      </RedButton>
    </Container>
  );
}

const text = {
  en: [
    `Hi dear… On the 23, 24, 25, 26 of September we are planning to organize a festival In the creative house of Dilijan Composers' Union. There are multigenre projects, bands and artists involved in the line up. To make the festival real, we do not want to ask for any sponsorship, because we want to be truthful to our manifest and keep our freedom.`,
    `So, if 80 pioneers would donate 15.000 AMD, we will be able to make the festival real, lighten the burden of finances and benefit. As a result of your donation, we will tidy up the location and will solve technical problems.`,
    `You can come to the space whenever you want, and can be a part of preparatory processes and in the end let’s see what will happen. `,
  ],
  hy: [
    `Բարև սիրելիս․․․ սեպտեմբերի 23, 24, 25, 26 Դիլիջանի կոմպոզիտորների միության ստեղծագործական տանը ուզում ենք ֆեստիվալ անել։ լայնափում ներգրավված են բազմաժանր պրոյեկտներ, խմբեր և արտիստներ։ ֆեստը իրականացնելու համար չենք ուզում դիմել հովանավորների, քանի որ ուզում ենք հավատարիմ մնալ մեր մանիֆեստին և պահել մեր անկախությունը։`,
    `Մի խոսքով, եթե 80 պիոներ մեզ նվիրաբերի 15 ,000հհդ կկարողանանք իրականացնել ֆեստը, կթեթևացնեք ֆինանսական բեռը ու տակ չենք տա։ քո դոնեյշնի արդյունքում, կկարողանանք կարգի բերել տարածքը ու լուծել տեխնիկական խնդիրները։`,
    `կարաս երբ ուզես գաս տարածք, մասնակցես նախապատրաստական պրոցեսներին, վերջում էլ տենանք ինչ կլինի։`,
  ],
};
