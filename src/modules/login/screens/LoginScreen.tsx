import Input from '../../../shared/inputs/input/input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitContainer,
  LogoImage,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <div>
      <ContainerLoginScreen>
        <ContainerLogin>
          <LimitContainer>
            <LogoImage src="./logo.png" />
            <Input title="USUÁRIO" />
            <Input title="SENHA" />
          </LimitContainer>
        </ContainerLogin>
        <BackgroundImage src="./background.png" />
      </ContainerLoginScreen>
    </div>
  );
};

export default LoginScreen;
