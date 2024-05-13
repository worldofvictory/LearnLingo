import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 20px 64px 15px 64px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 20px;
`;

export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TitleLogo = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.4px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 28px;
`;

export const Navigate = styled(NavLink)`
  font-size: 16px;
  line-height: 1.25;
  transition: color var(--transition);

  &:hover,
  :focus {
    color: var(--active-color);
  }

  &.active {
    color: #8a8a89;
  }
`;

export const WrapperAuth = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
`;

export const ButtonLogin = styled.button`
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration-color: transparent;
  transition: text-decoration var(--transition),
    text-decoration-color var(--transition);

  & span {
    display: inherit;
    transition: color var(--transition);
  }

  &:hover,
  :focus {
    & span {
      color: var(--active-color);
    }
    text-decoration: underline;
    text-underline-position: under;
    text-decoration-color: var(--active-color);
  }
`;

export const ButtonRegister = styled.button`
  border-radius: 12px;
  padding: 14px 39px;
  width: 166px;
  height: 48px;
  background-color: #121417;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: #fff;
  white-space: nowrap;

  &:hover,
  :focus {
    background-color: var( --hoverBt);
  }
`;
export const Nav = styled.nav``;