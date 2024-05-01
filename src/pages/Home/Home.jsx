import { useEffect, useState } from 'react';
import { Container } from "assets/global.Styles";
import { useNavigate } from "react-router-dom";
import { Section, WrapperImg, Item, Number, Name, WrapperInfo, ImgGirl, ImgPc, WrapperList, Info, Title, Description, Button } from "./Home.styled";
import girlpink  from "../../assets/img/girlpink.png";
import girlpeach from "../../assets/img/girlpeach.png";
import girlgray from "../../assets/img/girlgray.png";
import girlblue from "../../assets/img/girlblue.png";
import girlcrimson from "../../assets/img/girlcrimson.png";
import { ThemeProvider } from 'styled-components';
import {
  themeBlue,
  themeCrimson,
  themeGray,
  themePeach,
  themePink,
} from "../../styled/themes";
const pictures = [girlpeach, girlpink, girlblue, girlgray, girlcrimson];
const HomePage = () => {
  const [picture, setPicture] = useState(girlpink);
  const [selectedTheme, setSelectedTheme] = useState(themePeach);
useEffect(() => {
    const randomIndex = Math.floor(Math.random() * pictures.length);

    setPicture(pictures[randomIndex]);

    switch (randomIndex) {
      case 0:
        setSelectedTheme(themePeach);
        break;
      case 1:
        setSelectedTheme(themePink);
        break;
      case 2:
        setSelectedTheme(themeBlue);
        break;
      case 3:
        setSelectedTheme(themeGray);
        break;
      case 4:
        setSelectedTheme(themeCrimson);
        break;

      default:
        break;
    }
  }, []);
const navigate = useNavigate();
    return (
        <Section>
            <Container>
                <ThemeProvider theme={selectedTheme}>
        
                <WrapperList>
                    <WrapperInfo>
                        <Title> Unlock your potential with the best  <span>language</span> tutors </Title>
                        <Description>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</Description>
                        <Button type="button" onClick={() => navigate('teachers')}> Get started </Button>
                    </WrapperInfo>
                    < WrapperImg>
                       <ImgGirl $picture={picture} src={picture}
        alt="girl with laptop"/>
         </WrapperImg>               
                    
        </WrapperList>
                <Info>
                    <Item>
                        <Number>32,000 +</Number>
                        <Name>Experienced tutors</Name>
                    </Item>
                    <Item>
                        <Number>300,000 +</Number>
                        <Name>5-star tutor reviews</Name>
                    </Item>
                    <Item>
                        <Number>120 +</Number>
                        <Name>Subjects taught</Name>
                    </Item>
                    <Item>
                        <Number>200 +</Number>
                        <Name>Tutor nationalities</Name>
                    </Item>
                    </Info>
                     </ThemeProvider>
                    </Container>
               
                
               
            </Section>
    )
}
export default HomePage;