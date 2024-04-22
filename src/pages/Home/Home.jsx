import { Container } from "assets/global.Styles";
import { useNavigate } from "react-router-dom";
import { Section, WrapperImg, Item, Number, Name, WrapperInfo, ImgGirl, ImgPc, WrapperList, Info, Title, Description, Button } from "./Home.styled";
import  girl  from "../../assets/img/girl.png";
import pc from "../../assets/img/pc.png"
const HomePage = () => {
const navigate = useNavigate();
    return (
        <Section>
        <Container>
        <WrapperList>
                    <WrapperInfo>
                        <Title> Unlock your potential with the best  <span>language</span> tutors </Title>
                        <Description>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</Description>
                        <Button type="button" onClick={() => navigate('teachers')}> Get started </Button>
                    </WrapperInfo>
                    <WrapperImg>
                       <ImgGirl src={girl} alt="girl" width="339" />
                       <ImgPc src={pc} alt="mac" width="391" /> 
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
            </Container>
            </Section>
    )
}
export default HomePage;