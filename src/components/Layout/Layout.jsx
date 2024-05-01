import { Container } from '../../assets/global.Styles';
import { Outlet } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { Suspense, useEffect, useState } from 'react';
import ukraine from '../../assets/img/ukraine.jpg';
import {
  ButtonLogin,
  ButtonRegister,
  Header,
  HeaderContainer,
  ImgLogo,
  List,
  Nav,
  Navigate,
  TitleLogo,
  WrapperAut,
  WrapperLogo,
} from './Layout.styled';
import  Loader  from '../Loader/Loader';
//import { useModal } from 'helpers/useModal';
//import { ModalComponent } from 'components/Modal/Modal';
import { RegisterForm } from '../AuthForms/RegisterForm';
import { Login } from '../AuthForms/LoginForm';
//import { auth } from 'config/firebase-config';
//import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
//import { deleteToken } from 'redux/sliceAuth';

const Layout = () => {
  const [user, setUser] = useState(null);
  const authUser = useSelector(state => state.authUser.token);
  const dispatch = useDispatch();

  

  return (
    <>
      <Header>
        <Container>
          <HeaderContainer>
            <WrapperLogo>
              <ImgLogo
                src={ukraine}
                alt="Flag Ukraine"
                width="28"
                height="28"
              />
              <TitleLogo>LearnLingo</TitleLogo>
            </WrapperLogo>
            <Nav>
              <List>
                <li>
                  <Navigate activeclassname="active" to="/">
                    Home
                  </Navigate>
                </li>
                <li>
                  <Navigate to="teachers">Teachers</Navigate>
                </li>
                {authUser && (
                  <li>
                    <Navigate to="favorite">Favorite</Navigate>
                  </li>
                )}
              </List>
            </Nav>
            {!authUser && (
              <WrapperAut>
                <li>
                  <ButtonLogin type="button" >
                    <span>
                      <FiLogIn />
                    </span>
                    Log in
                  </ButtonLogin>
                </li>
                <li>
                  <ButtonRegister
                    type="button"
                  >
                    Register
                  </ButtonRegister>
                </li>
              </WrapperAut>
            )}
            {authUser && user && (
              <ButtonRegister type="button" >
                Log out
              </ButtonRegister>
            )}
          </HeaderContainer>
        </Container>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
