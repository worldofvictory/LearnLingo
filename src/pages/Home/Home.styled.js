import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 15px;
  padding-bottom: 32px;
`;
export const WrapperList = styled.div`
display: flex;
gap: 24px;
align-items: center;
margin-bottom: 24px;
`;
export const WrapperInfo = styled.div`
  width: 720px;
  height: 530px;
  border-radius: 30px;
  padding: 64px 98px 108px 98px;
  background-color: var(--backgr-info);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Title = styled.h1`
font-weight: 500;
font-size: 47px;
line-height: 1.16667;
letter-spacing: -0.02em;
max-width: 548px;
margin-bottom: 32px;
& span {
    font-weight: 400;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.accent};
    display: inline-block;
    font-style: italic;
    padding: 0 8px;
  }
`;
export const Description = styled.p`
font-size: 16px;
line-height: 1.375;
letter-spacing: -0.02em;
margin-bottom: 64px;
width: 471px;
`;
export const Button = styled.button`
  cursor: pointer;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.buttonBgColor};
  border: none;
  padding:  16px 88px;
  max-width: 267px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.55;
  transition: background-color ${({ theme }) => theme.animation.transition};

  &:hover,
  :focus {
     background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const WrapperImg = styled.div`
position: relative;
  width: 568px;
  height: 530px;
  border-radius: 30px;
  overflow: hidden;
`;
export const ImgGirl = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -55%);
  padding-top: 60px;
`;
export const Info = styled.ul`
 min-height: 116px;
 display: flex;
 column-gap: 100px;
 row-gap: 20px;
 justify-content: center;
 border-radius: 30px;
 border: 4px dashed ${({ theme }) => theme.colors.border};
 flex-wrap: wrap;
 padding: 40px 0;
`;
export const Item = styled.li`
 display: flex;
 align-items: center;
 gap: 16px;
`;
export const Number = styled.p`
 font-size: 28px;
 font-weight: 500;
 line-height: 1.14;
 letter-spacing: -0.56px;
`;
export const Name = styled.p`
 color: rgba(18, 20, 23, 0.7);
 font-size: 14px;
 font-weight: 400;
 line-height: 1.28;
 letter-spacing: -0.28px;
`;
