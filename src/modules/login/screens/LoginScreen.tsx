import {
  BackgroundImage,
  ContainerLogin,
  LimitContainer,
  LogoImage,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <div>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitContainer>
          <LogoImage src="./logo.png" />
        </LimitContainer>
      </ContainerLogin>
    </div>
  );
};

export default LoginScreen;
